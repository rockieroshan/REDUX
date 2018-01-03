import React from 'react';
import { connect } from 'react-redux';

class UserDetails extends React.Component {
  render(){
    if (!this.props.user){
      return(<h4>Select a user...</h4>)
    }
    return(
      <div>
      <h1>{this.props.user.title}</h1>
      <h1>{this.props.user.body}</h1>
     </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.activeuser
  }
}

export default connect(mapStateToProps)(UserDetails);