import { Heading } from "@chakra-ui/layout";
import React from "react";
import { BoxSize, BreakLine, Flex, SubHeader } from "../Styles/styles";
import AchievmentCard from "../Components/Cards/achievment_card";
import { mockAchievments } from "../Mocks/achievments";

const Insights = () => {
	return (
		<Flex>
			<Heading {...SubHeader}>Your Achievments</Heading>
			<BreakLine />
			{mockAchievments.map((item) => (
				<BoxSize isInvisible={true} boxSize="3" key={item.header}>
					<AchievmentCard item={item} />
				</BoxSize>
			))}
		</Flex>
	);
};

export default Insights;
