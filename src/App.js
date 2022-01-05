import React from "react";
import { Route } from "react-router-dom";

//pages and compoents
import Home from "./pages/Home";
import Nav from "./components/Nav";

//styling and animations
import GlobalStyles from "./util/GloablStyles";

const App = () => {
	return (
		<div className="App">
			<GlobalStyles />
			<Nav />
			<Route path={["/", "/game/:id"]}>
				<Home />
			</Route>
		</div>
	);
};

export default App;
