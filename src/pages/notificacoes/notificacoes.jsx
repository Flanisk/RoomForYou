import Sidebar from "../../assets/sidbar/siebar";
import TopSite from "../../assets/topSite/topsite";
import Subnotificacoes from "../../subpages/subNotificacoes/subnotificacoes";

function Notificacoes() {
    return (
        <div className="layout">
            <Sidebar />
            <main>
                <TopSite />
                <Subnotificacoes />
            </main>
        </div>
    );
}

export default Notificacoes;
