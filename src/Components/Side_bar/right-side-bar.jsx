/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Flex, BoxSize } from "../../Styles/styles";
import { RightNav } from "./style";
import UserMenu from "../User_menu/user_menu";
import SingleUser from "../UserAvatar/SingelUser";
import { Link } from "react-router-dom";
import { MenuItem } from "@chakra-ui/menu";
import { LightBlue } from "../../Styles/colors";
import { useContext } from "react";
import { GlobalContext } from "../../Context/global/global-context";
import { useHistory } from "react-router";
import { logoutUser } from "../../Context/actions/user";

const RightSideBar = () => {
	const { _, userDispatch } = useContext(GlobalContext);
	const history = useHistory();

	const handleLogout = () => {
		userDispatch(logoutUser);
		history.push({
			pathname: "/login",
		});
	};
	return (
		<RightNav style={{ height: "100%" }}>
			<BoxSize
				flexSize="1"
				isInvisible={true}
				style={{ top: "0.1rem", padding: "0px", right: "0", position: "fixed" }}
			>
				<Flex>
					<BoxSize
						isInvisible={true}
						style={{ padding: "0", textAlign: "right" }}
						flexSize="1"
					>
						<UserMenu icon={<SingleUser />}>
							<Link to="/profile">
								<MenuItem
									_focus={{ background: "trasparent" }}
									_hover={{ background: LightBlue }}
									color="white"
								>
									Settings
								</MenuItem>
							</Link>
							<MenuItem
								_hover={{ background: LightBlue }}
								onClick={() => handleLogout()}
								color="white"
							>
								Logout
							</MenuItem>
						</UserMenu>
					</BoxSize>
				</Flex>
			</BoxSize>
		</RightNav>
	);
};

export default RightSideBar;
