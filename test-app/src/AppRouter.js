import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./router/Menu";
import Home from "./router/Home";
import About from "./router/About";
import NoMatch from "./router/Nomatch";

function AppRouter () {
    return (
        <div>
            <h1>React Router</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<Menu />}>
                        <Route path="" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter;