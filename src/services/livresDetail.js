import { waitFor } from "./livres";

export const getLivresDetails = async (isbn) => {
	try {
		const response = await fetch(`http://localhost:3000/livres/${isbn}`);
		if (!response.ok) {
			console.log(response);
			throw Error("error");
		}
		await waitFor();
		return await response.json();
	} catch (responseError) {
		console.log(responseError);
		throw responseError;
	}
};
