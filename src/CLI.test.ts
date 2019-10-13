import { checkValidArgs } from "./CLI";
import { assert } from "chai";

describe("CLI", () => {
	describe("checkValidArgs", () => {
		it("Two arguments valid", () => {
			const args = ["1", "2"];
			assert.isTrue(checkValidArgs(args));
		});
		it("One arguments invalid", () => {
			const args = ["1"];
			assert.isFalse(checkValidArgs(args));
		});
		it("Three arguments invalid", () => {
			const args = ["1", "2", "3"];
			assert.isFalse(checkValidArgs(args));
		});
	});
});
