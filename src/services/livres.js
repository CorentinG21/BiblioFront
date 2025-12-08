export const waitFor = () =>
	new Promise((resolve) => {
		setTimeout(() => resolve(), 2000);
	});

export const getLivres = async () => {
	const response = await fetch("http://localhost:3000/livres");
	if (!response.ok) throw Error("error");
	await waitFor();
	return await response.json();
};
