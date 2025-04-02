import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/UserApi";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-toastify";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        const confirmPassword = formData.get('confirm-password');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Invalid email format');
            return;
        }

        if (password.length < 5) {
            toast.error('Password must be at least 5 characters long');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Password do not match');
            return;
        }

        try {
            const authData = await register(email, password);
            userLoginHandler(authData);
            navigate('/');
            toast.success('Successfully Registered');
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <section className="register">
            <div className="register-container">
                <h1>Register</h1>
                <form onSubmit={(e) => { e.preventDefault(); registerHandler(new FormData(e.target)); }}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password"  />
                    </div>

                    <button type="submit" className="register-btn">Register</button>
                </form>
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </section>
    );
}