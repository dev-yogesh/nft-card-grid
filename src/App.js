import React, { useState } from 'react';
import { Container, Box, Icon, IconButton } from '@material-ui/core';

import { CardList, FlipAndSort, CardPagination } from './components';

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <Container disableGutters>
      <Box>
        <FlipAndSort />
      </Box>
      <Box>
        <Box display='flex' alignItems='center'>
          <Box mr={1}>
            <IconButton
              disabled={page === 1}
              onClick={() => setPage((preVal) => setPage(preVal - 1))}
            >
              <Icon>arrow_back_ios</Icon>
            </IconButton>
          </Box>
          <Box>
            <CardList page={page} />
          </Box>
          <Box ml={1}>
            <IconButton
              disabled={page === Math.ceil(750 / 12)}
              onClick={() => setPage((preVal) => setPage(preVal + 1))}
            >
              <Icon>arrow_forward_ios</Icon>
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box>
        <CardPagination page={page} setPage={setPage} />
      </Box>
    </Container>
  );
};

export default App;
