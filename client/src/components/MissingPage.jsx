import { Link } from "react-router";

export default function MissingPage() {
   return (
      <div className="error-content">
         <h1>404</h1>
         <p>Oops! Page not found.</p>
         <p>Looks like it got lost somewhere on the internet.</p>
         <Link to="/" className="back-btn">Go Back to Home</Link>
      </div>
   );
}