import React, { useState } from "react";
import { TextField, Button, Grid, MenuItem, Box, Typography, InputAdornment } from "@mui/material";

const Expense = () => {
  const [formData, setFormData] = useState({
    expenseId: "",
    date: "",
    category: "",
    subcategory: "",
    amount: "",
    description: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      expenseId: "",
      date: "",
      category: "",
      subcategory: "",
      amount: "",
      description: "",
      remarks: "",
    });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, border: "1px solid", borderColor: "primary.main", borderRadius: 2, p: 3 }}>
      <Typography variant="h3" component="h3" gutterBottom align="left">
        Expense Form
      </Typography>
      <hr />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Expense ID"
              name="expenseId"
              value={formData.expenseId}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Transportation">Transportation</MenuItem>
              <MenuItem value="Utilities">Utilities</MenuItem>
              {/* Add more categories as needed */}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Subcategory"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              required
            >
              <MenuItem value="Groceries">Groceries</MenuItem>
              <MenuItem value="Gas">Gas</MenuItem>
              <MenuItem value="Electricity">Electricity</MenuItem>
              {/* Add more subcategories as needed */}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12}  mt={2}>
            <Box sx={{ display: 'flex' }}>
                <Button variant="contained" color="primary" type="submit">
                Submit
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleCancel} sx={{ ml: 2 }}>
                Cancel
                </Button>
            </Box>
          </Grid>

        </Grid>
      </form>
    </Box>
  );
};

export default Expense;
