import styled from "styled-components";
import {
	DarkerTheme,
	DarkTheme,
	LeafRed,
	LightBlue,
	MainGreen,
	MainRed,
} from "./colors";
import { Ripple, ShadowEffect } from "./effects";

// heading fontsize - 1.1rem;
// text fontsize - .7rem;
// font weight - 500;

//Wrappers

export const LayoutGapWrapper = styled.div`
	padding: 2rem;
`;

export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	grid-area: content;
	align-content: flex-start;
	justify-content: flex-start;
	align-items: stretch;
`;

export const AppWrapper = styled.div`
	text-align: center;
	grid-area: content;
	padding: 0.4rem;
	${(props) => {
		if (props.size) {
			return { display: "flex" };
		}
	}}
`;
export const MainWrapper = styled.div`
	display: grid;
	row-gap: 0;
	grid-template-columns: ${(props) => {
		switch (props.size) {
			case "3-cols":
				return "160px auto 100px";
			case "2-cols":
				return "90px auto 0px";
			case "1-cols":
				return "50px auto 0px";
			case "fullscreen":
				return "40px auto";
			default:
				return "160px auto 100px";
		}
	}};
	grid-gap: ${(props) => {
		switch (props.size) {
			case "3-cols":
				return "170px";
			case "2-cols":
				return "100px"; //100px prev
			case "1-cols":
				return "30px"; //30px prev
			case "fullscreen":
				return "0px"; //0px prev
			default:
				return "170px"; //170px prev
		}
	}};

	grid-template-areas: ${(props) => {
		switch (props.size) {
			case "3-cols":
				return '"sidebar content leftsidebar"';
			case "2-cols":
				return '"sidebar content leftsidebar"';
			case "1-cols":
				return '"sidebar content"';
			case "fullscreen":
				return '"sidebar content"';
			default:
				return '"sidebar content leftsidebar"';
		}
	}};

	height: 100vh;
`;

export const TableWrapper = styled.div`
	padding: 1rem;
	width: 100%;
	background-color: ${DarkTheme};
	border-radius: 15px;

	overflow-x: ${(props) => {
		switch (props.size) {
			case "3-cols":
				return "hidden";
			case "2-cols":
				return "hidden";
			case "1-cols":
				return "scroll";
			case "fullscreen":
				return "scroll";
			default:
				return "hidden";
		}
	}};
	th {
		font-weight: 400;
		font-size: 1.1rem;
		text-transform: none;
	}
	tr {
		cursor: pointer;
		font-size: 0.9rem;
		color: white;
		border: none;
		&:hover {
			background-color: ${DarkerTheme};
		}
	}
`;
export const SwitchWrapper = styled.div`
	width: 15rem;
	background-color: ${DarkTheme};
	cursor: pointer;
	user-select: none;
	border-radius: 15px;
	height: 2rem;
	position: relative;
	.disabled {
		left: 2px;
		background: ${MainGreen};
	}
`;

//Boxes
// SM - flex:1
// MD - flex:3
// LG - flex:5
export const internalBoxStracture = `
    padding:1rem;
    border-radius:15px;
    color:white;
    margin:.2rem;
`;
export const BoxSize = styled.div`
	flex: ${(props) => props.flexSize};
	background: ${(props) => (props.isInvisible ? "" : DarkTheme)};
	${internalBoxStracture}
	${(props) =>
		props.header
			? {
					background: MainGreen,
					color: DarkTheme,
					position: "relative",
					border: "none",
			  }
			: ""};
`;

//Common

export const AddCancelButtons = `
	border-radius: 15px;
	padding: 0.9rem;
	border: none;
	color: white;
	position: relative;
	cursor: pointer;
`;

export const CancelButton = styled.button`
	${AddCancelButtons}
	background-color: ${MainRed};
`;

export const AddButton = styled.button`
	${AddCancelButtons}
	background-color: ${MainGreen};
`;

export const CenteredSpan = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	cursor: pointer;
	transform: translate(-42%, -59%);
`;

export const BreakLine = styled.div`
	margin: 2.5rem 0;
`;
export const SubHeader = {
	fontSize: "2rem",
	textAlign: "left",
	fontWeight: "300",
	color: "white",
	width: "100%",
};

export const Parag = styled.p`
	font-size: 1.1rem;
	font-weight: 300;
	text-align: left;
	display: inline-block;
	width: 100%;
`;

export const InputProperties = {
	size: "sm",
	borderRadius: "full",
	variant: "solid",
	margin: "0.5rem 0.3rem",
};

export const LeafIcon = styled.img`
	width: ${(props) => (props.isSmall ? "15%" : "25%")};
	display: block;
	margin: ${(props) => (props.isSmall ? "" : "auto")};
`;
export const Card = styled.div`
	flex: 2;
	${internalBoxStracture};
	background: ${(props) => (props.isInvisible ? "" : `1px solid ${DarkTheme}`)};
	${ShadowEffect}
	${(props) => (props.isChoosen ? Ripple : "")};
`;

//Switch
export const SwitchContent = styled.div`
	font-weight: 400;
	cursor: pointer;
	color: white;
	height: 2rem;
	padding: 0.3rem 1rem;
	background: ${LightBlue};
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 7.5rem;
	border-radius: 15px;
	box-sizing: border-box;
	position: absolute;
	left: 7.5rem;
	transition: all 0.3s ease;
`;

// ul for signup
export const List = {
	background: "white",
	listStyle: "none",
	color: "black",
	borderRadius: "15px",
	padding: "1rem",
	position: "absolute",
	zIndex: "1",
	top: "5.2rem",
	width: "100%",
};
