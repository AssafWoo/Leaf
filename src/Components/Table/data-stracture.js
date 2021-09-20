import ModalComponent from "../Modal/modal";
import ModalContent from "../Modal/modal-content";
import { FaTrash, FaEye } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import { LightBlue, MainGreen, MainRed, MainYellow } from "../../Styles/colors";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//console.log(`${date.getDate()}, ${date.getMonth() +1 }, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// const date = new Date(formated_Date) // formated_Date - SDK returned date

export const transactionsColumns = [
	{
		name: "Ordered On",
		selector: "created_at",
		sortable: true,
		cell: (row) => (
			<ModalComponent
				openButtonContent={dayjs(row.created_at).format(`DD/MM/YYYY - HH:mm`)} // the hour is 3 hours ahead
				// openButtonContent={row.created_at.toLocaleString("pt-BR")}
				item={row}
				content={ModalContent(row)}
				goToActionButton="empty"
			/>
		),
	},
	{
		name: "Status",
		// selector: "transaction_status",
		selector: "status",
		sortable: true,
		cell: (row) => {
			if (row.transaction_status === "CLE") {
				return (
					<ModalComponent
						openButtonContent={<p style={{ color: MainGreen }}>Retired</p>}
						item={row}
						content={ModalContent(row)}
						goToActionButton="empty"
					/>
				);
			}
			if (row.transaction_status === "ACT") {
				return (
					<ModalComponent
						openButtonContent={<p style={{ color: LightBlue }}>Placed</p>}
						item={row}
						content={ModalContent(row)}
						goToActionButton="empty"
					/>
				);
			}
			if (row.transaction_status === "REJ") {
				return (
					<ModalComponent
						openButtonContent={<p style={{ color: MainRed }}>Rejected</p>}
						item={row}
						content={ModalContent(row)}
						goToActionButton="empty"
					/>
				);
			}
			return (
				<ModalComponent
					openButtonContent={<p style={{ color: MainYellow }}>Processing</p>}
					item={row}
					content={ModalContent(row)}
					goToActionButton="empty"
				/>
			);
		},
	},
	{
		name: "Mass",
		selector: "amountCo2",
		sortable: true,
		cell: (row) => (
			<ModalComponent
				openButtonContent={`${row.weight} kg`}
				item={row}
				content={ModalContent(row)}
				goToActionButton="empty"
			/>
		),
	},
	{
		name: "Total",
		selector: "amountDollars",
		sortable: true,
		cell: (row) => (
			<ModalComponent
				openButtonContent={`$${row.amountDollars}`}
				item={row}
				content={ModalContent(row)}
				goToActionButton="empty"
			/>
		),
	},
];

export const ProjectsColumns = [
	{
		name: "Id",
		selector: "id",
		sortable: true,
	},
	{
		name: "Name",
		selector: "name",
		sortable: true,
	},
	{
		name: "Type",
		selector: "type",
		sortable: true,
		right: true,
	},
	{
		name: "Location",
		selector: "country",
		sortable: true,
		right: true,
	},
	{
		name: "Goal",
		selector: "purpose",
		sortable: true,
		right: true,
	},
	{
		name: "Action",
		selector: "action",
		sortable: false,
		right: true,
		cell: (row) => (
			<Flex>
				<Link to={`/projects/${row.id}`}>
					<FaEye
						style={{ marginRight: ".4rem" }}
						size="1rem"
						cursor="pointer"
					/>
				</Link>
				<FaTrash
					style={{ marginLeft: ".4rem" }}
					color={MainRed}
					size="1rem"
					cursor="pointer"
				/>
			</Flex>
		),
	},
];
