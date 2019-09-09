import { connect } from 'react-redux';
import Visualizer from '../../Visualizer';

const mapStateToProps = state => {
  return {
    lines: state.lineCollection,
  }
}

export default connect(
  mapStateToProps,
  null
)(Visualizer);