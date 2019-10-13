import fetchSupplierAPI, { getURLParams } from "./utils/fetchSupplierAPI";
import express from "express";
import { filterMaxPassengers } from "./utils/filterUtils";
import { sortOptions } from "./utils/sortingUtils";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post("/", async (req, res) => {
	if (req.body === undefined) {
		console.log("error", req.body);
		res.end("error");
		return;
	}
	const { pickup, dropoff, passengers } = req.body;
	if (pickup === undefined || dropoff === undefined) {
		res.end("please provide pickup and dropoff");
		return;
	}
	const params = getURLParams([pickup, dropoff]);
	const cars = await fetchSupplierAPI(params);
	const noPassengers = isNaN(+passengers) ? undefined : +passengers;
	const filteredOptions = noPassengers
		? filterMaxPassengers(cars, noPassengers)
		: Object.entries(cars);

	const response = sortOptions(filteredOptions).reduce(
		(acc: any[], [car_type, { supplier, price }]) => {
			acc.push({ car_type, supplier, price });
			return acc;
		},
		[]
	);
	res.end(JSON.stringify(response));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
