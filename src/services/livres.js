export const getLivres = async () => {
	const response = await fetch(
		"https://formationnodebiblio-production.up.railway.app/livres",
	);
	if (!response.ok) throw Error("error");
	return await response.json();
};
