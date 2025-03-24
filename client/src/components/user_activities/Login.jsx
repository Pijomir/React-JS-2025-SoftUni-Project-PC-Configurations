import { Link } from "react-router";

export default function Login() {
    return (
        <section class="login">
            <div class="login-container">
                <h1>Login</h1>
                <form action="#">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" class="login-btn">Login</button>
                </form>
                <div class="register-link">
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                </div>
            </div>
        </section>
    );
}