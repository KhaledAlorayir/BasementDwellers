const InitialState = {
	details: {},
	screenshots: [],
	isLoading: true,
};

const DetailsReducer = (state = InitialState, action) => {
	switch (action.type) {
		case "FETCH_DETAILS":
			return {
				...state,
				details: action.payload.details,
				screenshots: action.payload.screenshots,
				isLoading: false,
			};

		case "Details_Loading":
			return {
				...state,
				isLoading: true,
			};
		default:
			return { ...state };
	}
};

export default DetailsReducer;
