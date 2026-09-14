import ReactApexChart from "react-apexcharts";
import "./zoommable.css";

const Zoommable = () => {

    const dates = [];
    let timestamp = new Date("14 Jan 2025").getTime();

    const valores = [
        1200000, 1250000, 1180000, 1300000, 1350000,
        1280000, 1400000, 1450000, 1500000, 1480000,
        1550000, 1600000, 1580000, 1650000, 1700000
    ];

    for (let i = 0; i < 15; i++) {

        timestamp += 86400000;

        dates.push([
            timestamp,
            valores[i]
        ]);
    }

    const series = [
        {
            name: "Receita",
            data: dates,
        },
    ];

    const options = {

        chart: {
            type: "area",
            stacked: false,
            height: 350,

            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true,
            },

            toolbar: {
                autoSelected: "zoom",
            },
        },

        dataLabels: {
            enabled: false,
        },

        markers: {
            size: 0,
        },

        title: {
            text: "Receita ao longo do tempo",
            align: "left",
        },

        fill: {
            type: "gradient",

            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },

        yaxis: {
            labels: {
                formatter: function (val) {
                    return "R$ " + (val / 1000000).toFixed(1) + " mi";
                },
            },

            title: {
                text: "Receita",
            },
        },

        xaxis: {
            type: "datetime",
        },

        tooltip: {
            shared: false,

            y: {
                formatter: function (val) {
                    return "R$ " + val.toLocaleString("pt-BR");
                },
            },
        },
    };

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={350}
            />
        </div>
    );
};

export default Zoommable;