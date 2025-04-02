import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/UserApi";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        if (!values.email || !values.password) {
            toast.error("Email and password are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(values.email)) {
            toast.error("Invalid email format.");
            return;
        }

        try {
            const authUserData = await login(values.email, values.password);
            userLoginHandler(authUserData);
            navigate('/');
            toast.success('Successful Login');
        } catch (err) {
            toast.error(err.message);
        }   


    }

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    return (
        <section className="login">
            <div className="login-container">
                <h1>Login</h1>
                <form action={loginAction}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"  />
                    </div>
                    <button type="submit" className="login-btn" disabled={isPending} >Login</button>
                </form>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </div>
            </div>
        </section>
    );
}