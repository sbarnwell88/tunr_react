import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: []
        }
    }

    _userInfo = async () => {
        try {
            const response = await axios.get('/api/profile');
            const user = response.data;
            this.setState({ user })
        } catch (err) {
            this.setState({error: err})
        }
    }

    render() {
        return (
            <div>
                {this.state.user.map((user) => {
                    <UserInfo key={user.id} user={user} />
                })}
            </div>
        );
    }
}

export default Profile;