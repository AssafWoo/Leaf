/* eslint-disable react-hooks/rules-of-hooks */
import { Flex } from "@chakra-ui/layout";
import { DarkTheme } from "../Styles/colors";
import { BoxSize, SubHeader } from "../Styles/styles";
import { Input } from "@chakra-ui/input";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import { useReducer, useState } from "react";
import { useHistory } from "react-router";
import { Center, FormHelperText, Heading, useToast } from "@chakra-ui/react";
import axios from "axios";
import { countries } from "../Mocks/countries";
import { inputNames, secondaryInputNames } from "../Modules/sign-up/fields";
import { RegisterSchema } from "../Modules/sign-up/register_schema";
import RegisterContent from "../Modules/sign-up/content";
import { initialState, registerReducer } from "../Modules/sign-up/reducer";
import Autocomplete from "../Utils/autoComplete";

// need to display errors in some kind of text above the signup page
// need to erase state once error is done

const Signup = () => {
	const [state, dispatch] = useReducer(registerReducer, initialState);
	// State and setter for search results
	// State for search status (whether there is a pending API request)
	const toast = useToast();
	const [isDisabled, setIsDisabled] = useState(false);
	const history = useHistory();
	const {
		Name,
		Email,
		Password,
		Company,
		Country,
		State,
		City,
		Site_URL,
		error,
		isLoading,
	} = state;

	const handleCountrySelect = (item) => {
		state.Country = item;
		console.log(state.Country);
	};

	const handleRegister = async (e) => {
		// only if the validation has passed the tests
		setIsDisabled(true);
		try {
			const responseData = await axios.post(
				"http://localhost:3001/backoffice/auth/register",
				{
					email: state.Email,
					password: state.Password,
					username: state.Name,
					merchant_name: state.Company,
					country_code: state.Country,
					state: state.State,
					city: state.City,
					site_url: state.Site_URL,
				}
			);
			dispatch({ type: "success" });
			toast({
				title: responseData.statusText,
				description: "We've created your account for you.",
				status: "success",
				duration: 4000,
				isClosable: true,
			});

			history.push({
				pathname: "/login",
			});
		} catch (e) {
			dispatch({ type: "field", field: "Email", value: "" });
			setIsDisabled(false);
			toast({
				title: "Something went wrong",
				description: "Please try again, enter valid answers",
				status: "error",
				duration: 40004,
				isClosable: true,
			});
		}
	};
	// need to make the ul display none when country is clicked

	return (
		<Flex Flex justify="center" align="center" margin="4rem" w="fit-content">
			<Center>
				<Flex Flex justify="left" align="left" w="fit-content">
					<BoxSize flexSize="5" isInvisible={true}>
						<Heading mb="1rem" {...SubHeader}>
							Sign up
						</Heading>
						<hr />
						<Flex style={{ width: "100%", display: "inline-block" }}>
							<Formik
								initialValues={{
									name: "",
									email: "",
									password: "",
									company: "",
									address: "",
								}}
								validationSchema={RegisterSchema}
								onSubmit={async (data, { setSubmitting }) => {
									handleRegister();
								}}
							>
								{({
									values,
									isSubmitting,
									handleChange,
									handleBlur,
									handleSubmit,
								}) => (
									<Form>
										<Flex>
											<BoxSize
												flexSize="5"
												style={{ padding: "1.5rem", background: "transparent" }}
											>
												{inputNames.map((input) => (
													<Field>
														{({ field, form }) => (
															<FormControl
																id={input.name}
																isRequired={input.required}
															>
																<FormLabel
																	color="white"
																	fontSize="1.1rem"
																	textAlign="left"
																	pb="2"
																>
																	{input.name}
																</FormLabel>
																<Input
																	type={input.type}
																	name={input.name}
																	onChange={(e) =>
																		dispatch({
																			type: "field",
																			field: input.name,
																			value: e.target.value,
																		})
																	}
																	onBlur={handleBlur}
																	border="none"
																	bg={DarkTheme}
																/>
																<FormHelperText mb="5">
																	{input.message}
																</FormHelperText>{" "}
															</FormControl>
														)}
													</Field>
												))}
											</BoxSize>

											<BoxSize
												flexSize="5"
												style={{ padding: "1.5rem", background: "transparent" }}
											>
												<Field>
													{({ field, form }) => (
														<FormControl id={"Country"} isRequired={true}>
															<FormLabel
																color="white"
																fontSize="1.1rem"
																textAlign="left"
																pb="2"
															>
																Country
															</FormLabel>
															<Autocomplete
																handleCountrySelect={handleCountrySelect}
																suggestions={countries}
															/>
														</FormControl>
													)}
												</Field>
												{secondaryInputNames.map((input) => (
													<Field>
														{({ field, form }) => (
															<FormControl
																id={input.name}
																isRequired={input.required}
															>
																<FormLabel
																	color="white"
																	fontSize="1.1rem"
																	textAlign="left"
																	pb="2"
																>
																	{input.name}
																</FormLabel>
																<Input
																	type="text"
																	name={input.name}
																	onChange={(e) =>
																		dispatch({
																			type: "field",
																			field: input.name,
																			value: e.target.value,
																		})
																	}
																	onBlur={handleBlur}
																	border="none"
																	bg={DarkTheme}
																/>
																<FormHelperText mb="5">
																	{input.message}
																</FormHelperText>
															</FormControl>
														)}
													</Field>
												))}
											</BoxSize>
										</Flex>
									</Form>
								)}
							</Formik>
						</Flex>
					</BoxSize>

					<RegisterContent
						handleRegister={handleRegister}
						isDisabled={isDisabled}
					/>
				</Flex>
			</Center>
		</Flex>
	);
};

export default Signup;
