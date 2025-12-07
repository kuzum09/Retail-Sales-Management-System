const fs = require("fs");
const path = require("path");

let salesData = [];

function loadSalesData() {
	if (salesData.length === 0) {
		const filePath = path.join(__dirname, "..", "data", "sales.json");
		const raw = fs.readFileSync(filePath, "utf8");
		salesData = JSON.parse(raw);
	}
	return salesData;
}

module.exports = { loadSalesData };
