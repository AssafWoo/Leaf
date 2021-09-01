import { GiPaperWindmill, GiPineTree } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";

export const OFFSET_TYPE = {
	WATER: {
		name: "Hydraloic pumps",
		icon: <IoIosWater size="2rem" color="white" display="inline-block" />,
	},
	FORREST: {
		name: "Forestation",
		icon: <GiPineTree size="2rem" color="white" display="inline-block" />,
	},
	AIR: {
		name: "Clean Air",
		icon: <GiPaperWindmill size="2rem" color="white" display="inline-block" />,
	},
};

export const mockTransactionsData = [
	{
		name: "Amazon Tribe",
		location: "Brazil",
		status: "Placed",
		orders: "",
		type: "Hydraloic pumps",
		icon: OFFSET_TYPE.WATER.icon,
		amountCo2: "170",
		amountDollars: 2,
		created_at: "10/5/21",
		action: "...",
		id: "789",
	},
	{
		name: "AA",
		location: "Peru",

		status: "Placed",
		orders: "",
		type: "Forestation",
		icon: OFFSET_TYPE.AIR.icon,

		amountCo2: "190",
		amountDollars: 1,
		created_at: "10/5/21",
		action: "...",
		id: "456",
	},
	{
		name: "Indian waterfall",
		location: "India",

		status: "Proccessing",
		orders: "",
		type: OFFSET_TYPE.FORREST.name,
		icon: OFFSET_TYPE.FORREST.icon,

		amountCo2: "124",
		amountDollars: 5,
		created_at: "14/4/21",
		action: "...",
		id: "123",
	},
	{
		name: "Solar panels in Argentina",
		location: "Argentina",
		status: "Retired",
		orders: "",
		type: "Hydraloic pumps",
		icon: OFFSET_TYPE.WATER.icon,
		amountCo2: "168",
		amountDollars: 16,
		created_at: "12/4/21",
		action: "...",
		id: "012",
	},
];
