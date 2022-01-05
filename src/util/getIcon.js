import ps from "../img/playstation.svg";
import apple from "../img/apple.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import other from "../img/gamepad.svg";
import fullstar from "../img/star-full.png";
import emptystar from "../img/star-empty.png";

export const GetPlatformIcon = (platform) => {
	switch (platform) {
		case "PlayStation 4":
		case "PlayStation 5":
		case "PlayStation":
			return ps;

		case "Xbox One":
		case "Xbox":
		case "Xbox Series S/X":
			return xbox;

		case "PC":
			return steam;

		case "Nintendo Switch":
		case "Nintendo":
			return nintendo;

		case "macOS":
			return apple;

		default:
			return other;
	}
};

export const getStars = (rating) => {
	const Floored = Math.floor(rating);
	const stars = [];

	for (let i = 1; i <= 5; i++) {
		if (i <= Floored) {
			stars.push(<img src={fullstar} key={i} alt="star" />);
		} else {
			stars.push(<img src={emptystar} key={i} alt="star" />);
		}
	}

	return stars;
};

export const getColorforMetascore = (score) => {
	if (score < 50) return "#FF0000";
	if (score >= 50 && score < 75) return "#FFCC33";
	else return "#66CC33";
};
