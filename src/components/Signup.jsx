import { Link } from "react-router-dom";

export default function Signup() {
    const label = "Login";
    return <>
        <form>
            <h2>Sign Up!</h2>
            <p>Already have an account? <Link to="/login">Log In</Link></p>

        </form>
    </>
};