import React from 'react';
import { connect } from 'react-redux';
import { getAllUsersRequest, getUserRequest } from '../actions/getUsersActions'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.dispatch(getAllUsersRequest());
    this.props.dispatch(getUserRequest(1));
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