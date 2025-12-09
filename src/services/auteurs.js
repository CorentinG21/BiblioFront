export const getAuteurs = async () => {
	const response = await fetch(
		"https://formationnodebiblio-production.up.railway.app//auteurs",
	);
	if (!response.ok) throw Error("error");
	return await response.json();
};
