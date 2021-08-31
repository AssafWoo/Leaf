import { Button } from "@chakra-ui/button";
import { MainGreen } from "../../Styles/colors";
import { BoxSize, BreakLine, LeafIcon } from "../../Styles/styles";
import LeafLogo from "../../Assets/images/leaf-logo-green-leaf.png";

const RegisterContent = ({ handleRegister, isDisabled }) => {
	return (
		<BoxSize
			isInvisible={true}
			flexSize="5"
			style={{
				width: "fit-content",
			}}
		>
			<LeafIcon style={{ margin: "0" }} isSmall={true} src={LeafLogo} />
			<BreakLine />
			Should be a video here.
			<Button
				type="submit"
				disabled={isDisabled}
				w="100%"
				mt="1rem"
				bg={MainGreen}
				color="white"
				colorScheme="green"
				onClick={handleRegister}
			>
				Go Go Go
			</Button>
		</BoxSize>
	);
};

export default RegisterContent;
