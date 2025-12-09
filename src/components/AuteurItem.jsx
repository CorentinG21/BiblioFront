import dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

export const AuteurItem = ({ nom, prenom, datenaissance }) => {
	return (
		<li className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3 shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
			<span className="font-medium text-gray-900 dark:text-white">
				{prenom} {nom}
			</span>
			{datenaissance && (
				<span className="text-gray-600 dark:text-gray-300 ml-2">
					- né le {dayjs(datenaissance).format("D MMMM YYYY")}
				</span>
			)}
		</li>
	);
};
