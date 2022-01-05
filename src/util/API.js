const API_Key = process.env.REACT_APP_API_KEY;
const base_url = `https://api.rawg.io/api/games?key=${API_Key}`;

const getDay = () => {
	const day = new Date().getDate();

	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

const getMonth = () => {
	const month = new Date().getMonth() + 1;

	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

const Year = new Date().getFullYear();
const CurrDate = `${Year}-${getMonth()}-${getDay()}`;
const LastYearDate = `${Year - 1}-${getMonth()}-${getDay()}`;
const NextYearDate = `${Year + 1}-${getMonth()}-${getDay()}`;

//endpoints
export const PopularGamesURL = () => {
	const pg = `&dates=${LastYearDate},${CurrDate}&page_size=10`;
	return `${base_url}${pg}`;
};

export const UpcomingGamesURL = () => {
	const ug = `&dates=${CurrDate},${NextYearDate}&ordering=-added&page_size=10`;
	return `${base_url}${ug}`;
};

export const NewGamesURL = () => {
	const ng = `&dates=${LastYearDate},${CurrDate}&ordering=-released&page_size=10`;
	return `${base_url}${ng}`;
};

export const GameDetailURL = (GameID) => {
	return `https://api.rawg.io/api/games/${GameID}?key=${API_Key}`;
};
export const GameScreenshotsURL = (GameID) => {
	return `https://api.rawg.io/api/games/${GameID}/screenshots?key=${API_Key}`;
};

export const SearchGamesURL = (GameName) => {
	return `${base_url}&search=${GameName}&page_size=12`;
};

//
