const alerte = () => {
	return alert("Test");
};

export const Button = ({ onClick, children }) => (
	<div>
		<button type="button" onClick={() => onClick(alerte)}>
			{children}
		</button>
	</div>
);
