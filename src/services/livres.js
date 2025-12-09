export const getLivres = async () => {
	const response = await fetch("http://localhost:3000/livres");
	if (!response.ok) throw Error("error");
	return await response.json();
};
