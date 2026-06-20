require("dotenv").config()
const path = require("path")
const express = require("express")
const customLogger = require("./customLogger") // Import the custom logger middleware

const app = express()

app.use(express.json())  // Middleware to parse JSON bodies
app.use(customLogger) // Use the custom logger middleware

app.use(express.static(path.join(__dirname, "public"))) // Serve static files from the "public" directory

app.get("/", (req, res) => {
    res.json({ message: "My week 2 API!" });
});

app.post("/user", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    res.json({ message: `Hello, ${name}!` });
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.json({ message: `User ${id} profile` });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route Not Found" });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
