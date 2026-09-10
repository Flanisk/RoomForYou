import Sidebar from "../../assets/sidbar/siebar";
import TopSite from "../../assets/topSite/topsite";
import Subconfiguracoes from "../../subpages/subConfiguracoes/subconfiguracoes";

function Configuracoes() {
    return (
        <div className="layout">
            <Sidebar />
            <main>
                <TopSite />
                <Subconfiguracoes />
            </main>
        </div>
    );
}

export default Configuracoes;
