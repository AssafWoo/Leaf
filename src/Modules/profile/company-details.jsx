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
import AuthMyInput from "../../Utils/authInput";

const inputFields = [
	{ name: "Company Name", id: "companyName" },
	{ name: "Company Country", id: "companyCountry" },
];
const secondaryInputFields = [
	{ name: "Email", id: "email" },
	{ name: "Site URL", id: "siteURL" },
];
const CompanyDetails = (props) => {
	const { companyDetails } = props;
	const [editable, setEditble] = useState(false);
	const toast = useToast();

	console.log(companyDetails.company_name);

	return (
		<>
			{!editable ? (
				<Button
					float="right"
					bg={LightBlue}
					type="none"
					colorScheme="blue"
					mg="2"
					onClick={() => {
						setEditble(!editable);
						// onEditableChange();
					}}
				>
					Edit
				</Button>
			) : (
				""
			)}
			<Formik
				initialValues={{
					companyName: companyDetails?.company_name,
					companyCountry: companyDetails?.address.country,
					email: companyDetails?.email,
					siteURL: companyDetails?.siteURL,
				}}
				onSubmit={async (data, { setSubmitting }) => {
					console.log("im clicked");
					if (
						AuthMyInput(data.companyName) &&
						AuthMyInput(data.country) &&
						AuthMyInput(data.email) &&
						AuthMyInput(data.siteURL)
					) {
						//async call
						console.log("async");
						toast({
							title: "Changed successfully",
							description: "",
							status: "success",
							duration: 1000,
							isClosable: true,
						});
						setSubmitting(true);
					} else {
						console.log("error");

						toast({
							title: "Failed, please try again.",
							description: "Cant have empty inputs",
							status: "error",
							duration: 1000,
							isClosable: true,
						});
						setSubmitting(false);
					}
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
						{editable ? (
							<Button
								float="right"
								type="submit"
								bg={MainGreen}
								colorScheme="green"
								onClick={() => {
									setEditble(!editable);
									// onEditableChange();
								}}
							>
								Save
							</Button>
						) : (
							""
						)}

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
