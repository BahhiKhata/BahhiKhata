import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/expenses');
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>Welcome to Bahhi-Khata</h1>
        <p>Your simple and professional expense tracker</p>
        <button className="btn" onClick={() => router.push('/register')}>
          Get Started
        </button>
      </div>
    </>
  );
}