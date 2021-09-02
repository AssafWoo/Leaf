import { Link } from "react-router-dom";
import { Heading, Tag, TagLabel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { GiPaperWindmill, GiPineTree } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { useState } from "react";
import ImgSource from "../../Assets/images/project1.jpg";

import { BoxSize, BreakLine, Flex } from "../../Styles/styles";
import {
	DarkerTheme,
	DarkTheme,
	LightBlue,
	MainGreen,
} from "../../Styles/colors";
import { ImgComponent } from "./offset_card_style";

export const OFFSET_TYPE = {
	WATER: {
		name: "water",
		icon: <IoIosWater size="5rem" color="white" display="inline-block" />,
		color: "LightBlue",
	},
	FORREST: {
		name: "forest",
		icon: <GiPineTree size="5rem" color="white" display="inline-block" />,
		color: "MainGreen",
	},
	AIR: {
		name: "air",
		icon: (
			<GiPaperWindmill
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				size="5rem"
				color="white"
				display="inline-block"
			/>
		),
		color: "LightBlue",
	},
};

const OffsetCard = ({ item, handleClick, isFav }) => {
	const [choosen, setChoosen] = useState(false);
	const handleSubmit = (item) => {
		setChoosen(!choosen);
		handleClick(item);
	};
	return (
		<Flex>
			<BoxSize
				isInvisible={true}
				style={{
					border: `none`,
					padding: "none",
					margin: "1rem",
					width: "20rem",
					display: "grid",
				}}
			>
				<ImgComponent
					// src={ProjectMockImage}
					src={ImgSource}
					alt="Project text"
					// style={{
					// 	height: "10rem",
					// 	width: "100%",
					// 	flex: 5,
					// 	borderRadius: "15px",
					// 	background: DarkTheme,
					// 	textAlign: "center",
					// 	margin: ".4rem auto",
					// 	color: "white",
					// }}
				/>
				<BoxSize
					isInvisible={false}
					style={{
						background: DarkerTheme,
						border: `1px solid ${MainGreen}`,
						borderRadius: "0",
						borderBottomRightRadius: "15px",
						borderBottomLeftRadius: "15px",
						borderTop: "0",
						boxShadow: `10px 10px 14px -12px ${LightBlue}`,
						width: "20rem",
						marginTop: "0",
					}}
				>
					<Tag marginLeft="3px" bg={LightBlue} color="white">
						<TagLabel padding=".2rem">Laos</TagLabel>
					</Tag>
					<Tag marginLeft="3px" bg={LightBlue} color="white">
						<TagLabel padding=".2rem">Clean water</TagLabel>
					</Tag>
					<Tag marginLeft="3px" bg={LightBlue} color="white">
						<TagLabel padding=".2rem">Gold Standard</TagLabel>
					</Tag>
					<Heading
						padding=".5rem"
						fontWeight="300"
						textAlign="left"
						fontSize="1.5rem"
						color="white"
					>
						Terraclear - Clean water access for families in Laos
					</Heading>
					<BreakLine />
					{isFav ? (
						<Button mg="1rem" colorScheme="red">
							Remove
						</Button>
					) : (
						// 		<Checkbox
						// 	isChecked={item.isChecked}
						// 	position="absolute"
						// 	borderRadius="50%"
						// 	colorScheme="blue"
						// 	top="2.5%"
						// 	left="90%"
						// 	zIndex="1"
						// 	onClick={() => handleSubmit(item)}
						// />
						<Button mg="1rem" colorScheme="green">
							Add
						</Button>
					)}
					<Link to={`/projects/${item.id}`}>
						<Button mg="1rem" colorScheme="blue" marginLeft=".4rem">
							Discover
						</Button>
					</Link>
				</BoxSize>
			</BoxSize>
		</Flex>
		/* <Button
		background={MainYellow}
		colorScheme="white"
		color="black"
		marginRight=".5rem"
	>
		Signup
	</Button> */
		/* <Button colorScheme="yellow">Discover</Button> */
		// <OffsetCardWrapper onClick={() => handleSubmit(item)}>
		/* <div
				style={{
					background: MainGrey,
					padding: "1rem",
					margin: ".5rem",
					borderRadius: "15px",
				}}
			>
				<div>
					{/* <div>{OFFSET_TYPE.AIR.icon}</div> */

		// <div className="contentBx">
		// 	<Heading
		// 		padding=".5rem"
		// 		fontWeight="600"
		// 		textAlign="center"
		// 		fontSize="1.5rem"
		// 	>
		// 		{item.name}
		// 	</Heading>
		// 	<div className="content">
		// 		<Flex>
		// 			<Tag margin="3px" bg={DarkerTheme} color="white" left="1px">
		// 				<TagLabel padding=".2rem">item.country</TagLabel>
		// 			</Tag>
		// 			<Tag margin="3px" bg={DarkerTheme} color="white" left="1px">
		// 				<TagLabel padding=".2rem">item.verifier</TagLabel>
		// 			</Tag>
		// 			<Tag margin="3px" bg={DarkerTheme} color="white" left="1px">
		// 				<TagLabel padding=".2rem">item.purpose</TagLabel>
		// 			</Tag>
		// 			<BreakLine />
		// 		</Flex>
		// 	</div>
		// 	{isFav ? (
		// 		<Button mg="1rem" colorScheme="red">
		// 			Remove
		// 		</Button>
		// 	) : (
		// 		// <Checkbox
		// 	isChecked={item.isChecked}
		// 	position="absolute"
		// 	borderRadius="50%"
		// 	colorScheme="blue"
		// 	top="2.5%"
		// 	left="90%"
		// 	zIndex="1"
		// 	onClick={() => handleSubmit(item)}
		// />
		// 				<Button mg="1rem" colorScheme="green">
		// 					Add
		// 				</Button>
		// 			)}
		// 			<Link to={`/projects/${item.id}`}>
		// 				<Button mg="1rem" colorScheme="blue" marginLeft=".4rem">
		// 					Discover
		// 				</Button>
		// 			</Link>
		// 		</div>
		// 	</div>
		// </div>
		// </OffsetCardWrapper> */}
	);
};

export default OffsetCard;
