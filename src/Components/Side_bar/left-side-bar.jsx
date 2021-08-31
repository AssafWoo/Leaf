import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Flex, LeafIcon } from "../../Styles/styles";
import { ItemsNav, SideBarWrapper, Item, StyledSpan } from "./style";
import LeafLogo from "../../Assets/images/leaf-green.png";
import { useState } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import {
	FaHome,
	FaEye,
	FaPowerOff,
	FaTruck,
	FaLock,
	FaTree,
} from "react-icons/fa";
import { GlobalContext } from "../../Context/global/global-context";
import { useHistory } from "react-router";
import { logoutUser } from "../../Context/actions/user";

const MenuNames = [
	{
		name: "Dashboard",
		link: "/dashboard",
		icon: <FaHome style={{ margin: "auto" }} />,
	},
	{
		name: "Achievments",
		link: "/achievments",
		icon: <FaEye style={{ margin: "auto" }} />,
	},
	{
		name: "Transactions",
		link: "/transactions",
		icon: <FaTruck style={{ margin: "auto" }} />,
	},
	{
		name: "Projects",
		link: "/projects",
		icon: <FaTree style={{ margin: "auto" }} />,
	},
	{
		name: "API",
		link: "/api",
		icon: <FaLock style={{ margin: "auto" }} />,
	},

	{
		name: "Profile",
		link: "/profile",
		icon: <SettingsIcon style={{ margin: "auto", display: "block" }} />,
	},
	// {
	// 	name: "",
	// 	link: "/login",
	// 	icon: <FaPowerOff style={{ margin: "auto", display: "block" }} />,
	// },
];

const SideBar = ({ size }) => {
	const history = useHistory();
	const [activeItem, setActiveItem] = useState("");
	const { _, userDispatch } = useContext(GlobalContext);

	const handleClick = ({ name, children }) => {
		userDispatch(logoutUser);
		history.push({
			pathname: "/login",
		});
	};
	return (
		<SideBarWrapper>
			<ItemsNav>
				<Link to="/">
					<LeafIcon
						src={LeafLogo}
						style={{ marginBottom: "1rem", width: size ? "40%" : "25%" }}
					/>
				</Link>
				{MenuNames.map((value, index) => (
					<Flex key={index}>
						<Item size>
							<NavLink exact to={`${value.link}`} activeClassName="active">
								{size ? (
									<StyledSpan>{value.icon}</StyledSpan>
								) : (
									<StyledSpan style={{ marginLeft: ".5rem" }}>
										{value.name}
									</StyledSpan>
								)}
							</NavLink>
						</Item>
					</Flex>
				))}
				{size ? (
					<Flex key="login">
						<Item size>
							<StyledSpan style={{ cursor: "pointer" }} onClick={handleClick}>
								<FaPowerOff style={{ margin: "auto", display: "block" }} />
							</StyledSpan>
						</Item>
					</Flex>
				) : (
					""
				)}
			</ItemsNav>
		</SideBarWrapper>
	);
};
export default SideBar;
