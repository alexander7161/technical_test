import { CheapestSuppliers } from "./types";
import fetchSupplierAPI, { getURLParams } from "./utils/fetchSupplierAPI";
import { sortOptions } from "./utils/sortingUtils";
import { filterMaxPassengers } from "./utils/filterUtils";

export const checkValidArgs = (args: string[]) => {
	if (args.length === 3 || args.length === 2) {
		return true;
	}
	console.log(
		"Please provide a start and end location, and an optional number of passengers."
	);
	return false;
};

const printResults = (cars: CheapestSuppliers, noPassengers?: number) => {
	const filteredOptions = noPassengers
		? filterMaxPassengers(cars, noPassengers)
		: Object.entries(cars);
	sortOptions(filteredOptions).forEach(([car_type, { supplier, price }]) => {
		console.log(`${car_type} - ${supplier} - ${price}`);
	});
};

const CLI = async (args: string[]) => {
	if (!checkValidArgs(args)) {
		return;
	}
	const params = getURLParams(args);
	const results = await fetchSupplierAPI(params);
	const passengers = isNaN(+args[2]) ? undefined : +args[2];
	printResults(results, passengers);
};

const args = process.argv.slice(2);
CLI(args);
