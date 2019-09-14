import { connect } from 'react-redux';
import Stats from '../../Options/Stats';

const mapStateToProps = state => {
  let { comparisonCount, swapCount } = state;
  return {
    swapCount,
    comparisonCount,
  }
}

export default connect(
  mapStateToProps,
  null
)(Stats);