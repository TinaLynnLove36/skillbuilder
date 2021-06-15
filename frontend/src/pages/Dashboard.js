import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

const Dashboard = ({ location }) => {
    const { code } = queryString.parse(location.search);
    
    const [skillData, setSkillData] = useState("none");

    useEffect(() => {
        fetch(`http:localhost:3001/skillbuilder?code=${code}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }   
        })
        .then(res => res.json())
        .then(res => setSkillData(JSON.stringify(res)))
    }, [code]);

    return (
        <>
            <h1 className='dashboard'>{skillData}</h1>
        </>
    );
}

export default Dashboard;