export const getLivresDetails = async (isbn) => {
	try {
		const response = await fetch(
			`https://formationnodebiblio-production.up.railway.app/livres/${isbn}`,
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
