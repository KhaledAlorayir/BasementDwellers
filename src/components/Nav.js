//react and redux
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FetchSearch } from "../Actions/GamesAction";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { Fade } from "../util/Animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
	const [UserInput, setUserInput] = useState("");
	const dispatch = useDispatch();

	const InputHandler = (e) => {
		setUserInput(e.target.value);
	};

	const SubmitHandler = (e) => {
		e.preventDefault();
		if (UserInput.trim() !== "") {
			dispatch(FetchSearch(UserInput));
			setUserInput("");
		}
	};

	const ClearSearchedHandler = () => {
		dispatch({ type: "CLEAR_SEARCH" });
	};

	return (
		<StyledNav variants={Fade} initial="start" animate="animate">
			<StyledLogo>
				<h1 onClick={ClearSearchedHandler}>Basement Dwellers</h1>
				<img onClick={ClearSearchedHandler} src={logo} alt="logo" />
			</StyledLogo>
			<StyledForm>
				<input
					type="text"
					value={UserInput}
					onChange={InputHandler}
					placeholder="Search Games!"
				/>
				<button onClick={SubmitHandler}>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</StyledForm>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	margin-bottom: 1rem;
	text-align: center;

	/* @media (max-width: 768px) {} */

	@media (max-width: 768px) {
		padding: 3rem 1rem;
	}
`;

const StyledLogo = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 3rem;
	h1 {
		padding-right: 0.5rem;
		font-size: 1.9rem;
		cursor: pointer;
		@media (max-width: 768px) {
			padding-right: 0.1rem;
			font-size: 1.4rem;
			display: inline;
		}
	}
	img {
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		@media (max-width: 768px) {
			display: inline;
			width: 1rem;
			height: 1rem;
		}
	}
	@media (max-width: 768px) {
		display: block;
	}
`;

const StyledForm = styled(motion.form)`
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
		border: none;
		margin-top: 1rem;
		font-weight: bold;
		font-family: "Montserrat", sans-serif;
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
		outline: none;
		transition: all 0.3s ease;

		&:focus {
			box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
		}

		@media (max-width: 768px) {
			width: 80%;
			font-size: 1rem;
			border: 0.5px solid black;
		}
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
		font-weight: bold;

		@media (max-width: 768px) {
			font-size: 1rem;
			padding: 0.5rem 1rem;
			border: 0.5px solid black;
		}
	}
`;

export default Nav;
