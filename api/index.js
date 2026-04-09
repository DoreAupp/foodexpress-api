const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// SEARCH API
app.get("/search", (req, res) => {
    res.send("<html><body>INSIDE SEARCH API..</body></html>");
});

// VIEW API
app.get("/view", (req, res) => {
    res.send("<html><body>INSIDE VIEW API..</body></html>");
});

// LOGIN API
app.post("/login", (req, res) => {
    res.send("<html><body>INSIDE LOGIN API..</body></html>");
});

// UPDATE API
app.put("/updateprofile", (req, res) => {
    res.send("<html><body>INSIDE UPDATE PROFILE API..</body></html>");
});

// DELETE API
app.delete("/del", (req, res) => {
    res.send("<html><body>INSIDE DELETE API..</body></html>");
});

// START SERVER
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express Server Started at Port No: ${PORT}`);
});