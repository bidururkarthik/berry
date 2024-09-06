// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';



// ==============================|| UTILITIES MENU ITEMS ||============================== //

const Expense = {
  id: 'expense',
  title: 'Expense',
  type: 'group',
  children: [
    {
      id: 'addexpense',
      title: 'AddExpense',
      type: 'item',
      url: '/addexpense/addexpense-typography',
      icon: AccountBalanceWalletOutlinedIcon,
      breadcrumbs: false
    },
    {
        id: 'overallexpense',
        title: 'OverallExpense',
        type: 'item',
        url: '/overallexpense/overallexpense-typography',
        icon: AddCardOutlinedIcon,
        breadcrumbs: false
      },
      {
        id: 'totalexpense',
        title: 'Total',
        type: 'item',
        url: '/total/total-typography',
        icon: LocalAtmOutlinedIcon,
        breadcrumbs: false
      }
 
  ]
};

export default Expense;