import { useRef, useState } from "react";

import { useAPI } from "../hooks/useAPI";

export const PageAjoutLivre = () => {
	const formRef = useRef();

	const [isbn, setIsbn] = useState("");
	const [titre, setTitre] = useState("");
	const [idgenre, setIdgenre] = useState("");

	const { data: genres, loading, error } = useAPI("/genres");

	const isValid = isbn !== "" && titre !== "" && idgenre !== "";

	const SubmitLivre = async (formEvent) => {
		formEvent.preventDefault();
		if (!isValid) return;

		try {
			const res = await fetch(
				"https://formationnodebiblio-production.up.railway.app//livres/ajout",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						isbn,
						titre,
						idgenre,
						resumer: "Résumé en attente",
						anneesortie: 2024,
						idediteur: 1,
						nom: "Auteur",
						prenom: "Inconnu",
						datenaissance: "1900-01-01",
						datemort: null,
					}),
				},
			);

			if (res.ok) {
				alert("Livre ajouté !!!!!!");
				formRef.current.reset();
				setIsbn("");
				setTitre("");
				setIdgenre("");
			} else {
				alert("Erreur");
			}
		} catch (err) {
			alert("Erreur", err);
		}
	};

	if (error) return "Erreur API";
	if (loading) return "Chargement...";

	return (
		<form
			ref={formRef}
			onSubmit={SubmitLivre}
			className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4"
		>
			<h2 className="text-xl font-semibold text-gray-800 text-center">
				Ajouter un livre
			</h2>

			<div className="flex flex-col gap-1">
				<label className="text-sm text-gray-600" htmlFor="isbn">
					ISBN
				</label>
				<input
					type="text"
					name="isbn"
					value={isbn}
					onChange={(e) => setIsbn(e.target.value)}
					className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isbn ? "border-red-500" : ""}`}
				/>
				{!isbn && <span className="text-red-500 text-sm">Requis</span>}
			</div>

			<div className="flex flex-col gap-1">
				<label className="text-sm text-gray-600" htmlFor="titre">
					Titre
				</label>
				<input
					type="text"
					name="titre"
					value={titre}
					onChange={(e) => setTitre(e.target.value)}
					className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!titre ? "border-red-500" : ""}`}
				/>
				{!titre && <span className="text-red-500 text-sm">Requis</span>}
			</div>

			<div className="flex flex-col gap-1">
				<label className="text-sm text-gray-600" htmlFor="idgenre">
					ID Genre
				</label>
				<select
					name="idgenre"
					value={idgenre}
					onChange={(e) => setIdgenre(e.target.value)}
					className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!idgenre ? "border-red-500" : ""}`}
				>
					<option value="">Sélectionnez un genre</option>
					{genres?.genres?.map((genre) => (
						<option key={genre.idgenre} value={genre.idgenre}>
							{genre.libelle}
						</option>
					))}
				</select>
				{!idgenre && <span className="text-red-500 text-sm">Requis</span>}
			</div>

			<button
				type="submit"
				disabled={!isValid}
				className={`w-full py-2 rounded text-white transition ${isValid ? "bg-blue-600 hover:bg-blue-500" : "bg-gray-400 cursor-not-allowed"}`}
			>
				Ajouter
			</button>
		</form>
	);
};
