import { BoxSize, BreakLine, Flex, Parag, SubHeader } from "../Styles/styles";
import CompanyDetails from "../Modules/settings/company-details";
import { GlobalContext } from "../Context/global/global-context";
import { useContext, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { TabList, Tabs, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PaymentForm from "../Modules/billing/billing";
import OffsetDetails from "../Modules/settings/offset-details";
import { Black, LightBlue } from "../Styles/colors";
import AccountDetails from "../Modules/settings/account-details";
import { useHistory } from "react-router";

const tabsStyle = {
	color: "white",
	bg: LightBlue,
	borderTopRightRadius: "15px",
	borderTopLeftRadius: "15px",
	boxShadow: `1px -4px 21px -10px ${Black} `,
	transition: "ease-in .3s",
};

const Settings = () => {
	const { userState } = useContext(GlobalContext);
	const [status, setStatus] = useState("");
	const history = useHistory();
	const [indexToShow, setIndexToShow] = useState(0);

	const handleSubmit = ({ status }) => {
		setStatus(status);
	};

	return (
		<Flex>
			<Heading {...SubHeader}>Your Profile</Heading>
			<BreakLine />
			<BoxSize flexSize="5" isInvisible={true}>
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
								companyDetails={userState.userData}
							/>
						</TabPanel>
						<TabPanel paddingLeft="0" paddingRight="0">
							<AccountDetails accountDetails={userState.userData} />
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
			</BoxSize>
		</Flex>
	);
};

export default Settings;
