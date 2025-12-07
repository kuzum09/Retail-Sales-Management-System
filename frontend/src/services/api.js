import axios from "axios";

const API_URL = "http://localhost:4000/api/sales";

export const fetchSales = async (queryParams = "") => {
	const response = await axios.get(`${API_URL}${queryParams}`);
	return response.data;
};
