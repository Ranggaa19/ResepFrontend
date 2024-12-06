import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'; // Mengimpor CSS dari folder src

const Register = () => {
  const [name, setName] = useState("");  // Menyimpan nilai input name
  const [email, setEmail] = useState("");  // Menyimpan nilai input email
  const [password, setPassword] = useState("");  // Menyimpan nilai input password
  const [confirmPassword, setConfirmPassword] = useState("");  // Menyimpan nilai input confirm password
  const [errorMessage, setErrorMessage] = useState("");  // Menyimpan pesan error jika ada
  const navigate = useNavigate();  // Untuk navigasi setelah berhasil register

  const handleRegister = async (e) => {
    e.preventDefault();  // Mencegah form untuk reload

    // Validasi jika password dan confirm password tidak cocok
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Kirim permintaan register ke API backend
    try {
      const response = await fetch("http://127.0.0.1:8000/routes/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Mengatur header agar backend tahu jenis konten
        },
        body: JSON.stringify({ name, email, password }), // Mengirim data JSON ke API
      });

      const data = await response.json();

      // Jika registrasi berhasil, arahkan ke halaman login
      if (response.ok) {
        navigate("/login");
      } else {
        // Menampilkan pesan error jika ada masalah pada server
        setErrorMessage(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      // Menampilkan error jika tidak bisa melakukan request
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h2>Register</h2>
        {/* Menampilkan pesan error jika ada */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
