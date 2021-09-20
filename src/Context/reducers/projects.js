import {
	LOAD_PROJECTS,
	LOAD_PROJECTS_SUCCESS,
	LOAD_PROJECTS_FAILURE,
	SET_PROJECTS,
	ADD_FAVORITE_PROJECT,
	REMOVE_FAVORITE_PROJECT,
	SET_FAVORITES,
} from "../actions/projects";

const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_PROJECTS:
			return { error: action.payload };
		case LOAD_PROJECTS_SUCCESS:
			return { ...state, allProjects: action.payload, error: null };
		case LOAD_PROJECTS_FAILURE:
			return { ...state, error: action.payload };
		case SET_PROJECTS:
			return { ...state, allProjects: action.payload, error: null };
		case SET_FAVORITES:
			console.log(`action: ${action.payload}`);
			return { ...state, favoriteProjects: action.payload, error: null };
		case ADD_FAVORITE_PROJECT:
			state.error = "";
			const isItemExists = state.favoriteProjects.includes(action.payload);
			if (isItemExists === false) {
				return {
					...state,
					favoriteProjects: state.favoriteProjects.concat(action.payload),
					error: null,
				};
			}
			return {
				...state,
				error: "Project already in favorites",
			};
		case REMOVE_FAVORITE_PROJECT:
			const filteredFavorite = state.favoriteProjects.filter(
				(e) => e !== action.payload
			);
			console.log(filteredFavorite);
			return {
				...state,
				favoriteProjects: filteredFavorite,
				error: null,
			};

		default:
			return state;
	}
};

export default reducer;
