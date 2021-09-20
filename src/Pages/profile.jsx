import { BoxSize, BreakLine, Flex, Parag, SubHeader } from "../Styles/styles";
import CompanyDetails from "../Modules/profile/company-details";
import { useContext, useEffect, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { TabList, Tabs, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PaymentForm from "../Modules/billing/billing";
import OffsetDetails from "../Modules/profile/offset-details";
import { Black, LightBlue } from "../Styles/colors";
import AccountDetails from "../Modules/profile/account-details";
import { useHistory } from "react-router";
import useFetch from "../Utils/useFetch";
import { Spinner } from "@chakra-ui/spinner";
import { GlobalContext } from "../Context/global/global-context";
import { setUser } from "../Context/actions/user";

const tabsStyle = {
	color: "white",
	bg: LightBlue,
	borderTopRightRadius: "15px",
	borderTopLeftRadius: "15px",
	boxShadow: `1px -4px 21px -10px ${Black} `,
	transition: "ease-in .3s",
};

const Settings = () => {
	const [status, setStatus] = useState("");
	const history = useHistory();
	const [indexToShow, setIndexToShow] = useState(0);
	const { userState, userDispatch } = useContext(GlobalContext);
	const [userData, setUserData] = useState();

	const handleSubmit = ({ status }) => {
		setStatus(status);
	};

	// using reactquery fetch to get user data from server
	const userResponse = useFetch(
		"http://localhost:3001/backoffice/profile",
		"UserInfo"
	);
	const userResponseData = userResponse?.data?.data;

	// on mount and on dependencies, setting user information and such
	useEffect(() => {
		userDispatch(setUser(userResponseData));
		setUserData(userResponseData);
	}, [userDispatch, userResponseData]);

	return (
		<Flex>
			<Heading {...SubHeader}>Your Profile</Heading>
			<BreakLine />
			<BoxSize flexSize="5" isInvisible={true}>
				{userData ? (
					<Tabs colorScheme="cyan" defaultIndex={0}>
						<TabList>
							<Tab index={0} _selected={tabsStyle}>
								Company Settings
							</Tab>
							<Tab index={1} _selected={tabsStyle}>
								Account Settings
							</Tab>
							<Tab index={2} _selected={tabsStyle}>
								Offsets Settings
							</Tab>
							<Tab index={3} _selected={tabsStyle}>
								Billing
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel paddingLeft="0" paddingRight="0">
								<CompanyDetails
									handleSubmit={handleSubmit}
									companyDetails={userData}
								/>
							</TabPanel>
							<TabPanel paddingLeft="0" paddingRight="0">
								<AccountDetails accountDetails={userData} />
							</TabPanel>
							<TabPanel paddingLeft="0" paddingRight="0">
								<OffsetDetails />
							</TabPanel>
							<TabPanel paddingLeft="0" paddingRight="0">
								<Parag>Your billing information</Parag>
								<BreakLine />
								<PaymentForm />
							</TabPanel>
						</TabPanels>
					</Tabs>
				) : (
					<Spinner color="white" />
				)}
			</BoxSize>
		</Flex>
	);
};

export default Settings;
