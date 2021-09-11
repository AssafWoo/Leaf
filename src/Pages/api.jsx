import React, { useContext } from "react";
import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, SubHeader, Parag } from "../Styles/styles";
import { GlobalContext } from "../Context/global/global-context";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// need to build a database for integrations data
const APICallsComponent = () => {
	const { userState } = useContext(GlobalContext);

	return (
		<Flex>
			<Heading {...SubHeader}>Api Keys</Heading>!
			{userState.billing ? (
				<>
					<Parag style={{ color: "white" }}>Api keys unique for you</Parag>
					<BoxSize FlexSize="5">Api keys, secret etc...</BoxSize>
					<BreakLine />

					<Parag style={{ color: "white" }}>
						Explore our documentation to get more data about how to integrate
						with Leaf.
					</Parag>

					<BoxSize FlexSize="5">Using Leaf API 2021Beta</BoxSize>
				</>
			) : (
				<>
					<BreakLine />
					<Parag style={{ color: "white" }}>
						No access key yet, complete billing method to generate one
					</Parag>
					<BreakLine />
					<Link to="/profile">
						<Button colorScheme="blue" style={{ color: "white" }}>
							Go to billing
						</Button>
					</Link>
				</>
			)}
		</Flex>
	);
};

export default APICallsComponent;
