/*
=================================================================================================================
Name: Header.js
Assignment: 4
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: March 25th, 2024
=================================================================================================================
*/
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    margin: 0 auto; 
    padding: 10px; 
`;

const Styles = {
    companyinfo: {
        display: 'flex',
        alignItems: 'center',
    },

    companylogo: {
        width: '50px',
        marginRight: '10px',
    },

    companyname: {
        flex: '1',
        fontSize: '9px',
        textAlign: 'right',
    },
};

const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

function Header() {
    return (
        <HeaderWrapper>
            <div style={Styles.companyinfo}>
                <div style={Styles.companylogo}>
                    <a href="index.html">
                        <img src="images/logo.png" alt="Company Logo" width="50" />
                    </a>
                </div>
                <div style={Styles.companyname}>
                    <h1 style={{fontWeight:'normal'}}>Company Name</h1>
                </div>
            </div>
            <StyledNav>
                <a href='/'>Home</a>
                <a href='/products'>Products</a>
                <a href='/login'>Login</a>
            </StyledNav>
        </HeaderWrapper>
    );
}
export default Header;