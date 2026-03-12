const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to FoodExpress API" });
});

app.get("/api/foods", (req, res) => {
  res.json([
    { id: 1, name: "Burger", price: 5 },
    { id: 2, name: "Pizza", price: 8 },
    { id: 3, name: "Pasta", price: 7 }
  ]);
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});