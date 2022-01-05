import React from "react";
import { useDispatch } from "react-redux";
import { GetDetails } from "../Actions/DetailsAction";
import { Link } from "react-router-dom";

//Styles and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import ResizeImage from "../util/Resizeimg";
import { Popin } from "../util/Animations";

const Game = ({ name, released, background_image, id }) => {
	const stringPathId = id.toString();
	const dispatch = useDispatch();

	const FetchGameHandler = () => {
		dispatch(GetDetails(id));
		document.body.style.overflow = "hidden";
	};

	return (
		<StyledGame
			variants={Popin}
			initial="start"
			animate="animate"
			layoutId={stringPathId}
			onClick={FetchGameHandler}
		>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={ResizeImage(background_image, 640)}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
	@media (max-width: 768px) {
		h3 {
			font-size: 1rem;
			padding: 1rem 1rem;
		}
		p {
			font-size: 0.9rem;
		}
	}
`;

export default Game;
