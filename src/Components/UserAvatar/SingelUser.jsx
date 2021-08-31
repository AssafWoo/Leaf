import CompanyAvatar from "../../Assets/images/leaf-logo-green-leaf.png";
import { FaUser } from "react-icons/fa";
import { MainGreen } from "../../Styles/colors";

const SingleUser = ({ desiredPhoto }) => {
	if (desiredPhoto === "company") {
		return (
			<img
				alt="company"
				style={{ width: "40%", display: "inline-block", borderRadius: "20px" }}
				src={CompanyAvatar}
			/>
		);
	}
	return (
		<FaUser
			size="2rem"
			style={{
				border: `1px solid ${MainGreen}`,
				padding: ".4rem",
				borderRadius: "50%",
				color: "white",
				background: MainGreen,
			}}
		/>
	);
};

export default SingleUser;
