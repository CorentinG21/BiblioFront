import { Link } from "react-router";

export const LivreItem = ({ name, isbn }) => {
	return (
		<li className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3 shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
			<Link
				to={`livres/${isbn}`}
				className="text-gray-900 dark:text-white font-medium hover:underline"
			>
				{name} | {isbn}
			</Link>
		</li>
	);
};
