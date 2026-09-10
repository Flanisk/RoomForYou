import "../subDashboad/subdashboard.css";
import "./subgestaoQuartos.css";

function SubgestaoQuartos() {
    return (
        <div className="box subgestao-quartos">
            <h1>Gestão de quartos</h1>
            <div className="row g-4">
                <div className="col-md-4"><div className="total"></div></div>
                <div className="col-md-4"><div className="disponivel"></div></div>
                <div className="col-md-4"><div className="ocupado"></div></div>
                <div className="col-md-12"><div className="pizza"></div></div>
            </div>
        </div>
    );
}

export default SubgestaoQuartos;
