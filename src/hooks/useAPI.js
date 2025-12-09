import { useCallback, useEffect, useState } from "react";

export const useAPI = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`http://localhost:3000${url}`);
			if (!response.ok) throw new Error("Erreur API");
			const json = await response.json();
			setData(json);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, loading, error, fetchData };
};
