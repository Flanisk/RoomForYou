import ReactApexChart from "react-apexcharts";
import "./graficoColuna.css";

const GraficoColuna = () => {

    const series = [
        {
            name: "Visitors",
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
    ];

    const options = {
        chart: {
            type: "bar",
            height: 350,
        },

        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: "end",
                horizontal: true,
            },
        },

        dataLabels: {
            enabled: false,
        },

        title: {
            text: "Monthly Visitors by Country",
            align: "left",
        },

        xaxis: {
            categories: [
                "South Korea",
                "Canada",
                "United Kingdom",
                "Netherlands",
                "Italy",
                "France",
                "Japan",
                "United States",
                "China",
                "Germany",
            ],
        },
    };

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
        />
    );
};

export default GraficoColuna;