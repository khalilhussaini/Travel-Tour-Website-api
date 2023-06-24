// Example authentication middleware
export const authenticate = (req, res, next) => {
    // Implement your authentication logic here
    // Example: Check if the user is logged in and has valid credentials
  
    if (req.user) {
      // User is authenticated
      next(); // Proceed to the next middleware or route handler
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  export default function errorHandler(err, req, res, next) {
    console.error(err)
    res.status(err.status || 500).json({ status: err.status, message: err.message || "Internal server error" });
  }
  

// Implement any necessary middleware functions for tours here
// Example: Authentication middleware, error handling middleware, etc.
 

/* const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500)
      .json({ status: err.status, message: err.message || "Internal server error" });
  };
  
  export default errorHandler; */
  