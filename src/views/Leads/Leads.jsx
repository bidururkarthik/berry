import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';

const initialCardData = [
  { id: 1, title: 'Karthik', description: 'Full', date: '2024-09-01', status: 'Open' },
  { id: 2, title: 'Kavan', description: 'Full', date: '2024-09-02', status: 'Closed' },
  { id: 3, title: 'Appu', description: 'Full', date: '2024-09-03', status: 'Pending' },
];

const Leads = () => {
  const [cardData, setCardData] = useState(initialCardData);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newCard, setNewCard] = useState({ title: '', description: '', date: '', status: '' });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCard = () => {
    const newCardData = {
      id: cardData.length + 1,
      title: newCard.title,
      description: newCard.description,
      date: newCard.date,
      status: newCard.status,
    };
    setCardData([...cardData, newCardData]);
    setNewCard({ title: '', description: '', date: '', status: '' });
    setIsDialogOpen(false); // Close the dialog after adding
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDeleteCard = (id) => {
    setCardData(cardData.filter((card) => card.id !== id));
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      {/* Card List on the left */}
      <Grid container spacing={2} sx={{ width: '30%' }}>
        <Grid item xs={9}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleOpenDialog} fullWidth>
            Add
          </Button>
        </Grid>
        {filteredCards.map((card) => (
          <Grid item xs={12} key={card.id}>
            <Card
              onClick={() => handleCardClick(card)}
              sx={{
                cursor: 'pointer',
                border: '2px solid #1976d2',
                
              }}
            >
              <CardContent>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item xs={9}>
                    <Typography variant="h6">{card.title}</Typography>
                    <Typography variant="body2"><MilitaryTechOutlinedIcon/>Status: {card.status}</Typography>
                    <Typography variant="body2"><DateRangeOutlinedIcon/>Date: {card.date}</Typography>
                    <Typography variant="body2"><ManageHistoryOutlinedIcon/>{card.description}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <IconButton onClick={() => console.log('Edit button clicked')}>
                      <Edit sx={{ color: '#1976d2' }} /> {/* Green edit icon */}
                    </IconButton>
                    <IconButton onClick={() => handleDeleteCard(card.id)}>
                      <Delete sx={{ color: '#f44336' }} /> {/* Red delete icon */}
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Side Panel on the right */}
      <Paper
        elevation={3}
        sx={{
          width: '70%',
          ml: 2,
          p: 2,
          border: '2px solid #1976d2', // Blue border for the side panel
        }}
      >
        {selectedCard ? (
          <>
            <Typography variant="h5" gutterBottom>
              {selectedCard.title}
            </Typography>
            <Typography variant="body1">Status: {selectedCard.status}</Typography>
            <Typography variant="body1">Date Acquired: {selectedCard.date}</Typography>
            <Typography variant="body1">{selectedCard.description}</Typography>
          </>
        ) : (
          <Box sx={{ textAlign: 'center' }}>
          <img src="https://img.freepik.com/free-vector/preferences-concept-illustration_114360-1384.jpg?w=740&t=st=1725601603~exp=1725602203~hmac=2c35ffe32619162c35800f57e5ef4362a8657b082669a3976b9a6b960f56736c" alt="Select a card" style={{ width: '100%', maxWidth: '400px' }} />
          <Typography variant="body1">Select a card to view details.</Typography>
        </Box>
        )}
      </Paper>

      {/* Dialog for adding a new card */}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Add New Card</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={newCard.title}
            onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={newCard.description}
            onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Date Acquired"
            variant="outlined"
            fullWidth
            value={newCard.date}
            onChange={(e) => setNewCard({ ...newCard, date: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Status"
            variant="outlined"
            fullWidth
            value={newCard.status}
            onChange={(e) => setNewCard({ ...newCard, status: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleAddCard}>
            Add Card
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Leads;
