import React from 'react';
import { connect } from 'react-redux';
import { getAllUsersRequest, getUserRequest, deleteUserRequest, addUserRequest } from '../actions/getUsersActions'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.dispatch(getAllUsersRequest());
    this.props.dispatch(getUserRequest(4));
    // this.props.dispatch(deleteUserRequest(1));
    // this.props.dispatch(addUserRequest({
    //   "userId":4,
    //   "name":"test4",
    //   "email":"test4@gmail.com"
    // }));
  }

  render() {
    return (
     <div>
         {this.props.users?this.props.users.map(item=>{
           return (
              <div>
                {item.name}
              </div>
           )
         }):""}
         {this.props.user?
            <div>
              Current User {this.props.user.name}
            </div>
         :""}
     </div>
    );
  }  
}

const mapStateToProps = ({ users }) => ({
  users: users.users,
  user: users.user
});

export default connect(mapStateToProps)(Home);