// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   Typography,
//   Box
// } from '@mui/material';
// import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

// const initialCategories = [
//   { id: 1, name: 'Salary and Compensation' },
//   { id: 2, name: 'Profit Share' },
//   { id: 3, name: 'Rent' },
//   { id: 4, name: 'Utilities' },
//   { id: 5, name: 'Corporate' },
//   { id: 6, name: 'Marketing' },
//   { id: 7, name: 'Research and Development' },
// ];

// const EventTracker = () => {
//   const [categories, setCategories] = useState(initialCategories);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [newCategory, setNewCategory] = useState({
//     categoryName: '',
//     subCategoryId: '',
//     name: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setNewCategory({ categoryName: '', subCategoryId: '', name: '' });
//   };

//   const handleAddCategory = () => {
//     if (
//       newCategory.categoryName.trim() &&
//       newCategory.subCategoryId.trim() &&
//       newCategory.name.trim()
//     ) {
//       setCategories([
//         ...categories,
//         {
//           id: Number(newCategory.subCategoryId.trim()),
//           name: newCategory.name.trim(),
//           categoryName: newCategory.categoryName.trim()
//         }
//       ]);
//       handleCloseModal();
//     }
//   };

//   const filteredCategories = categories.filter(category =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const pageCount = Math.ceil(filteredCategories.length / itemsPerPage);
//   const displayedCategories = filteredCategories.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <Box sx={{ maxWidth: 1200, margin: 'auto', p: 2 }}>
//       <Typography variant="h5" gutterBottom>
//         Category
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//         <TextField
//           label="Search"
//           variant="outlined"
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Button variant="contained" color="primary" onClick={handleOpenModal}>
//           Add Category +
//         </Button>
//       </Box>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>S.no</TableCell>
//               <TableCell>Sub CategoryID</TableCell>
//               <TableCell>SubCategory Name</TableCell>
//               <TableCell>Category Name</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {displayedCategories.map((category, index) => (
//               <TableRow key={category.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
//                 <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
//                 <TableCell>{category.id}</TableCell>
//                 <TableCell>{category.name}</TableCell>
//                 <TableCell>{category.categoryName}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary" size="small">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton color="error" size="small">
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//         <Button
//           variant="outlined"
//           color="primary"
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(currentPage - 1)}
//           sx={{ mr: 1 }}
//         >
//           Previous
//         </Button>
//         <Typography variant="body1" sx={{ alignSelf: 'center', mx: 2 }}>
//           Page {currentPage} of {pageCount}
//         </Typography>
//         <Button
//           variant="outlined"
//           color="primary"
//           disabled={currentPage === pageCount}
//           onClick={() => setCurrentPage(currentPage + 1)}
//           sx={{ ml: 1 }}
//         >
//           Next
//         </Button>
//       </Box>

//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>Add New Category</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Category Name"
//             fullWidth
//             variant="outlined"
//             value={newCategory.categoryName}
//             onChange={(e) => setNewCategory({ ...newCategory, categoryName: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Sub CategoryID"
//             fullWidth
//             variant="outlined"
//             type="number"
//             value={newCategory.subCategoryId}
//             onChange={(e) => setNewCategory({ ...newCategory, subCategoryId: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="SubCategory Name"
//             fullWidth
//             variant="outlined"
//             value={newCategory.name}
//             onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal}>Cancel</Button>
//           <Button onClick={handleAddCategory} variant="contained" color="primary">
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default EventTracker;





import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const initialCategories = [
  { id: 1, institutionName: 'Institution A', location: 'Location A', dept: 'Dept A', year: 2024, eventDate: '2024-09-01', eventDescription: 'Description A', participants: 50, dbCollection: 100, visitedDate: '2024-09-02', followupFeedUp: 'Followed Up A', followupDate: '2024-09-05', followupFeedback: 'Positive' },
  // Add more data as needed
];

