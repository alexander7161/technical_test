import { Suppliers, SupplierAPIResponse, CheapestSuppliers } from "../types";
import fetch from "node-fetch";

const SUPPLIERS: Suppliers[] = ["dave", "eric", "jeff"];

export const getURLParams = (args: string[]) => {
	return args
		.map((arg, index) => {
			switch (index) {
				case 0:
					return `pickup=${arg}`;
				case 1:
					return `dropoff=${arg}`;
				default:
					return "";
			}
		})
		.join("&");
};

const fetchSupplierAPI = async (supplier: Suppliers, params: string) => {
	try {
		const res = await fetch(
			`https://techtest.rideways.com/${supplier}?${params}`,
			{ timeout: 2000 }
		);
		if (res.ok) {
			return res.json();
		} else {
			console.log(await res.text());
			return { options: [] };
		}
	} catch (e) {
		console.log(e.message);
		return { options: [] };
	}
};

const fetchCheapestSuppliers = async (
	params: string
): Promise<CheapestSuppliers> => {
	const results: SupplierAPIResponse[] = await Promise.all(
		SUPPLIERS.map(s => fetchSupplierAPI(s, params))
	);
	const filteredResults = results.reduce((acc: any, val) => {
		for (const option of val.options) {
			if (
				acc[option.car_type] === undefined ||
				acc[option.car_type] > option.price
			) {
				acc[option.car_type] = {
					supplier: val.supplier_id,
					price: option.price
				};
			}
		}
		return acc;
	}, {});
	return filteredResults;
};

export default fetchCheapestSuppliers;
