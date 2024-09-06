
// import React from 'react';
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, Button
// } from '@mui/material';

// const EditStudent = () => {
//   const rows = [
//     {
//       name: 'Karthik',
//       age: 22,
//       email: 'bidurur@gmail.com',
//       course: 'UI/UX',
//       address: 'Excerpt',
//       phone: '01234567890',
//       gender: 'Male',
//       dob: '08/07/2024',
//     },
//     {
//         name: 'Karthik',
//         age: 22,
//         email: 'bidurur@gmail.com',
//         course: 'UI/UX',
//         address: 'Excerpt',
//         phone: '01234567890',
//         gender: 'Male',
//         dob: '08/07/2024',
//       },
//       {
//         name: 'Karthik',
//         age: 22,
//         email: 'bidurur@gmail.com',
//         course: 'UI/UX',
//         address: 'Excerpt',
//         phone: '01234567890',
//         gender: 'Male',
//         dob: '08/07/2024',
//       }
//   ];

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Age</TableCell>
//             <TableCell>Email</TableCell>
//             <TableCell>Course</TableCell>
//             <TableCell>Address</TableCell>
//             <TableCell>Phone No</TableCell>
//             <TableCell>Gender</TableCell>
//             <TableCell>DOB</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.age}</TableCell>
//               <TableCell>{row.email}</TableCell>
//               <TableCell>{row.course}</TableCell>
//               <TableCell>{row.address}</TableCell>
//               <TableCell>{row.phone}</TableCell>
//               <TableCell>{row.gender}</TableCell>
//               <TableCell>{row.dob}</TableCell>
//               <TableCell>
//                 <Button variant="contained" color="primary" style={{ marginRight: '8px' }}>
//                   Add
//                 </Button>
//                 <Button variant="contained" color="secondary">
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default EditStudent;


import React, { useState } from 'react';
import { TextField, Checkbox, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Typography,IconButton, } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

function EditStudent() {
    const [clients, setClients] = useState([
        { id: 1, name: 'John', age: 25, Email: "bidurur@gmail.com", Course:"Full stack Developer", Address:"EXCERPT", Phone:"6302874114", Gender:"Male", DOB:"2-4-2001" },
        { id: 2, name: 'Paul', age: 25, Email: "bidurur@gmail.com", Course:"Full stack Developer", Address:"EXCERPT", Phone:"6302874114", Gender:"Male", DOB:"2-4-2001" },
        { id: 3, name: 'Kavan', age: 25, Email: "bidurur@gmail.com", Course:"Full stack Developer", Address:"EXCERPT", Phone:"6302874114", Gender:"Male", DOB:"2-4-2001" },
        { id: 4, name: 'Arpita', age: 25, Email: "bidurur@gmail.com", Course:"Full stack Developer", Address:"EXCERPT", Phone:"6302874114", Gender:"Female", DOB:"2-4-2001" },
        { id: 5, name: 'Maya', age: 25, Email: "bidurur@gmail.com", Course:"Full stack Developer", Address:"EXCERPT", Phone:"6302874114", Gender:"Female", DOB:"2-4-2001" },
        { id: 6, name: 'Priyanka', age: 25, Email: "bidurur@gmail.com", Course:"Full stack Developer", Address:"EXCERPT", Phone:"6302874114", Gender:"Female", DOB:"2-4-2001" },
        { id: 7, name: 'Nayana', age: 25, Email: "bidurur@gmail.com", Course:"Full stack Developer", Address:"EXCERPT", Phone:"6302874114", Gender:"Female", DOB:"2-4-2001" },
    ]);
    const [search, setSearch] = useState('');
    const [newClient, setNewClient] = useState({ name: '', age: '', Email:'', Course:'', Address:'', Phone:'', Gender:'', DOB:'' });
    const [activeClient, setActiveClient] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleCreate = () => {
        setClients([...clients, { ...newClient, id: clients.length + 1 }]);
        setNewClient({ name: '', age: '', Email:'', Course:'', Address:'', Phone:'', Gender:'', DOB:'' });
    };

    const handleDelete = (client) => {
        setClients(clients.filter(c => c.id !== client.id));
    };

    const handleEdit = (client) => {
        setActiveClient({ ...client });
    };

    const handleUpdate = () => {
        setClients(clients.map(client => (client.id === activeClient.id ? activeClient : client)));
        setActiveClient(null);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className="app-page">
            <TextField
                label="Search..."
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Checkbox />
                            </TableCell>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Course</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>DOB</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients
                            .filter(client => client.name.toLowerCase().includes(search.toLowerCase()))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(client => (
                                activeClient && activeClient.id === client.id ? (
                                    <TableRow key={client.id}>
                                        <TableCell><Checkbox /></TableCell>
                                        <TableCell>{client.id}</TableCell>
                                        <TableCell>
                                            <TextField
                                                value={activeClient.name}
                                                onChange={(e) => setActiveClient({ ...activeClient, name: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={activeClient.age}
                                                onChange={(e) => setActiveClient({ ...activeClient, age: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={activeClient.Email}
                                                onChange={(e) => setActiveClient({ ...activeClient, Email: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={activeClient.Course}
                                                onChange={(e) => setActiveClient({ ...activeClient, Course: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={activeClient.Address}
                                                onChange={(e) => setActiveClient({ ...activeClient, Address: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={activeClient.Phone}
                                                onChange={(e) => setActiveClient({ ...activeClient, Phone: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={activeClient.Gender}
                                                onChange={(e) => setActiveClient({ ...activeClient, Gender: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={activeClient.DOB}
                                                onChange={(e) => setActiveClient({ ...activeClient, DOB: e.target.value })}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    <TableRow key={client.id}>
                                        <TableCell><Checkbox /></TableCell>
                                        <TableCell>{client.id}</TableCell>
                                        <TableCell>{client.name}</TableCell>
                                        <TableCell>{client.age}</TableCell>
                                        <TableCell>{client.Email}</TableCell>
                                        <TableCell>{client.Course}</TableCell>
                                        <TableCell>{client.Address}</TableCell>
                                        <TableCell>{client.Phone}</TableCell>
                                        <TableCell>{client.Gender}</TableCell>
                                        <TableCell>{client.DOB}</TableCell>
                                        <TableCell>
                                            
                                            <IconButton color="primary" size="small" onClick={() => handleEdit(client)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton color="error" size="small" onClick={() => handleDelete(client)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            
                                        </TableCell>
                                    </TableRow>
                                )
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={clients.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {/* <div style={{ margin: '16px 0' }}>
                <Typography variant="h6">Add New Client</Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Age"
                    variant="outlined"
                    value={newClient.age}
                    onChange={(e) => setNewClient({ ...newClient, age: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    value={newClient.Email}
                    onChange={(e) => setNewClient({ ...newClient, Email: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Course"
                    variant="outlined"
                    value={newClient.Course}
                    onChange={(e) => setNewClient({ ...newClient, Course: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    value={newClient.Address}
                    onChange={(e) => setNewClient({ ...newClient, Address: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    value={newClient.Phone}
                    onChange={(e) => setNewClient({ ...newClient, Phone: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Gender"
                    variant="outlined"
                    value={newClient.Gender}
                    onChange={(e) => setNewClient({ ...newClient, Gender: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="DOB"
                    variant="outlined"
                    value={newClient.DOB}
                    onChange={(e) => setNewClient({ ...newClient, DOB: e.target.value })}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleCreate}>Add Client</Button>
            </div> */}
        </div>
    );
}

export default EditStudent;