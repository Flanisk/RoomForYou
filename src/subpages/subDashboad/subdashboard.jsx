import "./subdashboard.css";

import ApexChart from "../../assets/charts/pizza/graficopizza";
import ApexChartReservasMensais from "../../assets/charts/reservasmensais/reservasmensais";
import ApexChartDiasDemanda from "../../assets/charts/diasDemandas/diasdemandas";

function Subdash() {
    return (
        <div className="box">

            <h1>Dashboard</h1>

            <div className="row g-4">

                {/* CARDS DOS QUARTOS */}

                <div className="col-md-3">
                    <div className="total">
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="disponivel">
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="ocupado">
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="manutencao">
                    </div>
                </div>


                {/* GRÁFICO DE PIZZA */}

                <div className="col-md-4">
                    <div className="pizza">
                        <ApexChart />
                    </div>
                </div>


                <div className="col-md-8">
                    <div className="pizza">
                        <ApexChartDiasDemanda/>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="pizza">
                        <ApexChartReservasMensais />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Subdash;