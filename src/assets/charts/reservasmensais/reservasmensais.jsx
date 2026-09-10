import ReactApexChart from "react-apexcharts";
import "./reservasmensais.css";

const ApexChartReservasMensais = () => {
  const series = [
    {
      name: "Reservas",
      data: [
        210, 380, 340, 520, 480, 610,
        700, 880, 820, 1040, 1180, 1520
      ],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "straight",
    },

    title: {
      text: "Reservas Mensais",
      align: "left",
    },

    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexChartReservasMensais;