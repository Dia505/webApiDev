//importing package
const express = require("express");
const connectDb = require("./config/db");
const app = express();

//index.js points to route
const userRoute = require("./route/user_route")
const fileRoute = require("./route/user_route")
const credRoute = require("./route/cred_route");

connectDb();
// //This line allows the data to be received from front end to server side
// //middle-ware
app.use(express.json());
app.use("/api/user", userRoute)
app.use("/api/cred", credRoute);
app.use("/api/files", fileRoute)

//to get files from storage
app.use("/uploads", express.static("uploads"))

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

//request and response headers handled by the browser automatically