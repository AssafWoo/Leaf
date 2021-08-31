import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import {
	DarkerTheme,
	DarkTheme,
	LightBlue,
	MainGreen,
} from "../../Styles/colors";
import { BoxSize, BreakLine, Flex, Parag } from "../../Styles/styles";
import { Formik, Form, Field } from "formik";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const inputFields = [
	{ name: "Company Name", id: "name" },
	{ name: "Company Address", id: "companyAddress" },
];
const secondaryInputFields = [
	{ name: "Email", id: "email" },
	{ name: "Site URL", id: "siteURL" },
];
const CompanyDetails = ({ companyDetails }) => {
	console.log(companyDetails);
	const [editable, setEditble] = useState(false);
	const [editableString, setEditbleString] = useState("Edit");
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

	return (
		<>
			<Formik
				initialValues={{
					name: companyDetails.company,
					companyAddress: companyDetails.address,
					email: companyDetails.email,
					URL: companyDetails.siteURL,
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
								{inputFields.map((input) => (
									<Field>
										{({ field, form }) => (
											<FormControl id={input.id}>
												<FormLabel
													color="white"
													fontSize="1.1rem"
													textAlign="left"
													pb="2"
												>
													{input.name}
												</FormLabel>
												<Input
													disabled={!editable}
													background={DarkerTheme}
													border="none"
													name={input.id}
													value={values[input.id]}
													onChange={handleChange}
													onBlur={handleBlur}
													mb="5"
												/>
												<FormErrorMessage>'</FormErrorMessage>
											</FormControl>
										)}
									</Field>
								))}
							</BoxSize>
							<BoxSize flexSize="1" isInvisible={true}>
								{secondaryInputFields.map((input) => (
									<Field>
										{({ field, form }) => (
											<FormControl id={input.id}>
												<FormLabel
													color="white"
													fontSize="1.1rem"
													textAlign="left"
													pb="2"
												>
													{input.name}
												</FormLabel>
												<Input
													disabled={!editable}
													background={DarkerTheme}
													border="none"
													name={input.id}
													value={values[input.id]}
													onChange={handleChange}
													onBlur={handleBlur}
													mb="5"
												/>
												<FormErrorMessage>'</FormErrorMessage>
											</FormControl>
										)}
									</Field>
								))}
							</BoxSize>
						</Flex>
					</Form>
				)}
			</Formik>
			<Flex style={{ marginTop: "1rem" }}>
				<BoxSize flexSize="1" isInvisible={false}>
					<Heading fontSize="1.4rem" textAlign="left" fontWeight="300">
						Sustaiabliity Report
					</Heading>
					<BreakLine />
					<Parag> Slug - 1232141</Parag>
					<Parag> http://asdldsfsd.com/leaf/14314dsfsdfg43/report</Parag>
				</BoxSize>
			</Flex>
		</>
	);
};
export default CompanyDetails;
