import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const CardPagination = ({ page, setPage }) => {
  return (
    <Box display='flex' justifyContent='space-between' p={2} px={7} pt={2.5}>
      <Box display='flex'>
        <Box mr={1}>
          <Button variant='contained' disableElevation size='small'>
            12 Per Page
          </Button>
        </Box>

        <Box>
          <Button variant='contained' disableElevation size='small'>
            6 Rows
          </Button>
        </Box>
      </Box>
      <Box>
        <Pagination
          showFirstButton
          showLastButton
          count={Math.ceil(750 / 12)}
          variant='outlined'
          shape='rounded'
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
};

export default CardPagination;
