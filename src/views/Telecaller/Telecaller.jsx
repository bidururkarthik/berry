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

// Initial data for telecaller details
const initialTelecallers = [
  {
    id: 1,
    fullName: 'John Doe',
    gender: 'Male',
    dob: '1990-01-01',
    email: 'john@example.com',
    phoneNumber: '779406',
    address: '123 Main St',
    dateOfJoining: '2020-01-01',
    username: 'johndoe',
    password: 'password123',
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    gender: 'Female',
    dob: '1992/2/2',
    email: 'jane@example.com',
    phoneNumber: '7794063',
    address: '456 Elm St',
    dateOfJoining: '2021-02-01',
    username: 'janesmith',
    password: 'password123',
  },
  // Add more telecallers as needed
];

const Telecaller = () => {
  const [telecallers, setTelecallers] = useState(initialTelecallers);
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [newTelecaller, setNewTelecaller] = useState({
    fullName: '',
    gender: '',
    dob: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfJoining: '',
    username: '',
    password: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewTelecaller({
      fullName: '',
      gender: '',
      dob: '',
      email: '',
      phoneNumber: '',
      address: '',
      dateOfJoining: '',
      username: '',
      password: ''
    });
  };

  const handleAddTelecaller = () => {
    if (
      newTelecaller.fullName.trim() &&
      newTelecaller.gender.trim() &&
      newTelecaller.dob.trim() &&
      newTelecaller.email.trim() &&
      newTelecaller.phoneNumber.trim() &&
      newTelecaller.address.trim() &&
      newTelecaller.dateOfJoining.trim() &&
      newTelecaller.username.trim() &&
      newTelecaller.password.trim()
    ) {
      setTelecallers([
        ...telecallers,
        {
          id: telecallers.length + 1,
          ...newTelecaller
        }
      ]);
      handleCloseModal();
    }
  };

  const filteredTelecallers = telecallers.filter(telecaller =>
    telecaller.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredTelecallers.length / itemsPerPage);
  const displayedTelecallers = filteredTelecallers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Telecaller List
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
          Add Telecaller +
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date of Joining</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedTelecallers.map((telecaller, index) => (
              <TableRow key={telecaller.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
                <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                <TableCell>{telecaller.fullName}</TableCell>
                <TableCell>{telecaller.gender}</TableCell>
                <TableCell>{telecaller.dob}</TableCell>
                <TableCell>{telecaller.email}</TableCell>
                <TableCell>{telecaller.phoneNumber}</TableCell>
                <TableCell>{telecaller.address}</TableCell>
                <TableCell>{telecaller.dateOfJoining}</TableCell>
                <TableCell>{telecaller.username}</TableCell>
                <TableCell>{telecaller.password}</TableCell>
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
        <DialogTitle>Add New Telecaller</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            fullWidth
            variant="outlined"
            value={newTelecaller.fullName}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, fullName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Gender"
            fullWidth
            variant="outlined"
            value={newTelecaller.gender}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, gender: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Date of Birth"
            fullWidth
            variant="outlined"
            type="date"
            value={newTelecaller.dob}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, dob: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            variant="outlined"
            value={newTelecaller.email}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            fullWidth
            variant="outlined"
            value={newTelecaller.phoneNumber}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, phoneNumber: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Address"
            fullWidth
            variant="outlined"
            value={newTelecaller.address}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, address: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Date of Joining"
            fullWidth
            variant="outlined"
            type="date"
            value={newTelecaller.dateOfJoining}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, dateOfJoining: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="Username"
            fullWidth
            variant="outlined"
            value={newTelecaller.username}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, username: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Password"
            fullWidth
            variant="outlined"
            value={newTelecaller.password}
            onChange={(e) => setNewTelecaller({ ...newTelecaller, password: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTelecaller} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Telecaller;
