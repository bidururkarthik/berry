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
  { id: 1, name: 'Salary and Compensation' },
  { id: 2, name: 'Profit Share' },
  { id: 3, name: 'Rent' },
  { id: 4, name: 'Utilities' },
  { id: 5, name: 'Corporate' },
  { id: 6, name: 'Marketing' },
  { id: 7, name: 'Research and Development' },
];

const SubCategory = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    categoryName: '',
    subCategoryId: '',
    name: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewCategory({ categoryName: '', subCategoryId: '', name: '' });
  };

  const handleAddCategory = () => {
    if (
      newCategory.categoryName.trim() &&
      newCategory.subCategoryId.trim() &&
      newCategory.name.trim()
    ) {
      setCategories([
        ...categories,
        {
          id: Number(newCategory.subCategoryId.trim()),
          name: newCategory.name.trim(),
          categoryName: newCategory.categoryName.trim()
        }
      ]);
      handleCloseModal();
    }
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredCategories.length / itemsPerPage);
  const displayedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Category
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
          Add Category +
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>Sub CategoryID</TableCell>
              <TableCell>SubCategory Name</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedCategories.map((category, index) => (
              <TableRow key={category.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
                <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.categoryName}</TableCell>
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
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            fullWidth
            variant="outlined"
            value={newCategory.categoryName}
            onChange={(e) => setNewCategory({ ...newCategory, categoryName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Sub CategoryID"
            fullWidth
            variant="outlined"
            type="number"
            value={newCategory.subCategoryId}
            onChange={(e) => setNewCategory({ ...newCategory, subCategoryId: e.target.value })}
          />
          <TextField
            margin="dense"
            label="SubCategory Name"
            fullWidth
            variant="outlined"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleAddCategory} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SubCategory;

