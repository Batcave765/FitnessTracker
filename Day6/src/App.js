import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import React, { useLayoutEffect } from "react";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Waterintake from "./Components/Waterintake";

function App() {
	useLayoutEffect(() => {
		document.body.style.backgroundColor = "white";
	});
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/waterintake" element={<Waterintake />} />
				<Route path="*" element={<h1>404 Not Found</h1>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
