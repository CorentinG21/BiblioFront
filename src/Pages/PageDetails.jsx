import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { getLivresDetails } from "../services/livresDetail";

export const PageDetails = () => {
	const params = useParams();

	const [livre, setLivre] = useState(null);
	const [loading, setLoading] = useState([]);

	const loadLivreDetail = useCallback(async () => {
		try {
			setLoading(true);
			const res = await getLivresDetails(params.isbn);
			setLivre(res.livre);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	}, [params.isbn]);

	useEffect(() => {
		loadLivreDetail();
	}, [loadLivreDetail]);

	if (loading) return <h2>LOADING...</h2>;

	return livre ? (
		<>
			<div>
				<h1>Détails du livre {livre.titre}</h1>

				<p>
					<strong>ISBN :</strong> {livre.ISBN}
				</p>
				<p>
					<strong>Auteur :</strong> {livre.nomAuteur} {livre.prenomAuteur}
				</p>
				<p>
					<strong>Résumé :</strong> {livre.resumer}
				</p>
				<p>
					<strong>Genre :</strong> {livre.nomgenre}
				</p>
				<p>
					<strong>Éditeur :</strong> {livre.nomEditeur}
				</p>
				<p>
					<strong>Année :</strong> {livre.anneeSortie}
				</p>
			</div>

			<Link to="/">Retour a la liste</Link>
		</>
	) : (
		<h1>Erreur</h1>
	);
};
