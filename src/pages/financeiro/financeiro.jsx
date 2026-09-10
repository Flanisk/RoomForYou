import Sidebar from "../../assets/sidbar/siebar";
import "./financeiro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopSite from "../../assets/topSite/topsite";
import Subfinanceiro from "../../subpages/subFinanceiro/subfinanceiro";

function Financeiro() {
    return (
        <div className="layout">

            <Sidebar />

            <main>
                <TopSite />

                <Subfinanceiro />

            </main>

        </div>
    );
}

export default Financeiro;