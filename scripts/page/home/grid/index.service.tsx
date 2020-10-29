export const getDataAndColumn = () => {
	const data = [
		{
			id: "00013594",
			vendorDetail: "NK Trading Corporation",
			process:"MM",
			workflow:true,
			status: "approved",
			documentData: "2019-01-01"
		},
		{
			id: "00013594",
			vendorDetail: "NK Trading Corporation",
			process:"MM",
			workflow:true,
			status: "approved",
			documentData: "2019-01-01"
		},
		{
			id: "00013594",
			vendorDetail: "NK Trading Corporation",
			process:"MM",
			workflow:true,
			status: "approved",
			documentData: "2019-01-01"
		},
		{
			id: "00013594",
			vendorDetail: "NK Trading Corporation",
			process:"MM",
			workflow:true,
			status: "approved",
			documentData: "2019-01-01"
		},
		{
			id: "00013594",
			vendorDetail: "NK Trading Corporation",
			process:"MM",
			workflow:true,
			status: "approved",
			documentData: "2019-01-01"
		}
	];
	const columns = [
		{
			Header:"Unique ID",
			accessor:"id",
		},
		{
			Header:"Vendor Details",
			accessor:"vendorDetail",
		},
		{
			Header:"Process",
			accessor:"process",
		},
		{
			Header:"Workflow",
			accessor:"workflow",
		},
		{
			Header:"Status",
			accessor:"status",
		},
		{
			Header:"Document Date",
			accessor:"documentData",
		},

	];
	return {data, columns};
};