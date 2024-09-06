
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
// constant


const Student = {
    id: 'student',
    title: 'Student',
    type: 'group',
    children: [
      {
        id: 'student',
        title: 'Add Student',
        type: 'item',
        url: '/student/student-typography',
        icon: PersonAddAltOutlinedIcon,
        breadcrumbs: false
      },
      {
        id: 'editstudent',
        title: 'Edit Student',
        type: 'item',
        url: '/student/editstudent-typography',
        icon: ModeOutlinedIcon,
        breadcrumbs: false
      },
   
    ]
  };
  
  export default Student;