import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadGames } from "../Actions/GamesAction";
import { useLocation } from "react-router-dom";

//Styles and Animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Fade } from "../util/Animations";

//compoenets
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(LoadGames());
	}, [dispatch]);

	const { popular, upcoming, searched } = useSelector((store) => store.games);

	const Loc = useLocation().pathname;
	const GameID = Loc.split("/")[2];

	//return scroll when exit on prev
	useEffect(() => {
		if (Loc === "/") {
			document.body.style.overflow = "auto";
		}
	}, [Loc]);

	return (
		<GamesList variants={Fade} initial="start" animate="animate">
			<AnimateSharedLayout type="crossfade">
				{/* Game Card */}
				<AnimatePresence>
					{GameID && <GameDetail pathid={GameID} />}
				</AnimatePresence>
				{/*  */}

				{/* Searched */}
				{searched.length > 0 ? (
					<div>
						<h2>Searched Games</h2>
						<Games>
							{searched.map((G) => (
								<Game
									name={G.name}
									released={G.released}
									background_image={G.background_image}
									id={G.id}
									key={G.id}
								/>
							))}
						</Games>
					</div>
				) : (
					<div>
						<h2>Popular Games</h2>
						<Games>
							{popular.map((G) => (
								<Game
									name={G.name}
									released={G.released}
									background_image={G.background_image}
									id={G.id}
									key={G.id}
								/>
							))}
						</Games>

						<h2>Upcoming Games</h2>
						<Games>
							{upcoming.map((G) => (
								<Game
									name={G.name}
									released={G.released}
									background_image={G.background_image}
									id={G.id}
									key={G.id}
								/>
							))}
						</Games>

						{/* <h2>New Games</h2>
						<Games>
							{newGames.map((G) => (
								<Game
									name={G.name}
									released={G.released}
									background_image={G.background_image}
									id={G.id}
									key={G.id}
								/>
							))}
						</Games> */}
					</div>
				)}
				{/*  */}
			</AnimateSharedLayout>
		</GamesList>
	);
};

const GamesList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}

	@media (max-width: 768px) {
		padding: 0 1rem;
		text-align: center;
		h2 {
			font-size: 1.3rem;
			padding: 3rem 0rem;
		}
	}
`;
const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export default Home;
