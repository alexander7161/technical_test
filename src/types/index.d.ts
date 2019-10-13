interface SupplierAPIResponse {
	supplier_id: string;
	pickup: string;
	dropoff: string;
	options: Option[];
}

interface Option {
	car_type: string;
	price: number;
}

export type Suppliers = "dave" | "eric" | "jeff";

interface CheapestSuppliers {
	[carType: string]: { supplier: string; price: number };
}
