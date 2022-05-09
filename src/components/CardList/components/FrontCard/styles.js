import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  cardMediaRoot: {
    paddingTop: 'calc((512 / 512) * 100%)',
  },

  ownerText: {
    width: '150px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});
