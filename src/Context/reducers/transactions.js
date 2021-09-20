import {
	LOAD_TRANSACTIONS_SUCCESS,
	SET_TRANSACTIONS,
	SET_LAST_TRANSACTIONS,
	LOAD_TRANSACTIONS_FAILURE,
} from "../actions/transactions";

const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_TRANSACTIONS_FAILURE:
			return { error: action.payload };
		case LOAD_TRANSACTIONS_SUCCESS:
			return { allTransactions: action.payload, error: null };
		case SET_TRANSACTIONS:
			const rejected = action.payload?.filter(
				(item) => item.transaction_status === "REJ"
			);
			const resolved = action.payload?.filter(
				(item) => item.transaction_status === "CLE"
			);
			const active = action.payload?.filter(
				(item) => item.transaction_status === "ACT"
			);

			return {
				...state,
				allTransactions: action.payload,
				rejectedTransactions: rejected,
				activeTransactions: active,
				clearedTransactions: resolved,
				error: null,
			};
		case SET_LAST_TRANSACTIONS:
			return { ...state, lastTransactions: action.payload, error: null };
		default:
			return state;
	}
};

export default reducer;
