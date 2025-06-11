'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Invalid login');
    }
  };

  return (
      <div className="loginPageContainer">
        <div className="loginCard">
          <h1 className="loginTitle">Login</h1>
          <input
            type="text"
            placeholder="Username"
            className="loginInput"
            onChange={(e) => setUsername(e.target.value)}
            value={username} // Controlled component
          />
          <input
            type="password"
            placeholder="Password"
            className="loginInput"
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
          />
          <button className="loginButton" onClick={handleLogin}>
            Login
          </button>
          {error && <p className="errorMessage">{error}</p>}
        </div>
      </div>
  );
}