// import React, { useState } from 'react';
// import {
//   Box,
//   Tabs,
//   Tab,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Checkbox,
//   Button,
// } from '@mui/material';

// const telecallersMockData = [
//   { _id: '1', fullName: 'John Doe' },
//   { _id: '2', fullName: 'Jane Smith' },
//   { _id: '3', fullName: 'Michael Brown' },
// ];

// const unassignedLeadsMockData = [
//   { _id: '101', firstName: 'Alex', lastName: 'Johnson', phone: '123-456-7890' },
//   { _id: '102', firstName: 'Chris', lastName: 'Lee', phone: '987-654-3210' },
//   { _id: '103', firstName: 'Taylor', lastName: 'Swift', phone: '555-123-4567' },
// ];

// const Assign = () => {
//   const [activeTab, setActiveTab] = useState('manual');
//   const [assignments, setAssignments] = useState({});

//   const handleCheckboxChange = (telecallerId, leadId) => {
//     setAssignments((prev) => ({
//       ...prev,
//       [telecallerId]: {
//         ...prev[telecallerId],
//         [leadId]: !prev[telecallerId]?.[leadId],
//       },
//     }));
//   };

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const handleSave = (telecallerId, isAutoAssign = false) => {
//     console.log('Save assignments for telecaller:', telecallerId);
//     if (isAutoAssign) {
//       console.log('Auto-assigned leads:', unassignedLeadsMockData);
//     } else {
//       console.log('Manual assignments:', assignments[telecallerId]);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', padding: 2 }}>
//       <Typography variant="h4" gutterBottom>
//         Assign Calls
//       </Typography>

//       <Tabs
//         value={activeTab}
//         onChange={handleTabChange}
//         indicatorColor="primary"
//         textColor="primary"
//       >
//         <Tab value="manual" label="Manual Assignment" />
//         <Tab value="auto" label="Automatic Assignment" />
//       </Tabs>

//       {activeTab === 'manual' && (
//         <TableContainer component={Paper} sx={{ marginTop: 2 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Telecaller</TableCell>
//                 <TableCell>Lead Name</TableCell>
//                 <TableCell>Lead Phone Number</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {telecallersMockData.map((telecaller) => (
//                 <React.Fragment key={telecaller._id}>
//                   <TableRow>
//                     <TableCell>{telecaller.fullName}</TableCell>
//                     <TableCell colSpan={2}>
//                       <Button variant="contained" onClick={() => handleSave(telecaller._id)}>
//                         Save Assignments
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                   {unassignedLeadsMockData.map((lead) => (
//                     <TableRow key={lead._id}>
//                       <TableCell></TableCell>
//                       <TableCell>
//                         <Checkbox
//                           checked={assignments[telecaller._id]?.[lead._id] || false}
//                           onChange={() => handleCheckboxChange(telecaller._id, lead._id)}
//                         />
//                         {lead.firstName} {lead.lastName}
//                       </TableCell>
//                       <TableCell>{lead.phone}</TableCell>
//                       <TableCell></TableCell>
//                     </TableRow>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}

//       {activeTab === 'auto' && (
//         <TableContainer component={Paper} sx={{ marginTop: 2 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Telecaller</TableCell>
//                 <TableCell>Leads Assigned</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {telecallersMockData.map((telecaller) => (
//                 <TableRow key={telecaller._id}>
//                   <TableCell>{telecaller.fullName}</TableCell>
//                   <TableCell>{unassignedLeadsMockData.length} leads assigned</TableCell>
//                   <TableCell>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleSave(telecaller._id, true)}
//                     >
//                       Save Auto Assignments
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Box>
//   );
// };

// export default Assign;



import React, { useState } from 'react';
import { 
  Box, Button, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Tabs, Tab 
} from '@mui/material';

const Assign = () => {
  const [telecallers] = useState([
    { _id: '1', fullName: 'John Doe' },
    { _id: '2', fullName: 'Jane Smith' }
  ]);
  const [unassignedLeads] = useState([
    { _id: '1', firstName: 'Lead1', lastName: 'Last1', phone: '1234567890' },
    { _id: '2', firstName: 'Lead2', lastName: 'Last2', phone: '0987654321' }
  ]);
  const [assignments, setAssignments] = useState({});
  const [activeTab, setActiveTab] = useState('manual');

  const handleCheckboxChange = (telecallerId, leadId) => {
    setAssignments(prev => ({
      ...prev,
      [telecallerId]: {
        ...prev[telecallerId],
        [leadId]: !prev[telecallerId]?.[leadId]
      }
    }));
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Assign Calls</Typography>

      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab value="manual" label="Manual Assignment" />
        <Tab value="auto" label="Automatic Assignment" />
      </Tabs>

      {activeTab === 'manual' && (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Telecaller</TableCell>
                <TableCell>Lead Name</TableCell>
                <TableCell>Lead Phone Number</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {telecallers.map((telecaller) => (
                <React.Fragment key={telecaller._id}>
                  <TableRow>
                    <TableCell colSpan={3} sx={{ fontWeight: 'bold' }}>{telecaller.fullName}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => alert(`Saving assignments for ${telecaller.fullName}`)}>
                        Save Assignments
                      </Button>
                    </TableCell>
                  </TableRow>
                  {unassignedLeads.map((lead) => (
                    <TableRow key={lead._id}>
                      <TableCell></TableCell>
                      <TableCell>
                        <Checkbox
                          checked={assignments[telecaller._id]?.[lead._id] || false}
                          onChange={() => handleCheckboxChange(telecaller._id, lead._id)}
                        />
                        {`${lead.firstName} ${lead.lastName}`}
                      </TableCell>
                      <TableCell>{lead.phone}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {activeTab === 'auto' && (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Telecaller</TableCell>
                <TableCell>Lead Name</TableCell>
                <TableCell>Lead Phone Number</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {telecallers.map((telecaller) => (
                <React.Fragment key={telecaller._id}>
                  <TableRow>
                    <TableCell colSpan={3} sx={{ fontWeight: 'bold' }}>{telecaller.fullName}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => alert(`Saving assignments for ${telecaller.fullName}`)}>
                        Save Assignments
                      </Button>
                    </TableCell>
                  </TableRow>
                  {unassignedLeads.map((lead) => (
                    <TableRow key={lead._id}>
                      <TableCell></TableCell>
                      <TableCell>{`${lead.firstName} ${lead.lastName}`}</TableCell>
                      <TableCell>{lead.phone}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Assign;
