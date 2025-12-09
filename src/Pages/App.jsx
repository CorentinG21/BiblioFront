import { Link } from "react-router";

import { LivreItem } from "../components/LivreItem";
import { useAPI } from "../hooks/useAPI";

function App() {
	const { data, loading, error, fetchData } = useAPI("/livres");

	if (loading) return <h2>LOADING...</h2>;
	if (error) return <h2>Erreur: {error.message}</h2>;

	const livres = data.livres || [];

	return (
		<>
			<Link to="/livres/ajout">Ajouter un Livre</Link>

			{!loading ? (
				<>
					<ul>
						{livres.map((livre) => (
							<LivreItem
								key={livre.ISBN}
								name={livre.titre}
								isbn={livre.ISBN}
								onDelete={fetchData}
							/>
						))}
					</ul>
					{/* <Button onClick={fetchData}>Recharger</Button> */}
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
}

export default App;