const EventTracker = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    institutionName: '',
    location: '',
    dept: '',
    year: '',
    eventDate: '',
    eventDescription: '',
    participants: '',
    dbCollection: '',
    visitedDate: '',
    followupFeedUp: '',
    followupDate: '',
    followupFeedback: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewCategory({
      institutionName: '',
      location: '',
      dept: '',
      year: '',
      eventDate: '',
      eventDescription: '',
      participants: '',
      dbCollection: '',
      visitedDate: '',
      followupFeedUp: '',
      followupDate: '',
      followupFeedback: ''
    });
  };

  const handleAddCategory = () => {
    if (
      newCategory.institutionName.trim() &&
      newCategory.location.trim() &&
      newCategory.dept.trim()
    ) {
      setCategories([
        ...categories,
        {
          id: categories.length + 1,
          ...newCategory,
          year: parseInt(newCategory.year),
          participants: parseInt(newCategory.participants),
          dbCollection: parseInt(newCategory.dbCollection)
        }
      ]);
      handleCloseModal();
    }
  };

  const filteredCategories = categories.filter(category =>
    category.institutionName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredCategories.length / itemsPerPage);
  const displayedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Event Tracker
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Add Event +
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>Institution Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Dept</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Event Date</TableCell>
              <TableCell>Event Description</TableCell>
              <TableCell>No.of.Participants</TableCell>
              <TableCell>No.of.DB Collection</TableCell>
              <TableCell>Visited Date</TableCell>
              <TableCell>Followup FeedUp</TableCell>
              <TableCell>Followup Date</TableCell>
              <TableCell>Followup 1 Feedback</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedCategories.map((category, index) => (
              <TableRow key={category.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
                <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                <TableCell>{category.institutionName}</TableCell>
                <TableCell>{category.location}</TableCell>
                <TableCell>{category.dept}</TableCell>
                <TableCell>{category.year}</TableCell>
                <TableCell>{category.eventDate}</TableCell>
                <TableCell>{category.eventDescription}</TableCell>
                <TableCell>{category.participants}</TableCell>
                <TableCell>{category.dbCollection}</TableCell>
                <TableCell>{category.visitedDate}</TableCell>
                <TableCell>{category.followupFeedUp}</TableCell>
                <TableCell>{category.followupDate}</TableCell>
                <TableCell>{category.followupFeedback}</TableCell>
                <TableCell>
                  <IconButton color="primary" size="small">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" size="small">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          sx={{ mr: 1 }}
        >
          Previous
        </Button>
        <Typography variant="body1" sx={{ alignSelf: 'center', mx: 2 }}>
          Page {currentPage} of {pageCount}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          disabled={currentPage === pageCount}
          onClick={() => setCurrentPage(currentPage + 1)}
          sx={{ ml: 1 }}
        >
          Next
        </Button>
      </Box>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Institution Name"
            fullWidth
            variant="outlined"
            value={newCategory.institutionName}
            onChange={(e) => setNewCategory({ ...newCategory, institutionName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Location"
            fullWidth
            variant="outlined"
            value={newCategory.location}
            onChange={(e) => setNewCategory({ ...newCategory, location: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Dept"
            fullWidth
            variant="outlined"
            value={newCategory.dept}
            onChange={(e) => setNewCategory({ ...newCategory, dept: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Year"
            fullWidth
            variant="outlined"
            type="number"
            value={newCategory.year}
            onChange={(e) => setNewCategory({ ...newCategory, year: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Event Date"
            fullWidth
            variant="outlined"
            value={newCategory.eventDate}
            onChange={(e) => setNewCategory({ ...newCategory, eventDate: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Event Description"
            fullWidth
            variant="outlined"
            value={newCategory.eventDescription}
            onChange={(e) => setNewCategory({ ...newCategory, eventDescription: e.target.value })}
          />
          <TextField
            margin="dense"
            label="No.of.Participants"
            fullWidth
            variant="outlined"
            type="number"
            value={newCategory.participants}
            onChange={(e) => setNewCategory({ ...newCategory, participants: e.target.value })}
          />
          <TextField
            margin="dense"
            label="No.of.DB Collection"
            fullWidth
            variant="outlined"
            type="number"
            value={newCategory.dbCollection}
            onChange={(e) => setNewCategory({ ...newCategory, dbCollection: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Visited Date"
            fullWidth
            variant="outlined"
            value={newCategory.visitedDate}
            onChange={(e) => setNewCategory({ ...newCategory, visitedDate: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Followup FeedUp"
            fullWidth
            variant="outlined"
            value={newCategory.followupFeedUp}
            onChange={(e) => setNewCategory({ ...newCategory, followupFeedUp: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Followup Date"
            fullWidth
            variant="outlined"
            value={newCategory.followupDate}
            onChange={(e) => setNewCategory({ ...newCategory, followupDate: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Followup Feedback"
            fullWidth
            variant="outlined"
            value={newCategory.followupFeedback}
            onChange={(e) => setNewCategory({ ...newCategory, followupFeedback: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddCategory} color="primary">
            Add Event
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EventTracker;
