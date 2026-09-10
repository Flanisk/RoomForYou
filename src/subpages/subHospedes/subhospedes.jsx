import "../subDashboad/subdashboard.css";
import "./subhospedes.css";

function Subhospedes() {
    return (
        <div className="box subhospedes">
            <h1>Hóspedes</h1>
            <div className="row g-4">
                <div className="col-md-4"><div className="total"></div></div>
                <div className="col-md-8"><div className="pizza"></div></div>
                <div className="col-md-12"><div className="pizza"></div></div>
            </div>
        </div>
    );
}

export default Subhospedes;
