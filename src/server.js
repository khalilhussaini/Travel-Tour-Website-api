import app from "./index.js";

const port = process.env.PORT || 3005;
app.listen(port,() =>{
    console.log(` app listening on port http://localhost:${port}/api/v1/`);
})