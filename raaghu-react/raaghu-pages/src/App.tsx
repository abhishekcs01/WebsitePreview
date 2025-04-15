import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppShellDisplayType } from "../../raaghu-layouts/src/rds-comp-app-shell/rds-comp-app-shell";

export * from "../../raaghu-elements/src/index";
export * from "../../raaghu-components/src/index";
export * from "../../raaghu-layouts/src/index";

import "../../raaghu-react-themes/build/styles/default.css";
import SideNavigationPanel from "./SideNavigationPanel";
import TopNavigation from "./TopNavigation";
import DashboardPage from "./DashboardPage";

const App = () => {
    return (
        <div className={"theme-light"}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <RdsCompAppShell
                                displayType={AppShellDisplayType.Default}
                                sidebar={<SideNavigationPanel />}
                                topbar={<TopNavigation />}
                                displayNode={<DashboardPage />}
                            />
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <RdsCompAppShell
                                displayType={AppShellDisplayType.Default}
                                sidebar={<SideNavigationPanel />}
                                topbar={<TopNavigation />}
                                displayNode={<DashboardPage />}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
