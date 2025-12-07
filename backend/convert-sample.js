const csv = require("csvtojson");
const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "src", "data", "sales_sample.csv");
const outputFile = path.join(__dirname, "src", "data", "sales.json");

csv()
	.fromFile(inputFile)
	.then((jsonArray) => {
		fs.writeFileSync(outputFile, JSON.stringify(jsonArray, null, 2));
		console.log(`✔ Converted ${jsonArray.length} rows to JSON`);
	});
