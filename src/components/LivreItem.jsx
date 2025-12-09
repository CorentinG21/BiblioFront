import { LoaderCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const LivreItem = ({ name, isbn, onDelete }) => {
	const [isDelete, setDeleting] = useState(false);

	const deleteBook = async () => {
		try {
			setDeleting(true);
			const res = await fetch(
				`https://formationnodebiblio-production.up.railway.app/livres/${isbn}/supprimer`,
				{ method: "POST" },
			);

			if (res.ok) {
				alert("Livre Supprimé !!!");
				onDelete(isbn);
				setDeleting(false);
			} else {
				const json = await res.json();
				alert(`Erreur: ${json.error}`);
			}
		} catch (err) {
			alert(`Erreur: ${err.message}`);
		}
	};

	return (
		<li className="flex justify-between items-center py-2 border-b">
			<Link to={`livres/${isbn}`} className="hover:text-gray-600">
				{name} | {isbn}
			</Link>
			<button
				disabled={isDelete}
				type="button"
				onClick={deleteBook}
				className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-500 transition-colors"
			>
				{isDelete ? (
					<LoaderCircle className="size-4 animate-spin" />
				) : (
					<Trash2 className="size-4" />
				)}
				Supprimé
			</button>
		</li>
	);
};
