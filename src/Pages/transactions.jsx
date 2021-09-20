import React, { useContext, useEffect, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, SubHeader } from "../Styles/styles";
import TableTemplate from "../Components/Table/table-template";
import { transactionsColumns } from "../Components/Table/data-stracture";
import { DarkerTheme, DarkTheme, MainRed } from "../Styles/colors";
import { GlobalContext } from "../Context/global/global-context";
import useFetch from "../Utils/useFetch";
import { setTransactions } from "../Context/actions/transactions";
import { Spinner } from "@chakra-ui/react";
import FilterCard from "../Components/Cards/filter_cards";
import { ImCancelCircle, ImEarth } from "react-icons/im";
import { FaFly } from "react-icons/fa";
import { LightBlue, MainGreen } from "../Styles/colors";

const TransactionsComponent = () => {
	const { transactionsState, transactionsDispatch } = useContext(GlobalContext);
	const [transactionsData, setTransactionsData] = useState(
		transactionsState.allTransactions
	);
	const [displayedTransactions, setDisplayedTransactions] = useState(
		transactionsState.allTransactions
	);

	// using reactquery fetch to get transactions data from server
	const transactionsResponse = useFetch(
		"http://localhost:3001/backoffice/transactions",
		"Transactions"
	);
	const transactionFetchData = transactionsResponse?.data;

	useEffect(() => {
		setTransactionsData(transactionFetchData?.data);
		setDisplayedTransactions(transactionFetchData?.data);
		transactionsDispatch(setTransactions(transactionFetchData?.data));
	}, [transactionFetchData?.data, transactionsData, transactionsDispatch]);

	const handleClick = (item) => {
		if (item === "Rejected") {
			setDisplayedTransactions(transactionsState.rejectedTransactions);
		} else if (item === "Active") {
			setDisplayedTransactions(transactionsState.activeTransactions);
		} else if (item === "Retired") {
			setDisplayedTransactions(transactionsState.clearedTransactions);
		} else {
			setDisplayedTransactions(transactionsState.allTransactions);
		}
	};

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
						filterCards={
							<>
								<FilterCard
									icon={<FaFly size="2rem" color={LightBlue} />}
									text="Active"
									handleClick={handleClick}
									number={transactionsState.activeTransactions.length}
								/>
								<FilterCard
									icon={<ImCancelCircle size="2rem" color={MainRed} />}
									text="Rejected"
									handleClick={handleClick}
									number={transactionsState.rejectedTransactions.length}
								/>
								<FilterCard
									icon={<ImEarth size="2rem" color={MainGreen} />}
									text="Retired"
									handleClick={handleClick}
									number={transactionsState.clearedTransactions.length}
								/>
							</>
						}
						tableData={displayedTransactions}
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
