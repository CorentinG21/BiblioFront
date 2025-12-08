import { useCallback, useEffect, useState } from "react";

import { Button } from "./Button";
import { LivreItem } from "./LivreItem";
import { getLivres } from "./services/livres";

function App() {
	const [loading, setloading] = useState([]);
	const [livres, setlivres] = useState([]);

	console.log(livres);

	// useEffect(() => {
	// 	getLivres()
	// 	.then((responce) => {
	// 		setlivres(responce.livres)
	// 	})
	// }, []);

	const loadlivre = useCallback(async () => {
		setloading(true);
		const res = await getLivres();
		setlivres(res.livres);
		setloading(false);
	}, []);

	useEffect(() => {
		loadlivre();
	}, [loadlivre]);

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
					<Button onClick={loadlivre}>Recharger</Button>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
}

export default App;
