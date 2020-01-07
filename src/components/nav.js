import React from 'react';
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleItemClick = this.handleItemClick.bind(this);
    }
    
    handleItemClick = (name,path) => {
        this.setState({ activeItem: name })
        this.props.history.push(path);
    }

    componentDidMount(){}
  
    render() {
      const { activeItem } = this.state;
      return (
        <Menu stackable>
            <Menu.Item>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' />
            </Menu.Item>

            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={(e)=>this.handleItemClick('home','/')}
            >
                Home
            </Menu.Item>

            <Menu.Item
                name='main'
                active={activeItem === 'main'}
                onClick={(e)=>this.handleItemClick('main','/main')}
            >
                Main
            </Menu.Item>
        </Menu>
      );
    }
  
}

export default withRouter(Nav);