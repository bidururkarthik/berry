// assets
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';


// ==============================|| UTILITIES MENU ITEMS ||============================== //

const Admin = {
  id: 'admin',
  title: 'Admin',
  type: 'group',
  children: [
    {
      id: 'admin',
      title: 'Admin',
      type: 'item',
      url: '/admin/admin-typography',
      icon: AdminPanelSettingsOutlinedIcon,
      breadcrumbs: false
    },
    {
      id: 'superadmin',
      title: 'SuperAdmin',
      type: 'item',
      url: '/superadmin/superadmin-typography',
      icon: SupervisorAccountOutlinedIcon,
      breadcrumbs: false
    },
  ]
};

export default Admin;
