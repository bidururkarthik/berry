import React, { useState } from "react";
import { TextField, Button, Grid, MenuItem, Box, Typography } from "@mui/material";

const Student = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
    phone: "",
    gender: "",
    address: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5,border: "1px solid",borderColor: "primary.main",borderRadius: 2,p: 3 }}>
      <Typography variant="h3" component="h3" gutterBottom align="left">
        Student Registration Form
      </Typography>
      <hr/>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" mt={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Phone No"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              type="tel"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              fullWidth
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" mt={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              multiline
              rows={1}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={4} sm={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Student;