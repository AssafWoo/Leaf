export const inputNames = [
	{
		name: "Name",
		required: true,
		type: "text",
		message: "Must be longer then 3 characters",
	},
	{
		name: "Email",
		required: true,
		type: "text",
		message: "Enter a valid email",
	},
	{
		name: "Password",
		required: true,
		type: "password",
		message: "Must be longer then 3 characters",
	},
];
export const secondaryInputNames = [
	{
		name: "Site_URL",
		required: false,
		type: "text",
		message: "Must be a valid Url address",
	},
	{
		name: "Company",
		required: true,
		type: "text",
		message: "Full company name",
	},
];
