import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, SubHeader } from "../../Styles/styles";
import OffsetCard from "../../Components/Cards/offset_card";
import { useContext } from "react";
import { GlobalContext } from "../../Context/global/global-context";
import {
	addFavoriteProject,
	removeFavoriteProject,
} from "../../Context/actions/projects";
import { Button, Spinner, useToast } from "@chakra-ui/react";
import { LightBlue } from "../../Styles/colors";
import useFetch from "../../Utils/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getToken } from "../../Utils/getToken";

const ProjectsMarketplace = () => {
	const { projectsState, projectsDispatch } = useContext(GlobalContext);
	const [projects, setProjects] = useState([]);
	const [isDisabled, setIsDisabled] = useState(false);
	const toast = useToast();

	const projectsResponse = useFetch(
		"http://localhost:3001/backoffice/offsets",
		"Projects"
	);
	const { data } = projectsResponse;

	useEffect(() => {
		setProjects(data);
	}, [projects, data]);

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

	const addFavorite = (project) => {
		const isItemExists = projectsState.favoriteProjects.includes(project);
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
		projectsDispatch(removeFavoriteProject(project));
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
			<Heading {...SubHeader} style={{ marginBottom: "3rem" }}>
				All projects
			</Heading>
			<Flex style={{ marginBottom: "3rem" }}>
				{projects ? (
					<>
						{projects?.map((item) => (
							<OffsetCard addFavorite={addFavorite} item={item} isFav={false} />
						))}
					</>
				) : (
					<Spinner
						style={{ position: "absolute", top: "50%", left: "50%" }}
						color="white"
					/>
				)}
			</Flex>
			{projectsState.favoriteProjects.length > 0 ? (
				<>
					<BoxSize
						style={{ display: "block", width: "100%" }}
						isInvisible={true}
					>
						<Heading {...SubHeader}>Your favorite projects</Heading>
					</BoxSize>
					<BreakLine />
					<BoxSize isInvisible={true}>
						<Button
							right="1%"
							type="submit"
							disabled={isDisabled}
							bg={LightBlue}
							colorScheme="blue"
							onClick={() => {
								onSave();
							}}
						>
							Share with my customers
						</Button>
					</BoxSize>
				</>
			) : (
				<Heading {...SubHeader}>No favorite projects yet...</Heading>
			)}

			<Flex style={{ marginTop: "4rem", marginBottom: "4rem" }}>
				{projectsState.favoriteProjects ? (
					<>
						{projectsState.favoriteProjects.map((item) => (
							<OffsetCard
								removeFavorite={removeFavorite}
								item={item}
								isFav={true}
							/>
						))}
					</>
				) : (
					<p>No favs yet.</p>
				)}
			</Flex>
		</Flex>
	);
};

export default ProjectsMarketplace;
