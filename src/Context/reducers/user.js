import {
	LOAD_USER_SUCCESS,
	SET_USER,
	USER_LOGIN,
	LOAD_USER_FAILURE,
	PUT_USER,
	LOG_OUT_USER,
} from "../actions/user";

const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_USER_FAILURE:
			return { error: action.payload };
		case LOAD_USER_SUCCESS:
			return { user: action.payload, error: null };
		case USER_LOGIN:
			localStorage.setItem("token", action.payload);
			return {
				...state,
				loggedIn: true,
				authKey: action.payload,
			};
		case SET_USER:
			console.log("re-render");
			console.log(action.payload);
			return {
				...state,
				account_owner: "Assaf",
				company: action.payload?.company_name,
				email: action.payload?.email,
				billing: action.payload?.billing,
				siteUrl: "action.payload.data.site_URL",
				address: {
					country: action.payload?.address.country,
				},
				loggedIn: true,
			};
		case PUT_USER:
			return { user: action.payload, error: null };
		case LOG_OUT_USER:
			localStorage.removeItem("token");

			return {
				...state,
				error: null,
				loggedIn: false,
				authKey: "",
			};
		default:
			return state;
	}
};

export default reducer;
