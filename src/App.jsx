import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function App({ children }) {
	const [scrollY, setScrollY] = useState(0);
	const contactFormRef = useRef(null);
	useEffect(() => {
		function handleScroll() {
			setScrollY(window.scrollY);
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleContactClick = () => {
		if (contactFormRef.current) {
			contactFormRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<>
			<NavBar scrollY={scrollY} handleContactClick={handleContactClick} />
			{children}
			<ContactUs ref={contactFormRef} />
			<Footer />
			<ToastContainer />
			<button
				onClick={scrollToTop}
				id="myBtn"
				title="Go to top"
				style={{ display: scrollY >= 100 ? "flex" : "none" }}
			/>
		</>
	);
}
