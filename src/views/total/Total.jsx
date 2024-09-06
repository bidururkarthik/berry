// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
// import { FaIndianRupeeSign } from "react-icons/fa";
// import axios from 'axios';

// const Total = () => {
//   const [expenseData, setExpenseData] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [monthlyTotals, setMonthlyTotals] = useState({
//     Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0,
//     Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0
//   });
//   const [grandTotal, setGrandTotal] = useState(0);

//   useEffect(() => {
//     axios.get('http://localhost:5000/expenses')
//       .then((response) => {
//         const data = response.data;
//         setExpenseData(data);
//         calculateTotals(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching expense data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/categories')
//       .then((response) => {
//         setCategories(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching categories:', error);
//       });
//   }, []);

//   const calculateTotals = (data) => {
//     const monthlyTotals = {
//       Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0,
//       Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0
//     };
//     let total = 0;

//     data.forEach((expense) => {
//       const monthName = getMonthName(expense.date);
//       if (monthlyTotals.hasOwnProperty(monthName)) {
//         monthlyTotals[monthName] += expense.amount;
//       }
//       total += expense.amount;
//     });

//     setMonthlyTotals(monthlyTotals);
//     setGrandTotal(total);
//   };

//   const getMonthName = (dateString) => {
//     const date = new Date(dateString);
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     return monthNames[date.getMonth()];
//   };

//   const renderTableHeader = () => (
//     <TableHead>
//       <TableRow>
//         <TableCell>Category</TableCell>
//         {Object.keys(monthlyTotals).map((month, index) => (
//           <TableCell key={index}>{month}</TableCell>
//         ))}
//         <TableCell>Grand Total</TableCell>
//       </TableRow>
//     </TableHead>
//   );

//   const renderTableBody = () => (
//     <TableBody>
//       {categories.map((category, index) => {
//         const categoryExpenses = expenseData.filter(expense => expense.category === category.categoryId);
//         const monthlyExpenses = {
//           Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0,
//           Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0
//         };

//         categoryExpenses.forEach(expense => {
//           const monthName = getMonthName(expense.date);
//           if (monthlyExpenses.hasOwnProperty(monthName)) {
//             monthlyExpenses[monthName] += expense.amount;
//           }
//         });

//         const totalForRow = Object.values(monthlyExpenses).reduce((sum, amount) => sum + amount, 0);

//         return (
//           <TableRow key={index}>
//             <TableCell>{category.categoryName}</TableCell>
//             {Object.keys(monthlyTotals).map((month, i) => (
//               <TableCell key={i}>{monthlyExpenses[month] || ' '}</TableCell>
//             ))}
//             <TableCell>{totalForRow}</TableCell>
//           </TableRow>
//         );
//       })}
//     </TableBody>
//   );

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Sum Of Expense
//       </Typography>

//       <TableContainer component={Paper}>
//         <Table>
//           {renderTableHeader()}
//           {renderTableBody()}
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Grand Total</strong></TableCell>
//               {Object.values(monthlyTotals).map((total, i) => (
//                 <TableCell key={i}><FaIndianRupeeSign /> {total}</TableCell>
//               ))}
//               <TableCell><FaIndianRupeeSign /> {grandTotal}</TableCell>
//             </TableRow>
//           </TableHead>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

// export default Total;


import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography 
} from '@mui/material';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const categories = [
  'Salary and Compensation',
  'Profit Share',
  'Rent',
  'Utilities',
  'Corporate',
  'Books',
  'Tuition Fee',
  'Assets'
];

const data = {
  'Salary and Compensation': { July: 20000 },
  'Tuition Fee': { July: 200, Aug: 2000 }
};

const Total = () => {
  const calculateTotal = (category) => {
    return Object.values(data[category] || {}).reduce((sum, value) => sum + value, 0);
  };

  const calculateGrandTotal = () => {
    return categories.reduce((sum, category) => sum + calculateTotal(category), 0);
  };

  const formatCurrency = (amount) => {
    return amount ? `₹ ${amount}` : '';
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1200, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom component="div" sx={{ p: 2 }}>
        Sum Of Expense
      </Typography>
      <Table size="small" sx={{ '& td, & th': { border: '1px solid rgba(224, 224, 224, 1)' } }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell>Category</TableCell>
            {months.map(month => (
              <TableCell key={month} align="right">{month}</TableCell>
            ))}
            <TableCell align="right">Grand Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, index) => (
            <TableRow key={category} sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }}>
              <TableCell component="th" scope="row">{category}</TableCell>
              {months.map(month => (
                <TableCell key={month} align="right">
                  {formatCurrency(data[category]?.[month])}
                </TableCell>
              ))}
              <TableCell align="right">{formatCurrency(calculateTotal(category))}</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
            <TableCell component="th" scope="row"><strong>Grand Total</strong></TableCell>
            {months.map(month => (
              <TableCell key={month} align="right">
                <strong>
                  {formatCurrency(categories.reduce((sum, category) => sum + (data[category]?.[month] || 0), 0))}
                </strong>
              </TableCell>
            ))}
            <TableCell align="right"><strong>{formatCurrency(calculateGrandTotal())}</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Total;