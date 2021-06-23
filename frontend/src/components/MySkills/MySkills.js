import React from 'react';
import styled from 'styled-components';

const DesktopContainer = styled.div`
    @media only screen and (max-width: 699px) {
        display: none;
    }
`

const MobileContainer = styled.div`
    @media only screen and (min-width: 700px) {
        display: none;
    }
`

const MySkills = () => {
    return (
        <>
            <DesktopContainer><MyHabitsDesktop /> </DesktopContainer>
            <MobileContainer><h1 className='test'>Mobile</h1></MobileContainer>
        </>
    );
   
};

export default MySkills;