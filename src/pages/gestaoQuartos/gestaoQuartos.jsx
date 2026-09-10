import Sidebar from "../../assets/sidbar/siebar";
import "./gestaoQuartos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopSite from "../../assets/topSite/topsite";
import SubgestaoQuartos from "../../subpages/subGestaoQuartos/subgestaoQuartos";

function GestaoQuartos() {
    return (
        <div className="layout">

            <Sidebar />

            <main>
                <TopSite />

                <SubgestaoQuartos />

            </main>

        </div>
    );
}

export default GestaoQuartos;