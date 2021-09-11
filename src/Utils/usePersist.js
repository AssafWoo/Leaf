import { useEffect } from "react";

export function usePersistedContext(context, key = "state") {
	const persistedContext = localStorage.getItem(key);
	return persistedContext ? JSON.parse(persistedContext) : context;
}

export function useGetPersistedToken(key) {
	const persistedExisitingToken = localStorage.getItem(key);
	return persistedExisitingToken ? true : false;
}

export function usePersistedReducer([state, dispatch], key = "userInfo") {
	useEffect(
		() => localStorage.setItem(key, JSON.stringify(state)),
		[state, key]
	);
	return [state, dispatch];
}
