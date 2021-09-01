import React, { useContext, useEffect, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, SubHeader } from "../Styles/styles";
import TableTemplate from "../Components/Table/table-template";
import { transactionsColumns } from "../Components/Table/data-stracture";
import { DarkerTheme, DarkTheme } from "../Styles/colors";
import { GlobalContext } from "../Context/global/global-context";
import useFetch from "../Utils/useFetch";
import { setTransactions } from "../Context/actions/transactions";
import { Spinner } from "@chakra-ui/react";
import { mockTransactionsData } from "../Mocks/transactions-mock";

const TransactionsComponent = () => {
	const { transactionsState, transactionsDispatch } = useContext(GlobalContext);
	const [transactionsData, setTransactionsData] = useState(
		transactionsState.allTransactions
	);

	// using reactquery fetch to get transactions data from server
	const transactionsResponse = useFetch(
		"http://localhost:3001/backoffice/transactions",
		"Transactions"
	);
	const { data } = transactionsResponse;

	useEffect(() => {
		setTransactionsData(data);
		console.log(transactionsData);

		transactionsDispatch(setTransactions(data));
	}, [data, transactionsDispatch]);

	return (
		<Flex>
			<Heading {...SubHeader}>Transactions</Heading>
			<BreakLine />
			<BoxSize
				flexSize="5"
				isInvisible={false}
				style={{
					background: DarkerTheme,
					border: `2px solid ${DarkTheme}`,
					borderRadius: "15px",
				}}
			>
				{transactionsData ? (
					<TableTemplate
						// tableData={transactionsState.allTransactions}
						tableData={mockTransactionsData}
						columnsType={transactionsColumns}
					/>
				) : (
					<Spinner />
				)}
			</BoxSize>
		</Flex>
	);
};

export default TransactionsComponent;
