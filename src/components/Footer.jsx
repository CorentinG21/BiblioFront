export const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-6 mt-10">
			<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
				<p className="text-sm mb-4 md:mb-0">
					&copy; {new Date().getFullYear()} Ma Bibliothèque. Tous droits
					réservés.
				</p>
			</div>
		</footer>
	);
};
