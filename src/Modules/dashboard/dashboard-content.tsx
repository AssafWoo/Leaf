import React, { useRef } from "react";
import { Heading } from "@chakra-ui/layout";
import { Flex, BoxSize, BreakLine, Parag } from "../../Styles/styles";
import SingleUser from "../../Components/UserAvatar/SingelUser";
import { DarkerTheme, DarkTheme, LightBlue } from "../../Styles/colors";
import { useGetTime } from "../../Utils/useGetTime";
import BarsChart from "../../Components/Charts/bar";
import { useScreenSize } from "../../Utils/useScreenSize";
import { SwitchToggleButton } from "../../Components/Switch/switch";
import BlogCard from "../../Components/Cards/blog_card";
import VolunteerCard from "../../Components/Cards/volunteer_card";
import TableTemplate from "../../Components/Table/table-template";
import { transactionsColumns } from "../../Components/Table/data-stracture";
import { UserType } from "../../interfaces/user";
import { Idata } from "../../Components/Charts/bar";
import { Spinner } from "@chakra-ui/react";

interface Iprops {
	user: UserType;
	selected: boolean;
	handleToggleFilter: () => void;
	dashboardData: Array<Idata>;
	tableData: Array<any>;
}

const DashboardContent = ({
	user,
	selected,
	handleToggleFilter,
	dashboardData,
	tableData,
}: Iprops) => {
	const CurrentTime = useGetTime();
	const screenSize = useScreenSize();
	const myStackedRef = useRef();

	const toggleFilter = () => {
		handleToggleFilter();
	};

	return (
		<>
			<BoxSize flexSize="5" isInvisible={true}>
				<Flex>
					<BoxSize flexSize="3" isInvisible={true}>
						<Heading
							fontSize="2rem"
							mb="2"
							textAlign="left"
							fontWeight="300"
							color="white"
						>
							Howdy <b>{user?.userData?.name}</b>, {CurrentTime}
						</Heading>
						<p style={{ textAlign: "left", color: "white" }}>
							Lets change the world!
						</p>
					</BoxSize>
					{screenSize === "3-cols" ? (
						<BoxSize
							flexSize="3"
							isInvisible={true}
							style={{ textAlign: "right", padding: "0" }}
						>
							<SingleUser desiredPhoto="company" />
						</BoxSize>
					) : (
						""
					)}
				</Flex>
				<BoxSize
					flexSize="3"
					style={{ textAlign: "center" }}
					isInvisible={true}
				>
					<Flex style={{ alignItems: "stretch" }}>
						<BoxSize
							flexSize="1"
							isInvisible={true}
							style={{ border: `2px solid ${DarkTheme}` }}
						>
							<Heading fontWeight="300" textAlign="center" fontSize="3rem">
								{user?.userData?.treesEquilavant}
							</Heading>
							<Parag style={{ textAlign: "center" }}>
								Equivalent number of trees planted
							</Parag>
						</BoxSize>
						<BoxSize
							flexSize="1"
							isInvisible={true}
							style={{ border: `2px solid ${DarkTheme}` }}
						>
							<Heading fontWeight="300" textAlign="center" fontSize="3rem">
								{user?.userData?.totalCO2Saved}
							</Heading>
							<Parag style={{ textAlign: "center" }}>
								Kg of CO2 saved since beggining
							</Parag>
						</BoxSize>
						<BoxSize
							flexSize="1"
							isInvisible={true}
							style={{ border: `2px solid ${DarkTheme}` }}
						>
							<Heading fontWeight="300" textAlign="center" fontSize="3rem">
								{user?.userData?.credits}$
							</Heading>
							<Parag style={{ textAlign: "center" }}>
								Donated since beggining
							</Parag>
						</BoxSize>
					</Flex>
				</BoxSize>

				<BoxSize
					flexSize="3"
					style={{
						background: DarkerTheme,
						border: `2px solid ${DarkTheme}`,
					}}
				>
					<Flex>
						<BoxSize isInvisible={true} flexSize="1">
							<SwitchToggleButton
								selected={selected}
								toggleSelected={toggleFilter}
							/>
						</BoxSize>
					</Flex>
					<BreakLine />
					<BarsChart data={dashboardData} />
				</BoxSize>

				<BoxSize
					ref={myStackedRef}
					flexSize="3"
					style={{
						background: DarkerTheme,
						border: `2px solid ${DarkTheme}`,
					}}
				>
					<Heading fontWeight="300" textAlign="left" fontSize="1.4rem">
						Transactions
					</Heading>
					<BreakLine />
					{tableData ? 
					<TableTemplate
						tableData={tableData}
						columnsType={transactionsColumns}
					/> : <Spinner />}
				</BoxSize>

				{/* <Flex>
					<BoxSize flexSize="3" style={{ background: LightBlue }}>
						<Heading fontWeight="300" textAlign="left" fontSize="1.4rem">
							Volunteer
						</Heading>
						<BreakLine />
						<VolunteerCard />
					</BoxSize>
					<BoxSize flexSize="3">
						<Heading fontWeight="300" textAlign="left" fontSize="1.4rem">
							Our Blog
						</Heading>
						<BreakLine />
						<BlogCard />
					</BoxSize>
				</Flex> */}
			</BoxSize>
		</>
	);
};

export default DashboardContent;
