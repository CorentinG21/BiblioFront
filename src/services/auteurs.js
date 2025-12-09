export const getAuteurs = async () => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/auteurs`);
	if (!response.ok) throw Error("error");
	return await response.json();
};
