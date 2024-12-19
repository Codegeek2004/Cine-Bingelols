import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 100,
        background: 'linear-gradient(180deg, #DC143C, #B22222)', // Same gradient as header
        borderTop: '2px solid #FFD700', // Yellow border line at the top
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background: 'transparent', // Ensure it uses the Box background
          color: '#FFFFFF', // White text/icons for contrast
        }}
      >
        <BottomNavigationAction
          label="Trending"
          icon={<WhatshotIcon />}
          sx={{ color: '#FFFFFF' }} // Icon and label color
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          sx={{ color: '#FFFFFF' }}
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieIcon />}
          sx={{ color: '#FFFFFF' }}
        />

        <BottomNavigationAction
          label="TV Series"
          icon={<TvIcon />}
          sx={{ color: '#FFFFFF' }}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          sx={{ color: '#FFFFFF' }}
        />
      </BottomNavigation>
    </Box>
  );
}
