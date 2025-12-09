export const getLivresDetails = async (isbn) => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/livres/${isbn}`,
		);
		if (!response.ok) {
			console.log(response);
			throw Error("error");
		}
		return await response.json();
	} catch (responseError) {
		console.log(responseError);
		throw responseError;
	}
};
