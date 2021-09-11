import React, { useContext, useEffect } from "react";
import { Flex } from "../Styles/styles";
import DashboardContent from "../Modules/dashboard/dashboard-content";
import { GlobalContext } from "../Context/global/global-context";
import { useState } from "react";
import { setTransactions } from "../Context/actions/transactions";
import useFetch from "../Utils/useFetch";
import { Spinner } from "@chakra-ui/spinner";
import { setUser } from "../Context/actions/user";

const Dashboard = () => {
	const { achievmentsState } = useContext(GlobalContext);
	const { transactionsState, transactionsDispatch } = useContext(GlobalContext);
	const { userState, userDispatch } = useContext(GlobalContext);

	const [transactionsData, setTransactionsData] = useState(
		transactionsState.allTransactions
	);

	const [userData, setUserData] = useState(userState);

	const [selected, setSelected] = useState(true);
	const [dashboardData, setDashboardData] = useState(
		achievmentsState.weeklyAchievments.co2Emissions
	);

	// using reactquery fetch to get user data from server
	const userResponse = useFetch(
		"http://localhost:3001/backoffice/profile",
		"UserInfo"
	);

	// using reactquery fetch to get transactions data from server
	const transactionsResponse = useFetch(
		"http://localhost:3001/backoffice/transactions",
		"Transactions"
	);
	const { data } = transactionsResponse;

	// on mount and on dependencies, setting transactions data, user information and such
	useEffect(() => {
		setUserData(userResponse.data);
		setTransactionsData(data);
		transactionsDispatch(setTransactions(data));
		userDispatch(setUser(userResponse.data));
	}, [data, transactionsDispatch, userResponse.data]);

	const handleToggleFilter = () => {
		if (selected) {
			setDashboardData(achievmentsState.weeklyAchievments.transactions);
		} else {
			setDashboardData(achievmentsState.weeklyAchievments.co2Emissions);
		}
		setSelected(!selected);
	};

	return (
		<Flex>
			{userData ? (
				<DashboardContent
					user={userData}
					selected={selected}
					handleToggleFilter={handleToggleFilter}
					dashboardData={dashboardData}
					tableData={transactionsData}
				/>
			) : (
				<Spinner color="white" />
			)}
		</Flex>
	);
};

export default Dashboard;
