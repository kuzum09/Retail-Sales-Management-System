const FiltersPanel = ({ filters, setFilters }) => {
	const handleChange = (field, value) => {
		setFilters({ ...filters, [field]: value });
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
			{/* Gender Filter */}
			<div>
				<label style={{ fontWeight: 600 }}>Gender</label>
				<select
					value={filters.gender}
					onChange={(e) => handleChange("gender", e.target.value)}
					style={{
						width: "100%",
						padding: "8px",
						borderRadius: "6px",
						border: "1px solid #ccc",
						marginTop: "5px",
					}}>
					<option value="">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</div>

			{/* Region Filter */}
			<div>
				<label style={{ fontWeight: 600 }}>Region</label>
				<select
					value={filters.region}
					onChange={(e) => handleChange("region", e.target.value)}
					style={{
						width: "100%",
						padding: "8px",
						borderRadius: "6px",
						border: "1px solid #ccc",
						marginTop: "5px",
					}}>
					<option value="">All</option>
					<option value="North">North</option>
					<option value="South">South</option>
					<option value="East">East</option>
					<option value="West">West</option>
					<option value="Central">Central</option>
				</select>
			</div>

			{/* Category Filter */}
			<div>
				<label style={{ fontWeight: 600 }}>Product Category</label>
				<select
					value={filters.category}
					onChange={(e) => handleChange("category", e.target.value)}
					style={{
						width: "100%",
						padding: "8px",
						borderRadius: "6px",
						border: "1px solid #ccc",
						marginTop: "5px",
					}}>
					<option value="">All</option>
					<option value="Beauty">Beauty</option>
					<option value="Electronics">Electronics</option>
					<option value="Clothing">Clothing</option>
				</select>
			</div>

			{/* Payment Method Filter */}
			<div>
				<label style={{ fontWeight: 600 }}>Payment Method</label>
				<select
					value={filters.payment}
					onChange={(e) => handleChange("payment", e.target.value)}
					style={{
						width: "100%",
						padding: "8px",
						borderRadius: "6px",
						border: "1px solid #ccc",
						marginTop: "5px",
					}}>
					<option value="">All</option>
					<option value="UPI">UPI</option>
					<option value="Net Banking">Net Banking</option>
					<option value="Credit Card">Credit Card</option>
					<option value="Debit Card">Debit Card</option>
					<option value="Cash">Cash</option>
					<option value="Wallet">Wallet</option>
				</select>
			</div>

			{/* Age Range Filter */}
			<div>
				<label style={{ fontWeight: 600 }}>Age Range</label>
				<div style={{ display: "flex", gap: "8px", marginTop: "5px" }}>
					<input
						type="number"
						placeholder="Min"
						value={filters.minAge}
						onChange={(e) => handleChange("minAge", e.target.value)}
						style={{
							width: "50%",
							padding: "8px",
							borderRadius: "6px",
							border: "1px solid #ccc",
						}}
					/>
					<input
						type="number"
						placeholder="Max"
						value={filters.maxAge}
						onChange={(e) => handleChange("maxAge", e.target.value)}
						style={{
							width: "50%",
							padding: "8px",
							borderRadius: "6px",
							border: "1px solid #ccc",
						}}
					/>
				</div>
			</div>

			{/* Date Range Filter */}
			<div>
				<label style={{ fontWeight: 600 }}>Date Range</label>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "6px",
						marginTop: "5px",
					}}>
					<input
						type="date"
						value={filters.startDate}
						onChange={(e) => handleChange("startDate", e.target.value)}
						style={{
							padding: "8px",
							borderRadius: "6px",
							border: "1px solid #ccc",
						}}
					/>
					<input
						type="date"
						value={filters.endDate}
						onChange={(e) => handleChange("endDate", e.target.value)}
						style={{
							padding: "8px",
							borderRadius: "6px",
							border: "1px solid #ccc",
						}}
					/>
				</div>
			</div>
			{/* Tags Filter */}
			<div>
				<label style={{ fontWeight: 600 }}>Tags (comma-separated)</label>
				<input
					type="text"
					placeholder="e.g. wireless,organic"
					value={filters.tags}
					onChange={(e) => handleChange("tags", e.target.value)}
					style={{
						width: "100%",
						padding: "8px",
						borderRadius: "6px",
						border: "1px solid #ccc",
						marginTop: "5px",
					}}
				/>
			</div>
		</div>
	);
};

export default FiltersPanel;
