import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./comps/Layout";
import { routes } from "./routes";

function App() {
	return (
		<Router>
			<Routes>
				{
					routes.map((value, index) => (
						<Route
							key={index}
							path={value.path}
							element={<Layout><value.page /></Layout>}
						/>
					))
				}
			</Routes>
		</Router>
	)
}

export default App
