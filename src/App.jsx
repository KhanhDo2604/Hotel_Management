import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./comps/Layout";
import { routes, hiddenRoutes } from "./routes";
import {Login} from "./pages"

const { ipcRenderer } = require("electron");

function App() {
    // const role = ipcRenderer.sendSync("get-role");
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
				{
					hiddenRoutes.map((value, index) => (
						<Route
							key={index}
							path={value.path}
							element={<Layout><value.page /></Layout>}
						/>
					))
				}
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>

	)
}

export default App
