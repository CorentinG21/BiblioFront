import { Link } from "react-router";

export const LivreItem = ({ name, isbn }) => {
	return (
		<li>
			<Link to={`livres/${isbn}`}>
				{name} | {isbn}
			</Link>
		</li>
	);
};
