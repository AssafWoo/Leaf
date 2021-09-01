import { Heading } from "@chakra-ui/react";
import { BoxSize, Flex, Parag } from "../../Styles/styles";

const FilterCard = ({ icon, text, handleClick }) => (
	<BoxSize
		name={text}
		style={{ padding: "0rem", cursor: "pointer" }}
		isInvisible={false}
		onClick={() => handleClick(text)}
	>
		<Flex>
			<BoxSize isInvisible={true}>{icon}</BoxSize>
			<BoxSize isInvisible={true}>
				<Heading fontWeight="600" textAlign="center" fontSize="1.5rem">
					64T
				</Heading>
				<Parag style={{ textAlign: "center" }}>{text}</Parag>
			</BoxSize>
		</Flex>
	</BoxSize>
);

export default FilterCard;
