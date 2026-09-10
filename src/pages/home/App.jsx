import "./App.css";

import Sidebar from "../../assets/sidbar/siebar";
import TopSite from "../../assets/topSite/topsite";
import Subdash from "../../subpages/subDashboad/subdashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="layout">

            <Sidebar />

            <main>
                <TopSite />

                <Subdash />
            </main>

        </div>
    );
}

export default App;