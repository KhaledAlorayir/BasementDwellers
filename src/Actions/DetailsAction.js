import axios from "axios";
import { GameDetailURL, GameScreenshotsURL } from "../util/API";

export const GetDetails = (GameID) => async (dispatch) => {
	dispatch({
		type: "Details_Loading",
	});

	const GameDetails = await axios.get(GameDetailURL(GameID));
	const GameScreenshots = await axios.get(GameScreenshotsURL(GameID));

	dispatch({
		type: "FETCH_DETAILS",
		payload: {
			details: GameDetails.data,
			screenshots: GameScreenshots.data.results,
		},
	});
};
