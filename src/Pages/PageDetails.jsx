import { Link, useParams } from "react-router";

import { useAPI } from "../hooks/useAPI";

export const PageDetails = () => {
	const { isbn } = useParams();
	const { data, loading, error } = useAPI(`/livres/${isbn}`);
	const livre = data?.livre;

	if (loading) return <h2 className="text-center mt-10 text-lg">LOADING...</h2>;
	if (error)
		return <h2 className="text-center mt-10 text-red-600">{error.message}</h2>;
	if (!livre)
		return <h1 className="text-center mt-10 text-xl">Pas de Livre</h1>;

	return (
		<div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-100 dark:bg-gray-400 rounded-lg shadow">
			<h1 className="text-2xl font-bold mb-4">{livre.titre}</h1>

			<p className="mb-2">
				<strong>ISBN :</strong> {livre.ISBN}
			</p>
			<p className="mb-2">
				<strong>Auteur :</strong> {livre.nomAuteur} {livre.prenomAuteur}
			</p>
			<p className="mb-2">
				<strong>Résumé :</strong> {livre.resumer}
			</p>
			<p className="mb-2">
				<strong>Genre :</strong> {livre.nomgenre}
			</p>
			<p className="mb-2">
				<strong>Éditeur :</strong> {livre.nomEditeur}
			</p>
			<p className="mb-4">
				<strong>Année :</strong> {livre.anneeSortie}
			</p>

			<Link
				to="/"
				className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
			>
				Retour à la liste
			</Link>
		</div>
	);
};
