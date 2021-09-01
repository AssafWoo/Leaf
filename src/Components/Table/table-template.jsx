import DataTable from "react-data-table-component";
import { TableWrapper, customStyles } from "./style";
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "@chakra-ui/spinner";
import { BoxSize, Flex } from "../../Styles/styles";
import { ImEarth } from "react-icons/im";
import { BiLoader } from "react-icons/bi";
import { FaFly } from "react-icons/fa";
import { LightBlue, MainGreen, MainYellow } from "../../Styles/colors";
import FilterCard from "../Cards/filter_cards";
import FilterComponent from "./search";

const TableTemplate = ({ columnsType, tableData = [], filterCards }) => {
	const [filterText, setFilterText] = useState("");
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const [pending, setPending] = useState(true);
	const [rowsData, setRowsData] = useState([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setRowsData(tableData);
			setPending(false);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [tableData]);

	const filteredItems = rowsData.filter(
		(item) =>
			item.id && item.id.toLowerCase().includes(filterText.toLowerCase())
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText("");
			}
		};

		return (
			<Flex
				style={{
					justifyContent: "flext-start",
					alignItems: "Center",
					flexDirection: "row",
				}}
			>
				{filterCards}
				<BoxSize isInvisible={true}>
					<FilterComponent
						onFilter={(e) => setFilterText(e.target.value)}
						onClear={handleClear}
						filterText={filterText}
					/>
				</BoxSize>
			</Flex>
		);
	}, [filterText, resetPaginationToggle]);

	return (
		<TableWrapper>
			<DataTable
				title={false}
				columns={columnsType}
				data={filteredItems}
				wrap
				responsive
				persistTableHead
				customStyles={customStyles}
				pagination
				paginationPerPage={5}
				subHeader
				highlightOnHover
				progressPending={pending}
				progressComponent={<Spinner />}
				subHeaderComponent={subHeaderComponentMemo}
			/>
		</TableWrapper>
	);
};

export default TableTemplate;
