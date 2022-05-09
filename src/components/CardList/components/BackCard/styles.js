import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  cardContainer: {
    minHeight: '100%',
    position: 'relative',
  },

  cardMediaRoot: {
    paddingTop: 'calc((1280 / 720) * 100%)',
  },

  ownerText: {
    width: '150px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});
