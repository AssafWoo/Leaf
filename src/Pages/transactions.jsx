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
import FilterCard from "../Components/Cards/filter_cards";
import { ImEarth } from "react-icons/im";
import { BiLoader } from "react-icons/bi";
import { FaFly } from "react-icons/fa";
import { LightBlue, MainGreen, MainYellow } from "../Styles/colors";

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

	const handleClick = (item) => {
		console.log(`get request for ${item} items`);
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
									text="Placed"
									handleClick={handleClick}
								/>
								<FilterCard
									icon={<BiLoader size="2rem" color={MainYellow} />}
									text="Proccessing"
									handleClick={handleClick}
								/>
								<FilterCard
									icon={<ImEarth size="2rem" color={MainGreen} />}
									text="Retired"
									handleClick={handleClick}
								/>
							</>
						}
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
