import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Student from 'views/Student/Student';
import Leads from 'views/Leads/Leads';
import Telecaller from 'views/Telecaller/Telecaller';
import Assign from 'views/Assign/Assign';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const Admin = Loadable(lazy(()=> import('views/Admin/Admin')));
const SuperA = Loadable(lazy(() => import('views/superadmin/SuperAdmin')))
const Tudent = Loadable(lazy(()=> import('views/Student/Student')));
const EditStudent = Loadable(lazy(() => import('views/editstudent/EditStudent')));
const Expensive = Loadable(lazy(() => import('views/expense/Expense')));
const Overall = Loadable(lazy(() => import('views/overallexpense/OverallExpense')));
const Tota = Loadable(lazy(() => import('views/total/Total')));
const Categor = Loadable(lazy(() => import('views/category/Category')));
const SubCate = Loadable(lazy(() => import('views/subcategory/SubCategory')));
const Event = Loadable(lazy(() => import('views/eventtracker/EventTracker')))
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: 'admin-typography',
          element: <Admin />
        }
      ]
    },
    {
      path: 'student',
      children: [
        {
          path: 'student-typography',
          element: <Tudent />
        }
      ]
    },
    {
      path: 'student',
      children: [
        {
          path: 'editstudent-typography',
          element: <EditStudent />
        }
      ]
    },
    {
      path: 'superadmin',
      children: [
        {
          path: 'superadmin-typography',
          element: <SuperA />
        }
      ]
    },
    {
      path: 'addexpense',
      children: [
        {
          path: 'addexpense-typography',
          element: <Expensive />
        }
      ]
    },
    {
      path: 'overallexpense',
      children: [
        {
          path: 'overallexpense-typography',
          element: <Overall />
        }
      ]
    },
    {
      path: 'total',
      children: [
        {
          path: 'total-typography',
          element: <Tota/>
        }
      ]
    },
    {
      path: 'category',
      children: [
        {
          path: 'category-typography',
          element: <Categor/>
        }
      ]
    },
    {
      path: 'subcategory',
      children: [
        {
          path: 'subcategory-typography',
          element: <SubCate/>
        }
      ]
    },
    {
      path: 'eventrackers',
      children: [
        {
          path: 'eventrackers-typography',
          element: <Event/>
        }
      ]
    },
    {
      path: 'Leads',
      children: [
        {
          path: 'Leads-typography',
          element: <Leads/>
        }
      ]
    },
    {
      path: 'telecaller',
      children: [
        {
          path: 'telecaller-typography',
          element: <Telecaller/>
        }
      ]
    },
    {
      path: 'asignworkflow',
      children: [
        {
          path: 'assignworkflow-typography',
          element: <Assign/>
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
