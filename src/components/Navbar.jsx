import { NavLink } from "react-router";

export const Navbar = () => {
	return (
		<nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
			<h1 className="text-4xl font-bold">Ma BIBLIOTHEQUE</h1>

			<div className="flex space-x-4 text-xl">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`transition-colors duration-200 ${
							isActive ? "underline" : "hover:text-gray-300"
						}`
					}
				>
					Livres
				</NavLink>

				<NavLink
					to="/auteurs"
					className={({ isActive }) =>
						`transition-colors duration-200 ${
							isActive ? "underline" : "hover:text-gray-300"
						}`
					}
				>
					Auteurs
				</NavLink>
			</div>
		</nav>
	);
};
