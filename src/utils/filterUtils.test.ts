import { Option } from "../types";

const sampleOptions: Option[] = [
	{ car_type: "LUXURY_PEOPLE_CARRIER", price: 135549 },
	{ car_type: "EXECUTIVE", price: 925742 },
	{ car_type: "PEOPLE_CARRIER", price: 285530 },
	{ car_type: "LUXURY", price: 580623 }
];

import { assert } from "chai";
import { filterMaxPassengers } from "./filterUtils";

describe("FilterUtils", () => {
	describe("FilterMaxPassengers", () => {
		it("1 passenger doesn't filter", () => {
			const sortedOptions = filterMaxPassengers(sampleOptions, 1);
			assert.deepEqual(sortedOptions, [
				{ car_type: "LUXURY_PEOPLE_CARRIER", price: 135549 },
				{ car_type: "EXECUTIVE", price: 925742 },
				{ car_type: "PEOPLE_CARRIER", price: 285530 },
				{ car_type: "LUXURY", price: 580623 }
			]);
		});

		it("4 passenger doesn't filter", () => {
			const sortedOptions = filterMaxPassengers(sampleOptions, 4);
			assert.deepEqual(sortedOptions, [
				{ car_type: "LUXURY_PEOPLE_CARRIER", price: 135549 },
				{ car_type: "EXECUTIVE", price: 925742 },
				{ car_type: "PEOPLE_CARRIER", price: 285530 },
				{ car_type: "LUXURY", price: 580623 }
			]);
		});

		it("5 passengers does filter", () => {
			const sortedOptions = filterMaxPassengers(sampleOptions, 5);
			assert.deepEqual(sortedOptions, [
				{ car_type: "LUXURY_PEOPLE_CARRIER", price: 135549 },
				{ car_type: "PEOPLE_CARRIER", price: 285530 }
			]);
		});

		it("6 passengers doesn't filter", () => {
			const sortedOptions = filterMaxPassengers(sampleOptions, 6);
			assert.deepEqual(sortedOptions, [
				{ car_type: "LUXURY_PEOPLE_CARRIER", price: 135549 },
				{ car_type: "PEOPLE_CARRIER", price: 285530 }
			]);
		});

		it("7 passengers does filter", () => {
			const sortedOptions = filterMaxPassengers(sampleOptions, 7);
			assert.deepEqual(sortedOptions, []);
		});
	});
});
