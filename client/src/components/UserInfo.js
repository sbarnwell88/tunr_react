import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div>
                User's Name: {this.state.user.name}
                User's Email: {this.state.user.email}
            </div>
        );
    }
}

export default UserInfo;