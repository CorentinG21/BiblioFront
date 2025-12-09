import dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

export const AuteurItem = ({ nom, prenom, datenaissance }) => {
	return (
		<li>
			{prenom} {nom}
			{datenaissance && (
				<span> - né le {dayjs(datenaissance).format("D MMMM YYYY")}</span>
			)}
		</li>
	);
};
