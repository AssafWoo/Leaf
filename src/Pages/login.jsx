import { useContext, useReducer } from "react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { DarkTheme, MainBlue, MainGreen } from "../Styles/colors";
import { BoxSize, LeafIcon } from "../Styles/styles";
import {
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/react";
import LeafLogo from "../Assets/images/leaf-green.png";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { GlobalContext } from "../Context/global/global-context";
import { useHistory } from "react-router";
import { loginUser } from "../Context/actions/user";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function loginReducer(state, action) {
	switch (action.type) {
		case "field":
			return {
				...state,
				[action.field]: action.value,
			};
		case "login":
			return {
				...state,
				isLoading: true,
				error: "",
			};
		case "error":
			return {
				...state,
				error: action.value,
				isLoading: false,
			};
		default:
			return state;
	}
}

const initialState = {
	email: "",
	password: "",
	error: "",
	isLoading: false,
};

const Login = () => {
	const { _, userDispatch } = useContext(GlobalContext);
	const [state, dispatchFunction] = useReducer(loginReducer, initialState);
	const toast = useToast();
	const history = useHistory();
	const { email, password, error, isLoading } = state;
	const handleLogin = async (e) => {
		try {
			const data = await axios.post(
				"http://localhost:3001/backoffice/auth/login",
				{ email: email, password: password }
			);
			console.log(data);
			toast({
				title: "Welcome back",
				description: "",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			dispatchFunction({ type: "success" });
			const accessToken = data.data.data.accessKey;
			userDispatch(loginUser(accessToken));
			history.push("/dashboard");
		} catch (e) {
			dispatchFunction({ type: "error", value: e });
			toast({
				title: e?.response?.data.message,
				description: `Error code: ${e.response.data.statusCode}`,
				status: "error",
				duration: 1000,
				isClosable: true,
			});
		}
	};
	return (
		<Flex
			Flex
			justify="center"
			align="center"
			m="auto"
			w="fit-content"
			h="93vh"
		>
			<BoxSize
				flexSize="5"
				isInvisible={true}
				style={{ border: "1px solid white" }}
			>
				<LeafIcon src={LeafLogo} />
				<Flex>
					<BoxSize
						flexSize="1"
						style={{ padding: "1.5rem", background: "transparent" }}
					>
						<Formik
							initialValues={{ email: "", password: "" }}
							onSubmit={async (data, { setSubmitting }) => {
								setSubmitting(true);
								//make async call
								handleLogin();
								setSubmitting(false);
							}}
						>
							{({
								values,
								isSubmitting,
								handleChange,
								handleBlur,
								handleSubmit,
							}) => (
								<Form onSubmit={handleSubmit}>
									<Field>
										{({ field, form }) => (
											<FormControl id="email" isRequired>
												<FormLabel
													color="white"
													fontSize="1.1rem"
													textAlign="left"
													pb="2"
												>
													Email address
												</FormLabel>
												<Input
													value={state.email}
													name="email"
													onChange={(e) =>
														dispatchFunction({
															type: "field",
															field: "email",
															value: e.target.value,
														})
													}
													onBlur={handleBlur}
													border="1px solid white"
													bg={DarkTheme}
													mb="5"
												/>
												<FormErrorMessage>'</FormErrorMessage>
											</FormControl>
										)}
									</Field>

									<Field>
										{({ field, form }) => (
											<FormControl id="password" isRequired>
												<FormLabel
													color="white"
													fontSize="1.1rem"
													textAlign="left"
													pb="2"
												>
													Password
												</FormLabel>
												<Input
													value={state.password}
													type="password"
													name="password"
													onChange={(e) =>
														dispatchFunction({
															type: "field",
															field: "password",
															value: e.target.value,
														})
													}
													onBlur={handleBlur}
													border="1px solid white"
													bg={DarkTheme}
													mb="5"
												/>
												<FormErrorMessage>'</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Button
										disabled={isSubmitting}
										type="submit"
										w="100%"
										bg={MainGreen}
										color="white"
										colorScheme="green"
									>
										Lets roll
									</Button>
								</Form>
							)}
						</Formik>
						<Flex>
							<BoxSize flexSize="1" isInvisible={true}>
								<span style={{ fontSize: ".7rem" }}>New around?</span>
							</BoxSize>
							<BoxSize flexSize="1" isInvisible={true}>
								<Link to="/signup">
									<Button bg={MainBlue} color="white" colorScheme="pink">
										Sign up
									</Button>
								</Link>
							</BoxSize>
						</Flex>
					</BoxSize>
				</Flex>
			</BoxSize>
		</Flex>
	);
};

export default Login;
