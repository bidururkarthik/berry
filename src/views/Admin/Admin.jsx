import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch, Typography } from '@mui/material';
import { Person, Email as EmailIcon, Phone as PhoneIcon, Wc as GenderIcon } from '@mui/icons-material';

function Admin() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({
        username: '',
        email: '',
        phone: '',
        gender: ''
    });

    const [toggleStatus, setToggleStatus] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTodo({
            ...newTodo,
            [name]: value
        });
    };

    const handleAdd = () => {
        if (newTodo.username && newTodo.email && newTodo.phone && newTodo.gender) {
            setTodos([...todos, newTodo]);
            setNewTodo({
                username: '',
                email: '',
                phone: '',
                gender: ''
            });
        }
    };

    const handleToggle = (id) => {
      setToggleStatus({
          ...toggleStatus,
          [id]: !toggleStatus[id]
      });
  };

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <TextField
                            label="Username"
                            name="username"
                            variant="outlined"
                            value={newTodo.username}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <TextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            type="email"
                            value={newTodo.email}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <TextField
                            label="Phone Number"
                            name="phone"
                            variant="outlined"
                            value={newTodo.phone}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            name="gender"
                            value={newTodo.gender}
                            onChange={handleInputChange}
                            label="Gender"
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                style={{ marginTop: '20px' }}
            >
                Add
            </Button>

            <Paper style={{ marginTop: '20px', padding: '10px' }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Access</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todos.map((todo, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div><Person style={{ verticalAlign: 'middle', color: "#5e35b1" }} /> {todo.username}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div><EmailIcon style={{ verticalAlign: 'middle', color: "#d84315" }} /> {todo.email}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div><PhoneIcon style={{ verticalAlign: 'middle', color: "#ffc107" }} /> {todo.phone}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div><GenderIcon style={{ verticalAlign: 'middle', color: "#121926" }} /> {todo.gender}</div>
                                    </TableCell>
                                    <TableCell>
                                    <Switch
                                            checked={!!toggleStatus[todo.id]}
                                            onChange={() => handleToggle(todo.id)}
                                            color="primary"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default Admin;
