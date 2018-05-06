// Library
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Redux
import * as ProductActions from './product.actions';
  
function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ProductActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
