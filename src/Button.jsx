export const Button = ({ onClick, children }) => (
	<div>
		<button type="button" onClick={() => onClick()}>
			{children}
		</button>
	</div>
);
