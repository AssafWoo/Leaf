import { DarkTheme, MainGreen } from "../../Styles/colors";
import { BoxSize, Flex, Parag } from "../../Styles/styles";
import { Heading } from "@chakra-ui/layout";

const ModalContent = (props) => {
	return (
		<Flex style={{ alignItems: "stretch" }}>
			<Flex>
				<BoxSize isInvisible={true} flexSize="5">
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Name:
					</Heading>
					<Parag
						style={{
							textAlign: "left",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						{props.offset_name}
					</Parag>
				</BoxSize>
			</Flex>
			<Flex>
				<BoxSize isInvisible={true} flexSize="5">
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Date:
					</Heading>
					<Parag
						style={{
							textAlign: "left",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						{props.created_at}
					</Parag>
				</BoxSize>
				<BoxSize isInvisible={true} flexSize="5">
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Location:
					</Heading>
					<Parag
						style={{
							textAlign: "left",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						{props.location}
					</Parag>
				</BoxSize>
			</Flex>
			<Flex>
				<BoxSize isInvisible={true} flexSize="3">
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Total:
					</Heading>
					<Parag
						style={{
							textAlign: "left",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						${props.amountDollars}
					</Parag>
				</BoxSize>
				<BoxSize isInvisible={true} flexSize="2">
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Mass:
					</Heading>
					<Parag
						style={{
							textAlign: "left",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						{props.amountCo2}kg
					</Parag>
				</BoxSize>
			</Flex>
			<Flex>
				<BoxSize isInvisible={true} flexSize="3">
					<Heading fontSize="1rem" color="white" fontWeight="400" mb="1rem">
						Instrument Type:
					</Heading>
					<Parag
						style={{
							textAlign: "left",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						{props.offset_type}
					</Parag>
				</BoxSize>
				<BoxSize isInvisible={true} flexSize="5">
					<Heading fontSize="1rem" color="white" fontWeight="400">
						Registry Name:
					</Heading>
					<Parag
						style={{
							textAlign: "left",
							fontSize: "1.2rem",
							fontWeight: "500",
							color: MainGreen,
						}}
					>
						blah
					</Parag>
				</BoxSize>
			</Flex>
		</Flex>
	);
};

export default ModalContent;
