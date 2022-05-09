import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core';
import { useStyles } from './styles';

const BackCard = ({ asset }) => {
  const classes = useStyles();

  return (
    <Card raised classes={{ root: classes.cardContainer }}>
      <CardMedia
        image={asset.image}
        component='img'
        height='120px'
        width='auto'
      />

      <Box position='absolute' top='0' width='100%'>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='flex-end'
          px={0.5}
        >
          <Box>
            <img
              src={asset.image}
              alt='avatar'
              height='120'
              width='120'
              style={{
                borderRadius: '50%',
                padding: '0.5rem',
                backgroundColor: '#fff',
              }}
            />
          </Box>
          <Box textAlign='right'>
            <Typography>Woment and Weapons</Typography>
            <Typography>{asset.name}</Typography>
          </Box>
        </Box>
      </Box>

      <CardContent>
        <Typography color='primary' variant='subtitle1'>
          {asset.name}
        </Typography>

        <Typography
          color='textSecondary'
          variant='subtitle2'
          classes={{ root: classes.ownerText }}
        >
          {`Owner: ${asset.owner ? asset.owner : '-'}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BackCard;
