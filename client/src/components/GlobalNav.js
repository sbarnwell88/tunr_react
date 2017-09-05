import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5%;
    background-color: rgba(2, 178, 208, 1);
    box-shadow: 2px 0px 15px black;
    a {
        text-decoration: none;
        margin: 0 5px;
        &:visited {
            color: white;
        }
    }
`

class GlobalNav extends Component {
    render() {
        return (
            <Nav>
                <Link to='/'>
                    <h1>Tunr</h1>
                </Link>
                <div>
                    <Link to='/artist/1' >Artists</Link>
                    <Link to='/signup' >Sign up!</Link>
                </div>
            </Nav>
        );
    }
}

export default GlobalNav;