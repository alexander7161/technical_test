export const sortOptions = (
	options: [
		string,
		{
			supplier: string;
			price: number;
		}
	][]
) => {
	return options.sort((a, b) => b[1].price - a[1].price);
};
