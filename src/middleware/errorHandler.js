// Example authentication middleware
export const authenticate = (req, res, next) => {
<<<<<<< HEAD
  // Implement your authentication logic here
  // Example: Check if the user is logged in and has valid credentials

  if (req.user) {
    // User is authenticated
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).json({ message: 'Unauthorized' });
=======
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
>>>>>>> b655943462e5779505cc3c33e2428d08b1f58f87
  }
};

export default function errorHandler(err, req, res, next) {
  console.error(err)
  res.status(err.status || 500).json({ status: err.status, message: err.message || "Internal server error" });
}
