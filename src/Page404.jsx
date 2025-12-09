import { Link } from "react-router";

export const Page404 = () => {
	return (
		<div>
			<h1>ERREUR 404 | Page inconnue</h1>
			<Link to="/">Retour à l'accueil</Link>
		</div>
	);
};
