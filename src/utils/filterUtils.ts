import { CheapestSuppliers } from "../types";
import { MAX_PASSENGERS } from "./consts";

export const filterMaxPassengers = (
	options: CheapestSuppliers,
	noPassengers: number
) => {
	return Object.entries(options).filter(
		o => MAX_PASSENGERS[o[0]] >= noPassengers
	);
};
