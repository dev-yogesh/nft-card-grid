import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const FrontCard = ({ asset }) => {
  const classes = useStyles();

  return (
    <Card raised>
      <CardMedia
        image={asset.image}
        component='img'
        height='300px'
        width='auto'
      />

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

export default FrontCard;
