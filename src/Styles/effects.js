import styled from "styled-components";
import {
	LeafGreen1,
	LeafGreen2,
	LeafGreen3,
	LeafGreen4,
	LeafRed,
	MainBlue,
	MainGreen,
	MainGreenBlue,
	MainPurple,
} from "./colors";

export const ShadowEffect = `
    box-shadow: 10px 10px 14px -12px rgba(0,0,0,0.1)
`;
export const Ripple = `
    animation: at-ripple 1s linear infinite;
    overflow: hidden;
    @keyframes at-ripple {
        0% {
            box-shadow: 0 3px 7px rgba(109, 185, 102, 0.2), 0 0 0 5px rgba(109, 185, 102, 0.2), 0 0 0 3.5px rgba(109, 185, 102, 0.3), 0 0 3px 7.5px rgba(109, 185, 102, 0.2);
        }
        100% {
            box-shadow: 0 3px 7.5px rgba(109, 185, 102, 0.3), 0 0 0 5px rgba(109, 185, 102, 0.3), 0 0 0 7.5px rgba(109, 185, 102, 0.2), 0 0 0 15px rgba(109, 185, 102, 0.1);
        }
    }
`;
export const TransitionEffect = `
transition:.4s all ease-in-out;
`;
export const SlideEffect = `
	animation: slide 0.5s forwards;
	animation-delay: 2s;
	@keyframes slide {
		100% { left: 0; }
	}

`;

export const FadeIn = styled.div`
	animation: fadein 2s;
	-moz-animation: fadein 2s; /* Firefox */
	-webkit-animation: fadein 2s; /* Safari and Chrome */
	-o-animation: fadein 2s; /* Opera */

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-moz-keyframes fadein {
		/* Firefox */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-webkit-keyframes fadein {
		/* Safari and Chrome */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-o-keyframes fadein {
		/* Opera */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

// leafs effect
export const CirclesEffect = styled.div`
	position: relative;
	.circles {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.circles li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: ${MainGreen};
		animation: animate 25s linear infinite;
		bottom: calc(-160px - 60vh);
	}

	.circles li:nth-child(1) {
		left: 25%;
		width: 15px;
		height: 15px;
		animation-delay: 0s;
		animation-duration: 20s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${LeafGreen1};
	}

	.circles li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
		animation-duration: 25s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${LeafGreen2};
	}

	.circles li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
		animation-duration: 20s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${LeafGreen3};
	}

	.circles li:nth-child(4) {
		left: 40%;
		width: 45px;
		height: 45px;
		animation-delay: 0s;
		animation-duration: 15s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${LeafGreen4};
	}

	.circles li:nth-child(5) {
		left: 65%;
		width: 35px;
		height: 35px;
		animation-delay: 0s;
		animation-duration: 20s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${LeafRed};
	}

	.circles li:nth-child(6) {
		left: 75%;
		width: 45px;
		height: 45px;
		animation-delay: 0s;
		animation-duration: 25s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${MainPurple};
	}

	.circles li:nth-child(7) {
		left: 35%;
		width: 50px;
		height: 50px;
		animation-delay: 0s;
		animation-duration: 30s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${MainBlue};
	}

	.circles li:nth-child(8) {
		left: 50%;
		width: 17px;
		height: 17px;
		animation-delay: 0s;
		animation-duration: 35s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${MainGreenBlue};
	}

	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 0;
		}
		50% {
			transform: translateY(-60vh) rotate(360deg);
			opacity: 1;
		}
		100% {
			transform: translateY(-120vh) rotate(720deg);
			opacity: 0;
		}
	}
`;
