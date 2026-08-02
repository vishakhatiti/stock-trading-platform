import { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import api from "../../api/axios";
import "../signup/Signup.css";

function Login() {
  // Form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // UI states
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Email Login
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await api.post("/api/auth/login", {
        email: formData.email.trim(),
        password: formData.password,
      });

      // Save JWT
      localStorage.setItem("token", response.data.token);

      // Save user details
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirect to dashboard
      window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}?token=${response.data.token}`;
    } catch (error) {
      setIsError(true);
      setMessage(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const response = await api.post("/api/auth/google", {
        credential: credentialResponse.credential,
      });

      // Save JWT
      localStorage.setItem("token", response.data.token);

      // Save user details
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirect to dashboard
      window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}?token=${response.data.token}`;
    } catch (error) {
      setIsError(true);
      setMessage(error.response?.data?.message || "Google Login Failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Welcome Back</h2>

        <p className="subtitle">Login to your trading account.</p>

        {message && (
          <div className={isError ? "error-msg" : "success-msg"}>{message}</div>
        )}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <i className="bi bi-envelope"></i>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <i className="bi bi-lock"></i>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <i
              className={`bi ${
                showPassword ? "bi-eye-slash" : "bi-eye"
              } eye-icon`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              setIsError(true);
              setMessage("Google Login Failed");
            }}
          />
        </div>

        <p className="login-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
