import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    padding: '60px 80px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '60px',
  },
  listImageContainer: {
    width: 150,
    height: 130,
    border: '1px solid #F0F0F0',
    margin: '0px 0px 14px 0px',
    padding: 10,
  },
  imageSmall: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  imageBigContainer: {
    width: '500px',
    height: '550px',
    backgroundColor: '#F1F1F1',
    display: 'flex',
    justifyContent: 'center',
  },
  imageBig: {
    width: '70%',
    alignContent: 'center',
    objectFit: 'contain',
    alignSelf: 'center',
  },
  descriptionContainer: {
    width: '800px',
    // border: '1px solid #555',
  },
});
