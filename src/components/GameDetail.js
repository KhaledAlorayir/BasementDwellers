import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import ResizeImage from "../util/Resizeimg";
import logo from "../img/logo.svg";

import {
	GetPlatformIcon,
	getStars,
	getColorforMetascore,
} from "../util/getIcon";

const GameDetail = ({ pathid }) => {
	const { details, screenshots, isLoading } = useSelector(
		(state) => state.gameDetails
	);

	const history = useHistory();

	const ExitDetailHandler = (e) => {
		const { target } = e;

		if (target.classList.contains("exit")) {
			history.push("/");
			document.body.style.overflow = "auto";
		}
	};

	const ScoreColor = getColorforMetascore(details.metacritic);

	return (
		<>
			{!isLoading && (
				<Cardshadow className="exit" onClick={ExitDetailHandler}>
					<StyledDetails layoutId={pathid}>
						<MobileHeader>
							<h1 onClick={() => history.push("/")}>Basement Dwellers</h1>
							<img onClick={() => history.push("/")} src={logo} alt="logo" />
						</MobileHeader>

						<GameInfo>
							<div className="rating">
								<motion.h3 layoutId={`title ${pathid}`}>
									{details.name}
								</motion.h3>
								<p>Rating : {details.rating} </p>
								{getStars(details.rating)}
							</div>

							<Platforms>
								{details.parent_platforms.map((p) => (
									<img
										src={GetPlatformIcon(p.platform.name)}
										alt={p.platform.name}
										key={p.platform.id}
									/>
								))}
							</Platforms>
						</GameInfo>

						<Media>
							<motion.img
								src={ResizeImage(details.background_image, 1280)}
								alt="background_image"
								layoutId={`image ${pathid}`}
							/>
						</Media>

						<MoreInfo>
							<div className="Creators fitem">
								<div className="devs">
									<h3>Developer :</h3>

									{details.developers.map((d) => (
										<p key={d.id}>{d.name}</p>
									))}
								</div>
								<div className="publishers">
									<h3>Publisher :</h3>
									{details.publishers.map((p) => (
										<p key={p.id}>{p.name}</p>
									))}
								</div>
							</div>

							<div className="genres fitem">
								<div className="generes_list">
									<h3>Genres :</h3>
									{details.genres.map((g) => (
										<p key={g.id}>{g.name}</p>
									))}
								</div>

								{details.metacritic && (
									<div className="metacritic">
										<a
											href={details.metacritic_url}
											target="_blank"
											rel="noreferrer"
										>
											<h3>Metacritic :</h3>
										</a>
										<p style={{ backgroundColor: ScoreColor }}>
											{details.metacritic}
										</p>
									</div>
								)}
							</div>
						</MoreInfo>

						<Description>
							<p>{details.description_raw}</p>
						</Description>

						<Gallery>
							{screenshots.map((shot) => (
								<img
									src={ResizeImage(shot.image, 1280)}
									alt="screenshot"
									key={shot.id}
								/>
							))}
						</Gallery>
					</StyledDetails>
				</Cardshadow>
			)}
		</>
	);
};

const Cardshadow = styled(motion.div)`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}

	@media (max-width: 768px) {
		margin-bottom: 2rem;
	}
`;

const StyledDetails = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	img {
		width: 100%;
	}
	@media (max-width: 768px) {
		padding: 2rem 1rem;
		width: 100%;
		left: 0;
	}
`;

const GameInfo = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.rating {
		img {
			display: inline;
			height: 1.5rem;
			width: 1.5rem;
		}
		h3 {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
	@media (max-width: 768px) {
		margin-top: 2rem;
		img {
			width: 2rem;
			height: 2rem;
			margin-left: 0;
		}
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;
	@media (max-width: 768px) {
		p {
			font-size: 0.7rem;
			color: black;
		}
	}
`;

const Gallery = styled(motion.div)`
	img {
		margin-bottom: 1rem;
	}
`;

const MoreInfo = styled(motion.div)`
	margin-top: 5rem;
	display: flex;
	justify-content: space-around;
	h3 {
		margin-right: 1rem;
	}
	.metacritic {
		text-align: center;
		display: flex;
		p {
			color: white;
			padding: 0.2rem 0rem;
			width: 3.5rem;
			margin: auto;
			border-radius: 0.5rem;
		}
	}

	.fitem {
	}

	@media (max-width: 768px) {
		display: block;

		.metacritic {
			display: block;
		}

		.generes_list {
			p {
				display: inline-block;
				margin-left: 0.5rem;
			}
		}
	}
`;

const MobileHeader = styled(motion.div)`
	display: none;

	@media (max-width: 768px) {
		display: block;
		margin-bottom: 3rem;
		h1 {
			padding-right: 0.1rem;
			font-size: 1.4rem;
			display: inline;
			cursor: pointer;
		}

		img {
			display: inline;
			width: 1rem;
			height: 1rem;
			cursor: pointer;
		}
	}
`;

export default GameDetail;
