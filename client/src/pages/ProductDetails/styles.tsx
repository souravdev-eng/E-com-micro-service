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
  },
  priceContainer: {
    display: 'flex',
    gap: '20px',
    margin: '2px 0px', alignItems: 'center'
  },
  box: {
    border: '1px solid #F0F0F0',
    padding: "10px 15px",
    cursor: 'pointer'
  },
  button: {
    width: '200px',
    height: '55px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer'
  },
  buttonRed: {
    backgroundColor: '#E73C17'
  },
  buttonRedOutline: {
    border: '1px solid #E73C17'
  },
  buttonText: {
    fontSize: '16px',
    fontWeight: 500,
  },
  whiteText: {
    color: '#fff',
    textTransform: 'uppercase'
  },
  redText: {
    color: '#E73C17',
    textTransform: 'uppercase'
  },
  divider: {
    border: '1px solid #F0F0F0',
    margin: '8px 0', width: '60%'
  }
});
