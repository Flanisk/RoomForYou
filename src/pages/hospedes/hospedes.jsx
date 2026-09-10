import Sidebar from "../../assets/sidbar/siebar";
import TopSite from "../../assets/topSite/topsite";
import Subhospedes from "../../subpages/subHospedes/subhospedes";

function Hospedes() {
    return (
        <div className="layout">
            <Sidebar />
            <main>
                <TopSite />
                <Subhospedes />
            </main>
        </div>
    );
}

export default Hospedes;
