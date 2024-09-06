// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PhonePausedOutlinedIcon from '@mui/icons-material/PhonePausedOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const Telecaller = {
  id: 'telecaller',
  title: 'telecaller',
  type: 'group',
  children: [
    {
      id: 'leads',
      title: 'Leads',
      type: 'item',
      url: '/Leads/Leads-typography',
      icon: LeaderboardOutlinedIcon,
      breadcrumbs: false
    },
    {
        id: 'telecallers',
        title: 'Telecallers',
        type: 'item',
        url: '/telecaller/telecaller-typography',
        icon: PhonePausedOutlinedIcon,
        breadcrumbs: false
      },
      {
        id: 'assign',
        title: 'Assign WorkFlow',
        type: 'item',
        url: '/asignworkflow/assignworkflow-typography',
        icon: AssignmentIndOutlinedIcon,
        breadcrumbs: false
      }
 
  ]
};

export default Telecaller;