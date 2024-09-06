import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import Admin from './Admin';
import Student from './Student';
import Expense from './expense';
import LookUp from './lookups';
import EventTracker from './eventtracker';
import Telecaller from './telecaller';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard,Admin,Student,Expense,LookUp,EventTracker,Telecaller, pages, other]
};

export default menuItems;
