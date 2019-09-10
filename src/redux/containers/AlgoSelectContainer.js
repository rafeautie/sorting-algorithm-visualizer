import { connect } from 'react-redux';
import AlgoSelect from '../../Options/AlgoSelect';

const mapStateToProps = state => {
  return {
    lines: state.lineCollection,
  }
}

export default connect(
  mapStateToProps,
  null
)(AlgoSelect);