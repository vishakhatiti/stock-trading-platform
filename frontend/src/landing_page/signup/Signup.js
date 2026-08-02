import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import api from "../../api/axios";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  // Form data
  const [formData, setFormData] = useState({
    name: "",
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

  // Email signup
  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await api.post("/api/auth/signup", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
      });

      setMessage(response.data.message);

      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setLoading(false);

      // Redirect to login page
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setLoading(false);

      setIsError(true);
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  // Google Signup / Login
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
      setMessage(error.response?.data?.message || "Google Signup Failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Your Account</h2>

        <p className="subtitle">Create your trading account to get started.</p>

        {message && (
          <div className={isError ? "error-msg" : "success-msg"}>{message}</div>
        )}

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <i className="bi bi-person"></i>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={3}
            />
          </div>

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
              minLength={8}
            />

            <i
              className={`bi ${
                showPassword ? "bi-eye-slash" : "bi-eye"
              } eye-icon`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
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
              setMessage("Google Signup Failed");
            }}
          />
        </div>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
