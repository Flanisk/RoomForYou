import Sidebar from "../../assets/sidbar/siebar";
import TopSite from "../../assets/topSite/topsite";
import Subcalendario from "../../subpages/subCalendario/subcalendario";

function Calendario() {
    return (
        <div className="layout">
            <Sidebar />
            <main>
                <TopSite />
                <Subcalendario />
            </main>
        </div>
    );
}

export default Calendario;
