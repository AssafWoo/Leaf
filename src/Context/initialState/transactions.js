import { mockTransactionsData } from "../../Mocks/transactions-mock";

export const transactionsInitialState = {
	allTransactions: mockTransactionsData.data, // switch to empty array
	lastTransactions: [],
	filteredTransactions: [],
	error: null,
};
