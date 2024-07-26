import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { signInWithGoogle, signInWithFacebook } from './firebase';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // สมมติว่า login สำเร็จ
    navigate('/blog');
  };
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/blog');
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithFacebook();
      navigate('/blog');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg'>
    <div className="login-container">
      <h1>เข้าสู่ระบบ</h1>
      <form onSubmit={handleLogin}>
        <label>
          ชื่อผู้ใช้:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          รหัสผ่าน:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe">จดจำรหัสผ่าน</label>
        </div>
        <button type="submit">เข้าสู่ระบบ</button>
        <button type="submit">สมัครใช้งาน</button>
        <button className="login-btn google" onClick={handleGoogleLogin}>
        เข้าสู่ระบบด้วย Google
      </button>
      <button className="login-btn facebook" onClick={handleFacebookLogin}>
        เข้าสู่ระบบด้วย Facebook
      </button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
