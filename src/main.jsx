import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { AppLayout } from "./AppLayout.jsx";
import { Page404 } from "./Page404.jsx";
import App from "./Pages/App.jsx";
import { PageAuteur } from "./Pages/PageAuteur.jsx";
import { PageDetails } from "./Pages/PageDetails.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "/livres/:isbn",
				element: <PageDetails />,
			},
			{
				path: "/auteurs",
				element: <PageAuteur />,
			},
		],
		errorElement: <Page404 />,
	},
]);

createRoot(root).render(<RouterProvider router={router} />);
