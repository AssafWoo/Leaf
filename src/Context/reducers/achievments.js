import {
	LOAD_ACHIEVMENTS_SUCCESS,
	SET_WEEKLY_ACHIEVMENTS,
	SET_ACHIEVMENT,
	LOAD_ACHIEVMENTS_FAILURE,
} from "../actions/achievments.ts";

const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_ACHIEVMENTS_FAILURE:
			return { error: action.payload };
		case LOAD_ACHIEVMENTS_SUCCESS:
			return { allInsights: action.payload, error: null };
		case SET_ACHIEVMENT:
			return { allInsights: action.payload, error: null };
		case SET_WEEKLY_ACHIEVMENTS:
			return { ...state, weeklyInsights: action.payload, error: null };
		default:
			return state;
	}
};

export default reducer;
