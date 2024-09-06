import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button,IconButton,
} from '@mui/material';

import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const SuperAdmin = () => {
  const rows = [
    {
      sno: 1,
      profile: 'Profile1',
      superAdminName: 'Karthik',
      userName: 'Karthik123',
      email: 'bidururkarthik1212@gmail.com',
      password: 'password123'
    },
    {
      sno: 2,
      profile: 'Profile2',
      superAdminName: 'Karthik',
      userName: 'Karthik456',
      email: 'bidururkarthik456@gmail.com',
      password: 'password456'
    },
    {
      sno: 3,
      profile: 'Profile3',
      superAdminName: 'Karthik',
      userName: 'Karthik789',
      email: 'bidururkarthik789@gmail.com',
      password: 'password789'
    }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell>Profile</TableCell>
            <TableCell>SuperAdmin Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.sno}</TableCell>
              <TableCell>{row.profile}</TableCell>
              <TableCell>{row.superAdminName}</TableCell>
              <TableCell>{row.userName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.password}</TableCell>
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
  );
}

export default SuperAdmin;
