import { Outlet } from "react-router";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const AppLayout = () => {
	return (
		<>
			<Navbar />
			<div className="m-5 flex-1">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};
