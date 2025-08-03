import express from "express"; 
import { fileURLToPath } from "url"; //  Converts module URL to file path (for ES Modules)
import path from "path"; //  Node.js module to work with file and directory paths

//  Get the current file's full path (__filename) using the URL of the current module
const __filename = fileURLToPath(import.meta.url);

//  Get the directory name of the current module (__dirname)
const __dirname = path.dirname(__filename);

//  Create an Express app instance
const app = express();

//  Middleware to serve static files (like HTML, CSS, JS) from "public" folder
app.use(express.static(path.join(__dirname, "public")));

//  Port number on which the server will run
const port = 3000;

//  Middleware to parse incoming form data (from POST requests)
//    Converts form fields into an object (req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

//  POST route handler to receive feedback from the form
app.post("/submit-feedback", (req, res) => {
    // Log the form values to the console
    console.log(req.body.name);
    console.log(req.body.feedback);
    res.send("form submitted succesfully")
   
});

//  Start the server and listen on specified port
app.listen(port, () => {
    console.log("Server is successfully running on port " + port);
});
