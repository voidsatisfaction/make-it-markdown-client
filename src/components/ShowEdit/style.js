import color from '../../style/color'

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    minHeight: '80vh',
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    width: 600,
    paddingLeft: '3vw',
    paddingRight: '3vw',
    color: color.fontColor,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 200,
  },
  textarea: {
    fontSize: 18,
  }
}

export default styles;