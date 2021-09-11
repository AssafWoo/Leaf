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
			const globalStore = JSON.parse(localStorage.getItem("userInfo"));
			return {
				...state,
				userData: {
					...state.userData,
					// accountOwner: globalStore.data.account_owner,
					account_owner: globalStore.account_owner,
					company: globalStore.company_name,
					email: globalStore.email,
					billing: globalStore.billing,
					siteUrl: "globalStore.data.site_URL",
					address: {
						country: globalStore.address.country,
					},
				},
				loggedIn: true,
			};
		case PUT_USER:
			return { user: action.payload, error: null };
		case LOG_OUT_USER:
			localStorage.removeItem("token");
			localStorage.removeItem("userInfo");

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
