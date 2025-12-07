const express = require("express");
const cors = require("cors");
const salesRoutes = require("./routes/salesRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Retail Sales Management API is running...");
});

app.use("/api/sales", salesRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
