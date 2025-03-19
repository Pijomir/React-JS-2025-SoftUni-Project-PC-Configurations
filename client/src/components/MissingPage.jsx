export default function MissingPage() {
   return (
      <div className="error-content">
         <h1>404</h1>
         <p>Oops! Page not found.</p>
         <p>Looks like it got lost somewhere on the internet.</p>
         <a href="/" className="back-btn">Go Back to Home</a>
      </div>
   );
}