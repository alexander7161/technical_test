import { Option } from "../types";

const sampleOptions: Option[] = [
	{ car_type: "LUXURY_PEOPLE_CARRIER", price: 135549 },
	{ car_type: "EXECUTIVE", price: 925742 },
	{ car_type: "PEOPLE_CARRIER", price: 285530 },
	{ car_type: "LUXURY", price: 580623 }
];

import { assert } from "chai";
import { sortOptions } from "./sortingUtils";

describe("SortingUtils", () => {
	describe("sortOptions", () => {
		it("Sorts descending on price", () => {
			const sortedOptions = sortOptions(sampleOptions);
			assert.deepEqual(sortedOptions, [
				{ car_type: "EXECUTIVE", price: 925742 },
				{ car_type: "LUXURY", price: 580623 },
				{ car_type: "PEOPLE_CARRIER", price: 285530 },
				{ car_type: "LUXURY_PEOPLE_CARRIER", price: 135549 }
			]);
		});
	});
});
