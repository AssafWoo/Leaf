import React from "react";
import { Flex, BoxSize } from "../../Styles/styles";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useReducer } from "react";
import BillingDetails from "./billing-fields";

function paymentReducer(state, action) {
	switch (action.type) {
		case "field":
			return {
				...state,
				[action.field]: action.value,
			};
		case "submit":
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
				name: "",
				number: "",
				expiry: "",
				cvc: "",
				focus: "",
			};
		default:
			return state;
	}
}

const initialState = {
	name: "",
	number: "",
	expiry: "",
	cvc: "",
	focus: "",
	error: "",
	isLoading: false,
};

const PaymentForm = () => {
	const [state, dispatchFunction] = useReducer(paymentReducer, initialState);
	const { name, number, expiry, cvc, focus, error, isLoading } = state;

	return (
		<Flex>
			<BoxSize isInvisible={false} flexSize="5">
				<BillingDetails
					name={name}
					number={number}
					expiry={expiry}
					cvc={cvc}
					focus={focus}
					error={error}
					isLoading={isLoading}
					dispatchFunction={dispatchFunction}
				/>
			</BoxSize>
			<BoxSize style={{ padding: 0 }} isInvisible={true} flexSize="5">
				<Cards
					cvc={cvc}
					expiry={expiry}
					focused={focus}
					name={name}
					number={number}
				/>
			</BoxSize>
		</Flex>
	);
};

export default PaymentForm;
