import { AuteurItem } from "../components/AuteurItem";
import { useAPI } from "../hooks/useAPI";

export const PageAuteur = () => {
	const { data, loading, error } = useAPI("/auteurs");

	if (loading) return <h2>LOADING...</h2>;
	if (error) return <h2>Erreur: {error.message}</h2>;

	const auteurs = data.auteurs || [];

	return (
		<div>
			<ul>
				{auteurs.map((auteur) => (
					<AuteurItem
						key={auteur.idauteur}
						nom={auteur.nom}
						prenom={auteur.prenom}
						datenaissance={auteur.datenaissance}
					/>
				))}
			</ul>
		</div>
	);
};
