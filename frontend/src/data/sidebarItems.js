import {
  IoCarOutline as CarIcon,
  IoListOutline as ListIcon,
  IoAddCircleOutline as AddIcon,
  IoCashOutline as CashIcon,
  IoSettingsOutline as SettingsIcon,
  IoHelpOutline as HelpIcon,
} from 'react-icons/io5'

export default [
  {
    name: 'Parkings',
    to: '/dashboard/parkings',
    Icon: CarIcon,
  },
  {
    name: 'Historique',
    to: '/dashboard/history',
    Icon: ListIcon,
  },
  {
    name: 'Ajouter un parking',
    to: '/dashboard/add-parking',
    Icon: AddIcon,
  },
  {
    name: 'Recette',
    to: '/dashboard/gains',
    Icon: CashIcon,
  },
  {
    name: 'Paramètres',
    to: '/dashboard/settings',
    Icon: SettingsIcon,
  },
  {
    name: "Besoin d'aides ?",
    to: '/dashboard/help',
    Icon: HelpIcon,
  },
]
