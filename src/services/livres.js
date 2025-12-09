export const getLivres = async () => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/livres`);
	if (!response.ok) throw Error("error");
	return await response.json();
};
