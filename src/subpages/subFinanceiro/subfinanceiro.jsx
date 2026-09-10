import "../subDashboad/subdashboard.css";
import "./subfinanceiro.css";

function Subfinanceiro() {
    return (
        <div className="box subfinanceiro">
            <h1>Financeiro</h1>
            <div className="row g-4">
                <div className="col-md-4"><div className="pizza"></div></div>
                <div className="col-md-4"><div className="pizza"></div></div>
                <div className="col-md-4"><div className="pizza"></div></div>
                <div className="col-md-12"><div className="pizza"></div></div>
            </div>
        </div>
    );
}

export default Subfinanceiro;
