export const Button = ({ onClick, children }) => (
	<button
		type="button"
		onClick={onClick}
		className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-200"
	>
		{children}
	</button>
);
