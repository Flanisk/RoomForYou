import ReactApexChart from "react-apexcharts";
import "./diasdemandas.css";

const ApexChartDiasDemanda = () => {

    const series = [
        {
            name: "Demanda",
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2],
        },
    ];

    const options = {
        chart: {
            height: 350,
            type: "bar",
        },

        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: "top",
                },
            },
        },

        dataLabels: {
            enabled: true,

            formatter: function (val) {
                return val + "%";
            },

            offsetY: -20,

            style: {
                fontSize: "12px",
                colors: ["#304758"],
            },
        },

        xaxis: {
            categories: [
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado",
            ],

            position: "top",

            axisBorder: {
                show: false,
            },

            axisTicks: {
                show: false,
            },

            tooltip: {
                enabled: true,
            },
        },

        yaxis: {
            axisBorder: {
                show: false,
            },

            axisTicks: {
                show: false,
            },

            labels: {
                show: false,

                formatter: function (val) {
                    return val + "%";
                },
            },
        },

        title: {
            text: "Demanda por dia da semana",
            floating: true,
            offsetY: 330,
            align: "center",

            style: {
                color: "#444",
            },
        },
    };

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default ApexChartDiasDemanda;