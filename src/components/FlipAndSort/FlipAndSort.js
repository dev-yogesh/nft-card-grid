import React, { useState } from 'react';
import {
  Box,
  Select,
  MenuItem,
  Button,
  FormControl,
  Typography,
  IconButton,
  Icon,
} from '@material-ui/core';

import { useStyles } from './styles';

const FlipAndSort = () => {
  const classes = useStyles();
  const [sortBy, setSoryBy] = useState('id');
  const [isSortOrderDesc, setIsSortOrderDesc] = useState(true);

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      p={2}
      px={0}
      width='91%'
      margin='auto'
    >
      <Box marginLeft='45%'>
        <Button variant='contained' disableElevation size='small'>
          Flip Cards
        </Button>
      </Box>
      <Box display='flex' alignItems='center'>
        <Box>
          <FormControl variant='filled' size='small'>
            <Select
              disableUnderline
              displayEmpty
              value={`${sortBy}`}
              onChange={(e) => setSoryBy(e.target.value)}
              renderValue={(value) => {
                const formatedValue = value.replace('_', ' ');
                return (
                  <Typography variant='button'>{`Sort By ${formatedValue}`}</Typography>
                );
              }}
              classes={{ filled: classes.filledSelect }}
            >
              <MenuItem value='id'>ID</MenuItem>
              <MenuItem value='name_id'>Name ID</MenuItem>
              <MenuItem value='name'>Name</MenuItem>
              <MenuItem value='owner'>Owner</MenuItem>
              <MenuItem value='rarity_rank'>Rarity Rank</MenuItem>
              <MenuItem value='highest_offer'>Highest Offer</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box ml={0.5}>
          <IconButton
            size='small'
            onClick={() => setIsSortOrderDesc(!isSortOrderDesc)}
          >
            <Icon fontSize='small'>
              {isSortOrderDesc ? 'arrow_downward' : 'arrow_upward'}
            </Icon>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default FlipAndSort;
