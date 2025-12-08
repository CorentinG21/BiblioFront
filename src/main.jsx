import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "./Pages/App.jsx";
import { PageDetails } from "./Pages/PageDetails.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/livres/:isbn",
		element: <PageDetails />,
	},
]);

createRoot(root).render(<RouterProvider router={router} />);
