const SearchBar = ({ search, setSearch }) => {
	return (
		<input
			type="text"
			placeholder=" Search by Customer or Phone..."
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			style={{
				width: "260px",
				padding: "10px 14px",
				borderRadius: "8px",
				border: "1px solid #ccc",
				outline: "none",
				fontSize: "14px",
			}}
		/>
	);
};

export default SearchBar;
