import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function GainChart({ capacity, occupation }) {
  const cap = parseFloat(capacity)
  const occ = parseFloat(occupation)
  const rate = (occ / cap) * 100

  const setOccupationColor = () => {
    if (rate >= 75) {
      return 'rgb(224, 36, 36)'
    }

    if (rate >= 50) {
      return 'rgb(255, 138, 76)'
    }

    return 'rgb(118, 169, 250)'
  }

  const data = {
    labels: ['Occupé', 'Libre'],
    datasets: [
      {
        label: 'Nombre de véhicule',
        data: [
          parseFloat(occupation),
          parseFloat(capacity) - parseFloat(occupation),
        ],
        backgroundColor: [`${setOccupationColor()}`, '#ffffff'],
        borderColor: [`${setOccupationColor()}`, '#f2f2f2'],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  }

  return <Doughnut data={data} options={options} />
}

export { GainChart }
