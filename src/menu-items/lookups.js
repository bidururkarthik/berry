// assets
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
// ==============================|| UTILITIES MENU ITEMS ||============================== //

const LookUp = {
  id: 'lookup',
  title: 'LookUps',
  type: 'group',
  children: [
    {
      id: 'category',
      title: 'Category',
      type: 'item',
      url: '/category/category-typography',
      icon: ClassOutlinedIcon,
      breadcrumbs: false
    },
    {
        id: 'subcategory',
        title: 'SubCategory',
        type: 'item',
        url: '/subcategory/subcategory-typography',
        icon: CategoryOutlinedIcon,
        breadcrumbs: false
      }
 
  ]
};

export default LookUp;