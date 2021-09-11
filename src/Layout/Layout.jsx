import SideBar from "../Components/Side_bar/left-side-bar";
import RightSideBar from "../Components/Side_bar/right-side-bar";
import { AppWrapper, BreakLine, MainWrapper } from "../Styles/styles";
import { useScreenSize } from "../Utils/useScreenSize";

export const Layout = ({ children }) => {
	const screenSize = useScreenSize();
	let middle = null;

	if (screenSize === "3-cols") {
		middle = (
			<>
				<SideBar size={false} />
				<AppWrapper size={false}>
					<BreakLine />
					{children}
				</AppWrapper>
				<RightSideBar />
			</>
		);
	}
	if (screenSize === "2-cols") {
		middle = (
			<>
				<SideBar size={true} />
				<AppWrapper size={false}>
					<BreakLine />
					{children}
				</AppWrapper>
			</>
		);
	}
	if (screenSize === "1-cols") {
		middle = (
			<>
				<SideBar size={true} />
				<AppWrapper size={true}>
					<BreakLine />
					{children}
				</AppWrapper>
			</>
		);
	} else if (screenSize === "fullscreen") {
		middle = (
			<>
				<SideBar size={true} />
				<AppWrapper size={true}>
					<BreakLine />
					{children}
				</AppWrapper>
			</>
		);
	}

	return <MainWrapper size={screenSize}>{middle}</MainWrapper>;
};
