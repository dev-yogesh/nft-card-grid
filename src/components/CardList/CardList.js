import React from 'react';
import { Box, Grid } from '@material-ui/core';

import { FrontCard, BackCard } from './components';

import { assets } from '../../utils/data';
// import { sortJsonArray } from '../../utils/utilityFunctions';
// import { useStyles } from './styles';

const CardList = ({ page }) => {
  // const classes = useStyles();

  // const PER_PAGE = 12;
  const ROWS = 3;

  // sortJsonArray(assets.assets, 'id', false);
  // sortJsonArray(assets.assets, 'name_id', false);
  // sortJsonArray(assets.assets, 'rarity_rank', true);
  // sortJsonArray(assets.assets, 'highest_offer', true);
  // sortJsonArray(assets.assets, 'owner', true);

  // sortJsonArray(assets.assets, 'name', true).reverse();

  // console.log(sortJsonArray(assets.assets, 'owner', true));

  return (
    <Box>
      <Grid container spacing={2}>
        {assets.assets
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((asset) => (
            <Grid
              item
              xs={ROWS}
              sm={ROWS}
              md={ROWS}
              lg={ROWS}
              xl={ROWS}
              key={asset.id}
            >
              <Box className='flipperContainer'>
                <Box className='flipper'>
                  <Box className='frontCard'>
                    <FrontCard asset={asset} />
                  </Box>

                  <Box className='backCard'>
                    <BackCard asset={asset} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardList;
