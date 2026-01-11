const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const db = require('../config/db');

/**
 * ASSUMPTION (Phase 1 only):
 * expense_type_id = 1 → "General"
 */

// ADD EXPENSE
router.post('/', auth, async (req, res) => {
  try {
    const { title, amount, date, expense_type_id } = req.body;

    // Default to "General" type if not provided
    const typeId = expense_type_id || 1;

    const result = await db.query(
      `INSERT INTO expenses (user_id, title, amount, expense_date, expense_type_id)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [req.user.userId, title, amount, date, typeId]
    );

    res.status(201).json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// GET ALL EXPENSES
router.get('/', auth, async (req, res) => {
  try {
    const result = await db.query(
      `SELECT 
          e.id,
          e.title,
          e.amount,
          e.expense_date,
          t.name AS expense_type
       FROM expenses e
       JOIN expense_types t ON e.expense_type_id = t.id
       WHERE e.user_id = $1
       ORDER BY e.expense_date DESC`,
      [req.user.userId]
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// DELETE EXPENSE
router.delete('/:id', auth, async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM expenses
       WHERE id = $1 AND user_id = $2
       RETURNING id`,
      [req.params.id, req.user.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
