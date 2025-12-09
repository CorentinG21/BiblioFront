export const getAuteurs = async () => {
	const response = await fetch("http://localhost:3000/auteurs");
	if (!response.ok) throw Error("error");
	return await response.json();
};
