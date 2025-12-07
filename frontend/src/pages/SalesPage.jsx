import { useEffect, useState } from "react";
import { fetchSales } from "../services/api";
import SalesTable from "../components/SalesTable";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import FiltersPanel from "../components/FiltersPanel";

const SalesPage = () => {
	const [sales, setSales] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState("Date");

	const [filters, setFilters] = useState({
		gender: "",
		region: "",
		category: "",
		payment: "",
		minAge: "",
		maxAge: "",
		startDate: "",
		endDate: "",
		tags: "",
	});

	const [stats, setStats] = useState({
		units: 0,
		revenue: 0,
		savings: 0,
	});

	const cardStyle = {
		background: "white",
		padding: "14px 20px",
		borderRadius: "12px",
		boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
		fontSize: "14px",
		width: "180px",
	};

	const loadData = async () => {
		let query = `?page=${page}&search=${search}&sortBy=${sortBy}`;

		if (filters.gender) query += `&genders=${filters.gender}`;
		if (filters.region) query += `&regions=${filters.region}`;
		if (filters.category) query += `&categories=${filters.category}`;
		if (filters.payment) query += `&paymentMethods=${filters.payment}`;
		if (filters.minAge) query += `&minAge=${filters.minAge}`;
		if (filters.maxAge) query += `&maxAge=${filters.maxAge}`;
		if (filters.startDate) query += `&startDate=${filters.startDate}`;
		if (filters.endDate) query += `&endDate=${filters.endDate}`;
		if (filters.tags) query += `&tags=${filters.tags}`;

		const data = await fetchSales(query);
		setSales(data.data);
		setTotalPages(data.totalPages);

		// 📌 Calculate Stats for visible items
		let totalUnits = 0;
		let totalRevenue = 0;
		let totalSavings = 0;

		data.data.forEach((sale) => {
			totalUnits += Number(sale["Quantity"]);
			totalRevenue += Number(sale["Final Amount"]);
			totalSavings +=
				Number(sale["Total Amount"]) - Number(sale["Final Amount"]);
		});

		setStats({
			units: totalUnits,
			revenue: totalRevenue,
			savings: totalSavings,
		});

		setStats({
			units: totalUnits,
			revenue: totalRevenue,
			discount: totalDiscount,
		});
	};

	useEffect(() => {
		loadData();
	}, [page, search, sortBy, filters]);

	return (
		<div style={{ display: "flex", height: "100vh" }}>
			{/* Sidebar */}
			<div
				style={{
					width: "230px",
					height: "120vh",
					background: "#223056",
					color: "white",
					padding: "20px",
					boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
				}}>
				<h3 style={{ marginTop: 0, marginBottom: "20px" }}>Filters</h3>
				<FiltersPanel filters={filters} setFilters={setFilters} />
			</div>
			{/* Main Content */}
			{/* Main Content */}
			<div style={{ flex: 1, padding: "20px", background: "#f3f6fc" }}>
				<h1
					style={{
						fontWeight: "1000",
						width: "100%",
						marginBottom: "50px",
						color: "#223056",
						// alignContent: "center",
						// alignItems: "center",
						// alignmentBaseline: "central",
						textAlign: "center",
						fontSize: "49px",
					}}>
					Retail Sales Dashboard
				</h1>
				{/* KPI Cards */}
				<div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
					<div style={cardStyle}>
						Total Units Sold
						<br />
						{stats.units}
					</div>
					<div style={cardStyle}>
						Total Revenue
						<br />₹{stats.revenue.toLocaleString()}
					</div>
					<div style={cardStyle}>
						🏷 ₹{stats.savings.toLocaleString()}
						<br />
						Discount Saved
					</div>
				</div>

				{/* Search + Sorting */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: "20px",
					}}>
					<SearchBar search={search} setSearch={setSearch} />

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-end",
						}}>
						<label
							style={{
								fontSize: "12px",
								color: "#223056",
								marginBottom: "4px",
							}}>
							Sort By:
						</label>
						<SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
					</div>
				</div>

				{/* Table */}
				<SalesTable sales={sales} />

				{/* Pagination */}
				<Pagination page={page} setPage={setPage} totalPages={totalPages} />
			</div>
		</div>
	);
};

export default SalesPage;
