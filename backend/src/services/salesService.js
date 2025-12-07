const { loadSalesData } = require("../models/salesModel");

function parseQuery(query) {
	return {
		search: (query.search || "").toLowerCase(),
		page: Number(query.page) || 1,
		limit: Number(query.limit) || 10,
		sortBy: query.sortBy || "Date",
		sortOrder: query.sortOrder || "desc",

		regions: query.regions ? query.regions.split(",") : [],
		genders: query.genders ? query.genders.split(",") : [],
		categories: query.categories ? query.categories.split(",") : [],
		customerTypes: query.customerTypes ? query.customerTypes.split(",") : [],
		tags: query.tags ? query.tags.split(",") : [],
		paymentMethods: query.paymentMethods ? query.paymentMethods.split(",") : [],
		orderStatuses: query.orderStatuses ? query.orderStatuses.split(",") : [],
		deliveryTypes: query.deliveryTypes ? query.deliveryTypes.split(",") : [],

		minAge: query.minAge ? Number(query.minAge) : null,
		maxAge: query.maxAge ? Number(query.maxAge) : null,
		startDate: query.startDate ? new Date(query.startDate) : null,
		endDate: query.endDate ? new Date(query.endDate) : null,
	};
}

function getFilteredSales(query) {
	const params = parseQuery(query);
	let data = loadSalesData();

	// 🔍 SEARCH
	if (params.search) {
		data = data.filter(
			(s) =>
				s["Customer Name"]?.toLowerCase().includes(params.search) ||
				s["Phone Number"]?.includes(params.search)
		);
	}

	// 🎯 FILTERS - Updated and Smart Filtering
	data = data.filter((sale) => {
		const genderMatch =
			!params.genders.length || params.genders.includes(sale["Gender"]);

		const regionMatch =
			!params.regions.length ||
			params.regions.includes(sale["Customer Region"]);

		const categoryMatch =
			!params.categories.length ||
			params.categories.includes(sale["Product Category"]);

		const paymentMatch =
			!params.paymentMethods.length ||
			params.paymentMethods.includes(sale["Payment Method"]);

		const minAgeMatch =
			params.minAge === null || Number(sale["Age"]) >= Number(params.minAge);

		const maxAgeMatch =
			params.maxAge === null || Number(sale["Age"]) <= Number(params.maxAge);

		const startMatch =
			!params.startDate || new Date(sale["Date"]) >= params.startDate;

		const endMatch =
			!params.endDate || new Date(sale["Date"]) <= params.endDate;

		const tagsMatch =
			!params.tags.length ||
			params.tags.some((tag) =>
				sale["Tags"]?.toLowerCase().includes(tag.toLowerCase())
			);

		return (
			genderMatch &&
			regionMatch &&
			categoryMatch &&
			paymentMatch &&
			minAgeMatch &&
			maxAgeMatch &&
			startMatch &&
			endMatch &&
			tagsMatch
		);
	});

	if (params.sortBy === "Date") {
		data.sort((a, b) => new Date(b["Date"]) - new Date(a["Date"]));
	} else if (params.sortBy === "Quantity") {
		data.sort((a, b) => Number(a["Quantity"]) - Number(b["Quantity"]));
	} else if (params.sortBy === "Customer Name") {
		data.sort((a, b) => a["Customer Name"].localeCompare(b["Customer Name"]));
		params.sortOrder = "asc"; // Force A → Z
	}

	if (params.sortOrder === "desc") data.reverse();

	// 📄 PAGINATION
	const totalItems = data.length;
	const totalPages = Math.ceil(totalItems / params.limit);
	const start = (params.page - 1) * params.limit;
	const end = start + params.limit;
	const pageData = data.slice(start, end);

	return {
		data: pageData,
		page: params.page,
		limit: params.limit,
		totalItems,
		totalPages,
	};
}

module.exports = { getFilteredSales };
