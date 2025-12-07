const { getFilteredSales } = require("../services/salesService");

function getSales(req, res) {
	try {
		const result = getFilteredSales(req.query);
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Something went wrong!" });
	}
}

module.exports = { getSales };
