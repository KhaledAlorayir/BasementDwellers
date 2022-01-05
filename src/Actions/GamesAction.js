import axios from "axios";
import {
	PopularGamesURL,
	UpcomingGamesURL,
	NewGamesURL,
	SearchGamesURL,
} from "../util/API";

export const LoadGames = () => async (dispatch) => {
	const PopularData = await axios.get(PopularGamesURL());
	const NewGamesData = await axios.get(NewGamesURL());
	const UpcomingGamesData = await axios.get(UpcomingGamesURL());

	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: PopularData.data.results,
			new: NewGamesData.data.results,
			upcoming: UpcomingGamesData.data.results,
		},
	});
};

export const FetchSearch = (GameName) => async (dispatch) => {
	const SearchData = await axios.get(SearchGamesURL(GameName));

	dispatch({
		type: "FETCH_SEARCH",
		payload: {
			searched: SearchData.data.results,
		},
	});
};
