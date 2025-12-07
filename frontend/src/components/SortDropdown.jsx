const SortDropdown = ({ sortBy, setSortBy }) => {
	return (
		<select
			value={sortBy}
			onChange={(e) => setSortBy(e.target.value)}
			style={{
				padding: "10px",
				borderRadius: "8px",
				border: "1px solid #ccc",
				fontSize: "14px",
				background: "white",
				cursor: "pointer",
			}}>
			<option value="Date">📅 Date (Newest First)</option>
			<option value="Quantity">📦 Quantity</option>
			<option value="Customer Name">🔤 Customer Name (A–Z)</option>
		</select>
	);
};

export default SortDropdown;
