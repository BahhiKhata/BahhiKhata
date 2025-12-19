import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1>💰 Bahhi-Khata</h1>
        <div className="navbar-links">
          <a onClick={() => router.push('/')}>Home</a>
          {isLoggedIn ? (
            <>
              <a onClick={() => router.push('/expenses')}>Expenses</a>
              <a onClick={handleLogout}>Logout</a>
            </>
          ) : (
            <>
              <a onClick={() => router.push('/login')}>Login</a>
              <a onClick={() => router.push('/register')}>Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}