import React, { Component } from 'react';
import axios from 'axios';
import ArtistsCard from './ArtistCard';
import styled from 'styled-components';

const ArtistListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
` 


class AllArtists extends Component {
    constructor() {
        super();
        this.state = {
            artists: []
        }
    }

    componentWillMount() {
        this._fetchArtists();
    }

    _fetchArtists = async () => {
        try {
            const response = await axios.get('/api/artists');
            const artists = response.data;
            this.setState({artists});
        } catch (err) {
            this.setState({error: err})
        }
    }

    render() {
        return (
            <ArtistListStyles>
                {this.state.artists.map((artist) => (
                        <ArtistsCard key={artist.id} artist={artist} />
                    )
                )}
            </ArtistListStyles>
        );
    }
}

export default AllArtists;