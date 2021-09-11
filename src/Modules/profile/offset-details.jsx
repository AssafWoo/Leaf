import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import {
	DarkerTheme,
	DarkTheme,
	LightBlue,
	MainGreen,
	MainGrey,
} from "../../Styles/colors";
import { BoxSize, BreakLine, Flex, Parag } from "../../Styles/styles";
import { Formik, Form, Field } from "formik";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { useContext, useState } from "react";
import TableTemplate from "../../Components/Table/table-template";
import { ProjectsColumns } from "../../Components/Table/data-stracture";
import { GlobalContext } from "../../Context/global/global-context";
import { useToast } from "@chakra-ui/react";

const OffsetDetails = () => {
	const [editable, setEditble] = useState(false);
	const [editableString, setEditbleString] = useState("Edit");
	const { projectsState } = useContext(GlobalContext);

	const toast = useToast();

	const onEditableChange = () => {
		if (editableString === "Edit") setEditbleString("Save");
		else if (editableString === "Save") {
			(async () => {
				try {
					await console.log("hey");
					toast({
						title: "Changed successfully",
						description: "",
						status: "success",
						duration: 1000,
						isClosable: true,
					});
					// another call to the changed information
				} catch (e) {
					toast({
						title: "Failed, please try again.",
						description: "",
						status: "error",
						duration: 1000,
						isClosable: true,
					});
				}
			})();

			setEditbleString("Edit");
		}
	};
	// we need to do a fetch request here for favorite projects and not show the data in the context

	return (
		<>
			{/*
			<Parag>Offset Pricing</Parag>
			<BreakLine />
			 <Formik
				initialValues={{
					minPrice: 0,
					maxPrice: 0,
					Favorites: [],
				}}
				onSubmit={async (data, { setSubmitting }) => {
					setSubmitting(true);
					//async call
					console.log("submit: ", data);
					setSubmitting(false);
				}}
			>
				{({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
					<Form
						style={{
							background: DarkTheme,
							borderRadius: "15px",
							padding: "1rem",
						}}
					>
						<Button
							float="right"
							type="submit"
							bg={editableString === "Edit" ? LightBlue : MainGreen}
							colorScheme={editableString === "Edit" ? "blue" : "green"}
							onClick={() => {
								setEditble(!editable);
								onEditableChange();
							}}
						>
							{" "}
							{editableString}{" "}
						</Button>
						<Flex>
							<BoxSize flexSize="1" isInvisible={true}>
								<Field>
									{({ field, form }) => (
										<FormControl id="minPrice">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Minimum price($)
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												type="number"
												name="minPrice"
												value={values.minPrice}
												onChange={handleChange}
												onBlur={handleBlur}
												mb="5"
											/>
											<FormErrorMessage>'</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</BoxSize>
							<BoxSize isInvisible={true} flexSize="1">
								<Field>
									{({ field, form }) => (
										<FormControl id="maxPrice">
											<FormLabel
												color="white"
												fontSize="1.1rem"
												textAlign="left"
												pb="2"
											>
												Maximum price($)
											</FormLabel>
											<Input
												disabled={!editable}
												background={DarkerTheme}
												border="none"
												name="maxPrice"
												type="number"
												value={values.maxPrice}
												onChange={handleChange}
												onBlur={handleBlur}
												mb="5"
											/>
											<FormErrorMessage>'</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</BoxSize>
						</Flex>
					</Form>
				)}
			</Formik> 
			<BreakLine />
			*/}
			<Flex>
				<BoxSize
					isInvisible={true}
					flexSize="3"
					style={{ border: `1px solid ${MainGrey}` }}
				>
					<Parag>Favorite offsets</Parag>
					<TableTemplate
						filterCards=""
						tableData={projectsState.favoriteProjects}
						columnsType={ProjectsColumns}
					/>
				</BoxSize>
			</Flex>
		</>
	);
};
export default OffsetDetails;
