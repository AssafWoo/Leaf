import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { DarkTheme } from "../../Styles/colors";

const UserMenu = ({ icon, children }) => {
	return (
		<Menu>
			<MenuButton color="white" righticon={<ChevronDownIcon />}>
				{icon}
			</MenuButton>
			<Portal>
				<MenuList
					_hover={{ background: DarkTheme }}
					bg={DarkTheme}
					style={{ border: "none" }}
				>
					{children}
				</MenuList>
			</Portal>
		</Menu>
	);
};

export default UserMenu;
