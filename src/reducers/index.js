import { combineReducers } from "redux";
import GamesReducer from "./GamesReducer";
import DetailsReducer from "./DetailsReducer";

const RootReducer = combineReducers({
	games: GamesReducer,
	gameDetails: DetailsReducer,
});

export default RootReducer;
