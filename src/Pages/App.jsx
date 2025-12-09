import { Link } from "react-router";

import { Button } from "../components/Button";
import { LivreItem } from "../components/LivreItem";
import { useAPI } from "../hooks/useAPI";

function App() {
	const { data, loading, error, fetchData } = useAPI("/livres");

	if (loading) return <h2>LOADING...</h2>;
	if (error) return <h2>Erreur: {error.message}</h2>;

	const livres = data.livres || [];

	return (
		<>
			<h1>Bibliotheque</h1>
			{!loading ? (
				<>
					<ul>
						{livres.map((livre) => (
							<LivreItem
								key={livre.ISBN}
								name={livre.titre}
								isbn={livre.ISBN}
							/>
						))}
					</ul>
					<Button onClick={fetchData}>Recharger</Button>
					<Link to="/auteurs">Page des auteurs</Link>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
}

export default App;
