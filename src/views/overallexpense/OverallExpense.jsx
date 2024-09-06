// import React, { useState } from 'react';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, TextField, MenuItem, Button, Grid, InputAdornment, IconButton
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterListIcon from '@mui/icons-material/FilterList';

// const OverallExpense = () => {
//   // Dummy data to mimic the fetched expenses grouped by category
//   const groupedExpenses = {
//     "Travel": [
//       { id: 1, date: '2024-09-01', description: 'Flight to NYC', amount: 300, expenseid: 'EXP001', subcategory: 'Flight', remarks: 'Business trip' },
//       { id: 2, date: '2024-09-02', description: 'Hotel Stay', amount: 200, expenseid: 'EXP002', subcategory: 'Accommodation', remarks: 'Business trip' },
//     ],
//     "Food": [
//       { id: 3, date: '2024-09-03', description: 'Lunch with clients', amount: 50, expenseid: 'EXP003', subcategory: 'Restaurant', remarks: 'Client meeting' },
//     ]
//   };

//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = ['All', 'Travel', 'Food']; // Example categories

//   // Handle filtering logic
//   const filterExpenses = () => {
//     let filteredExpenses = groupedExpenses;

//     if (selectedCategory !== 'All') {
//       filteredExpenses = {
//         [selectedCategory]: groupedExpenses[selectedCategory] || []
//       };
//     }

//     if (searchTerm) {
//       filteredExpenses = Object.entries(filteredExpenses).reduce((acc, [categoryName, expenses]) => {
//         const filteredItems = expenses.filter(expense =>
//           expense.description.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         if (filteredItems.length) {
//           acc[categoryName] = filteredItems;
//         }
//         return acc;
//       }, {});
//     }

//     return filteredExpenses;
//   };

//   const filteredExpenses = filterExpenses();

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h3" gutterBottom style={{marginBottom:"10px"}}>
//         Overall Expense Detail
//       </Typography>


//       <Grid container spacing={2} mb={3} style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
//       <Grid item xs={12} sm={3}>
//       <TextField
//             label="Search by Description"
//             fullWidth
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid>

//         <Grid item xs={12} sm={3}>
//         <TextField
//             select
//             label="Filter by Category"
//             fullWidth
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <FilterListIcon />
//                 </InputAdornment>
//               ),
//             }}
//           >
//             {categories.map((category) => (
//               <MenuItem key={category} value={category}>
//                 {category}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Grid>
        
//         {/* <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={filterExpenses}>
//             Search
//           </Button>
//         </Grid> */}
//       </Grid>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>S.no</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Description</TableCell>
//               <TableCell>Amount</TableCell>
//               <TableCell>Expense Code</TableCell>
//               <TableCell>Category Name</TableCell>
//               <TableCell>Subcategory</TableCell>
//               <TableCell>Remarks</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Object.entries(filteredExpenses).length > 0 ? (
//               Object.entries(filteredExpenses).map(([categoryName, expenses], index) => (
//                 <React.Fragment key={categoryName}>
//                   <TableRow>
//                     <TableCell colSpan={8} style={{ fontWeight: 'bold', textAlign: 'left' }}>
//                       {categoryName}
//                     </TableCell>
//                   </TableRow>
//                   {expenses.map((expense, expenseIndex) => (
//                     <TableRow key={expense.id}>
//                       <TableCell>{index + expenseIndex + 1}</TableCell>
//                       <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
//                       <TableCell>{expense.description}</TableCell>
//                       <TableCell>{expense.amount}</TableCell>
//                       <TableCell>{expense.expenseid}</TableCell>
//                       <TableCell>{categoryName}</TableCell>
//                       <TableCell>{expense.subcategory}</TableCell>
//                       <TableCell>{expense.remarks}</TableCell>
//                     </TableRow>
//                   ))}
//                 </React.Fragment>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan="8">No expenses found.</TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default OverallExpense;



import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, TextField, MenuItem, Grid, InputAdornment, TablePagination
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const OverallExpense = () => {
  const groupedExpenses = {
    "Travel": [
      { id: 1, date: '2024-09-01', description: 'Flight to NYC', amount: 300, expenseid: 'EXP001', subcategory: 'Flight', remarks: 'Business trip' },
      { id: 2, date: '2024-09-02', description: 'Hotel Stay', amount: 200, expenseid: 'EXP002', subcategory: 'Accommodation', remarks: 'Business trip' },
    ],
    "Food": [
      { id: 3, date: '2024-09-03', description: 'Lunch with clients', amount: 50, expenseid: 'EXP003', subcategory: 'Restaurant', remarks: 'Client meeting' },
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const categories = ['All', 'Travel', 'Food'];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const categoryStyles = {
    "Travel": { color: getRandomColor() },
    "Food": { color: getRandomColor() },
  };

  const filterExpenses = () => {
    let filteredExpenses = groupedExpenses;

    if (selectedCategory !== 'All') {
      filteredExpenses = {
        [selectedCategory]: groupedExpenses[selectedCategory] || []
      };
    }

    if (searchTerm) {
      filteredExpenses = Object.entries(filteredExpenses).reduce((acc, [categoryName, expenses]) => {
        const filteredItems = expenses.filter(expense =>
          expense.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredItems.length) {
          acc[categoryName] = filteredItems;
        }
        return acc;
      }, {});
    }

    return filteredExpenses;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredExpenses = filterExpenses();
  const flatExpenses = Object.entries(filteredExpenses).flatMap(([categoryName, expenses]) => 
    expenses.map(expense => ({ ...expense, categoryName }))
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" gutterBottom style={{ marginBottom: "10px" }}>
        Overall Expense Detail
      </Typography>

      <Grid container spacing={2} mb={3} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Search by Description"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            select
            label="Filter by Category"
            fullWidth
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FilterListIcon />
                </InputAdornment>
              ),
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Expense Code</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Subcategory</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flatExpenses.length > 0 ? (
              flatExpenses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((expense, index) => (
                <React.Fragment key={expense.id}>
                  {index === 0 || flatExpenses[index - 1].categoryName !== expense.categoryName ? (
                    <TableRow style={categoryStyles[expense.categoryName]}>
                      <TableCell colSpan={8} style={{ fontWeight: 'bold', textAlign: 'left' }}>
                        {expense.categoryName}
                      </TableCell>
                    </TableRow>
                  ) : null}
                  <TableRow>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>{expense.amount}</TableCell>
                    <TableCell>{expense.expenseid}</TableCell>
                    <TableCell>{expense.categoryName}</TableCell>
                    <TableCell>{expense.subcategory}</TableCell>
                    <TableCell>{expense.remarks}</TableCell>
                  </TableRow>
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="8">No expenses found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={flatExpenses.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Box>
  );
};

export default OverallExpense;
