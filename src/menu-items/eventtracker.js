import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
// constant

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const EventTracker = {
  id: 'eventtracker',
  title: 'EventTracker',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'EventTracker',
      type: 'item',
      url: '/eventrackers/eventrackers-typography',
      icon: FestivalOutlinedIcon,
      breadcrumbs: false
    }
  ]
};

export default EventTracker;
