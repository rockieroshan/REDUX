import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {selectUser} from '../Actions/index';


class UserList extends React.Component{
  showMe(){
    return this.props.users.map((user) => {
      return (<li key={user.id} onClick={() =>this.props.selectUser(user)}>{user.title}</li>
      )
    }
    )
      
  
  }
    render(){
      return(
        <div>
          <ul>
            {this.showMe()}
          </ul>
        </div>
      );
    }
}  

const mapStateToProps = (state) => {
  return{
      users:state.users
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectUser: selectUser }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
