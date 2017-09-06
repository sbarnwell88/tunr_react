import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class NewArtist extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            photo_url: '',
            nationality: '',
            redirect: false
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    _newArtist = async (e) => {
        e.preventDefault();
        const payload = {
            name: this.state.name,
            photo_url: this.state.photo_url,
            nationality: this.state.nationality
        }
        const res = await axios.post('/api/artists', payload);
        this.setState({
                    name: res.data.name,
                    photo_url: res.data.photo_url,
                    nationality: res.data.nationality, 
                    redirect: true
                }) 
                console.log(res.data);
    }

    render() {
    if (this.state.redirect){
        return <Redirect to="/" />
   }
        return (
            <div>
        <form onSubmit={this._newArtist}>
            <div>
                <label htmlFor="name">Artist Name: </label>
                <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
            </div>
            <div>
                <label htmlFor="photo_url">Photo URL: </label>
                <input onChange={this._handleChange} type="text" name="photo_url" value={this.state.photo_url} />
            </div>
            <div>
                <label htmlFor="nationality">Nationality: </label>
                <input onChange={this._handleChange} type="text" name="nationality" value={this.state.nationality} />
            </div>
            
            <button>Create New Band</button>
        </form>
            </div>
        );
    }
}

export default NewArtist;