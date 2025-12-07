import "./SalesTable.css";

const SalesTable = ({ sales }) => {
	if (!sales || sales.length === 0) {
		return (
			<div className="no-results">
				<p>🚫 No matching sales records found</p>
			</div>
		);
	}

	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>
						<th>Customer</th>
						<th>Phone</th>
						<th>Region</th>
						<th>Category</th>
						<th>Date</th>
						<th>Quantity</th>
						<th>Payment</th>
					</tr>
				</thead>
				<tbody>
					{sales.map((item, index) => (
						<tr key={index}>
							<td>{item["Customer Name"]}</td>
							<td>{item["Phone Number"]}</td>
							<td>{item["Customer Region"]}</td>
							<td>{item["Product Category"]}</td>
							<td>{item["Date"]}</td>
							<td>{item["Quantity"]}</td>
							<td>{item["Payment Method"]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SalesTable;
