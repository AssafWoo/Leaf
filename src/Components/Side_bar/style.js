import styled from "styled-components";
import { DarkTheme, LightBlue } from "../../Styles/colors";
import { ShadowEffect, TransitionEffect } from "../../Styles/effects";

export const SideBarWrapper = styled.div`
	position: sticky;
	z-index: 2;
	background-color: ${DarkTheme};
	padding-top: 20px;
	grid-area: sidebar;
	${ShadowEffect};
`;

export const RightNav = styled.div`
	grid-area: leftsidebar;
	position: sticky;
	border-top-left-radius: 15px;
`;

export const ItemsNav = styled.div`
	top: 1.3rem;
	text-align: left;
	position: sticky;
	height: auto;
`;

export const Item = styled.div`
	margin: ${(props) => {
		if (props.size === "fullscreen" || props.size === "1-cols") {
			return "1rem auto";
		} else {
			return "0.6rem";
		}
	}};

	text-align: left;
	color: white;
	font-weight: 500;
	width: 100%;
	font-size: 1.1rem;
	${TransitionEffect};
	&:hover {
		${TransitionEffect};
	}

	.active {
		background: ${LightBlue};
		padding: 0.5rem 0.4rem;
		margin: auto;
		display: block;
		color: white;
		${TransitionEffect};
		/* border-radius:50% 50% 50% 50% / 100% 1% 99% 0%; */
		border-radius: 5px;
		width: 100%;
	}
`;

export const StyledSpan = styled.span`
	font-weight: 300;
`;
