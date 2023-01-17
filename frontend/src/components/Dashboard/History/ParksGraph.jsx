import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function ParksGraph({ rates }) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  }

  const labels = ['Janvier', 'Février', 'Mars']

  const data = {
    labels,
    datasets: [
      {
        label: 'Véhicules',
        data: [rates.january, rates.february, rates.march],
        backgroundColor: 'rgb(118, 169, 250)',
        borderRadius: 15,
      },
    ],
  }

  return <Bar options={options} data={data} />
}

export { ParksGraph }
