import { Link } from "react-router";

export default function Register() {
    return (
        <section class="register">
            <div class="register-container">
                <h1>Register</h1>
                <form action="#">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div class="form-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>

                    <button type="submit" class="register-btn">Register</button>
                </form>
                <div class="login-link">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </section>
    );
}