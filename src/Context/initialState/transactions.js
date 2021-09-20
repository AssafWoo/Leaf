import { mockTransactionsData } from "../../Mocks/transactions-mock";

export const transactionsInitialState = {
	allTransactions: mockTransactionsData.data, // switch to empty array
	lastTransactions: [],
	rejectedTransactions: [],
	activeTransactions: [],
	clearedTransactions: [],
	filteredTransactions: [],
	error: null,
};
