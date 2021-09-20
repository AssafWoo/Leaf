import { Heading } from "@chakra-ui/layout";
import { BreakLine, Flex, Parag, SubHeader } from "../../Styles/styles";
import OffsetCard from "../../Components/Cards/offset_card";
import { useContext } from "react";
import { GlobalContext } from "../../Context/global/global-context";
import {
	addFavoriteProject,
	removeFavoriteProject,
	setFavorites,
} from "../../Context/actions/projects";
import { Button, Spinner, useToast } from "@chakra-ui/react";
import { LightBlue } from "../../Styles/colors";
import useFetch from "../../Utils/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getToken } from "../../Utils/getToken";

// pull the current favorite
// add them to the state
// display the state
// when add - check in state if exists < is working
// when remove - remove from state < is working
// send a new array to the favorite gateway
// when save - send a new array to favorite gateway

const ProjectsMarketplace = () => {
	const { projectsState, projectsDispatch } = useContext(GlobalContext);
	const [projects, setProjects] = useState([]);
	const [initialFavoriteProjects, setInitialFavoriteProjects] = useState([]);
	const [isDisabled, setIsDisabled] = useState(false);
	const toast = useToast();

	const projectsResponse = useFetch(
		"http://localhost:3001/backoffice/offsets",
		"Projects"
	);
	const projectsData = projectsResponse?.data?.data;

	useEffect(() => {
		setProjects(projectsData);
		setInitialFavoriteProjects(
			projectsData?.filter((project) => project.allowedForMerchant === true)
		);
	}, [projectsData]);

	useEffect(() => {
		projectsDispatch(setFavorites(initialFavoriteProjects));
		console.log(`im useEffect: ${projectsState.favoriteProjects}`);
	}, []);

	const onSave = async () => {
		setIsDisabled(true);
		let validToken = getToken();
		let config = {
			headers: {
				Authorization: "Bearer " + validToken,
			},
		};
		try {
			const responseData = await axios.put(
				"http://localhost:3001/backoffice/merchants/allowed-offsets",
				{ allowed_offsets_ids: projectsState.favoriteProjects },
				config
			);
			toast({
				title: "Changed successfully",
				description: "",
				status: "success",
				duration: 1000,
				isClosable: true,
			});
			setIsDisabled(false);
		} catch (e) {
			toast({
				title: e.response.data.message,
				description: `Error code :${e.response.data.statusCode}`,
				status: "error",
				duration: 1000,
				isClosable: true,
			});
			setIsDisabled(false);
		}
	};
	//
	const addFavorite = (project) => {
		const isItemExists = initialFavoriteProjects.includes(project);
		if (isItemExists) {
			toast({
				title: "Project already exists in favorites",
				description: "",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Project added to favorites!",
				description: "",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			projectsDispatch(addFavoriteProject(project));
		}
	};

	const removeFavorite = (project) => {
		// should sent a request with the updated array
		projectsDispatch(removeFavoriteProject(project));
		console.log(`im from remove: ${projectsState.favoriteProjects}`);
		toast({
			title: "Project removed from favorites!",
			description: "",
			status: "success",
			duration: 2000,
			isClosable: true,
		});
	};

	return (
		<Flex>
			<Heading {...SubHeader}>All projects</Heading>
			<Parag style={{ color: "white" }}>
				Browse through our projects and choose what you believe in
			</Parag>
			<Flex style={{ marginBottom: "3rem" }}>
				{projects ? (
					<>
						{projects?.map((item) => (
							<OffsetCard
								key={item.id}
								addFavorite={addFavorite}
								item={item}
								isFav={false}
							/>
						))}
					</>
				) : (
					<Spinner
						style={{ position: "absolute", top: "50%", left: "50%" }}
						color="white"
					/>
				)}
			</Flex>
			<Flex>
				{initialFavoriteProjects ? (
					<>
						<Heading {...SubHeader}>Your favorite projects</Heading>
						<Parag style={{ color: "white" }}>
							Take charge, invest in projects important to you and make a change
							in the world!
						</Parag>
						<BreakLine />
						<div style={{ width: "100%", textAlign: "left" }}>
							<Button
								type="submit"
								disabled={isDisabled}
								bg={LightBlue}
								colorScheme="blue"
								onClick={() => {
									onSave();
								}}
							>
								Save
							</Button>
						</div>{" "}
						{initialFavoriteProjects.map((item) => (
							<OffsetCard
								key={item.id}
								removeFavorite={removeFavorite}
								item={item}
								isFav={true}
							/>
						))}
					</>
				) : (
					<Heading {...SubHeader}>No favorite projects yet...</Heading>
				)}
			</Flex>
		</Flex>
	);
};

export default ProjectsMarketplace;
