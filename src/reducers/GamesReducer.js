const InitalState = {
	popular: [],
	newGames: [],
	upcoming: [],
	searched: [],
};

const GamesReducer = (state = InitalState, action) => {
	switch (action.type) {
		case "FETCH_GAMES":
			return {
				...state,
				popular: action.payload.popular,
				newGames: action.payload.new,
				upcoming: action.payload.upcoming,
			};

		case "FETCH_SEARCH":
			return {
				...state,
				searched: action.payload.searched,
			};

		case "CLEAR_SEARCH":
			return {
				...state,
				searched: [],
			};

		default:
			return { ...state };
	}
};

export default GamesReducer;
