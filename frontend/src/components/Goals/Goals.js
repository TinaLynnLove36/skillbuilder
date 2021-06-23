import React, {useEffect} from 'react';
import styled from 'styled-components';
import {getGoals} from './GoalsSlice';
import { useDispatch } from 'react-redux';

const GoalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 45px;
`;
const GoalHeader = styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 45px;
`;
const TitleSection = styled.div`
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 30px;
        
`;
const AddGoalButton = styled.div`
    text-transform: uppercase;
    display: flex;
    align-items: center;
    img {
        max-width: 18px;
        margin-width: 8px;
    }
`;

const GoalRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
    :last-child {
        margin-bottom: 0
    }
`;

const Name = styled.div`
    text-transform: uppercase;
`;

const Action = styled.div`
    display: flex;
    align-items: center;
    img {
        max-width: 20px;
        margin-right: 8px;
        :last-child {
            margin: 0;
        }
    }
`;



const Goals = () => {
           const AllGoals = [
        { id: 0, name: "master excel" },
        { id: 1, name: "tackle HTML" },
        { id: 2, name: "review resume tips" },
        { id: 3, name: "practice interview skills" },
        ];


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGoals())
    }, [dispatch])
 
    return (
 
        <>
            <GoalsContainer>
                <GoalHeader>
                    <TitleSection>Goals</TitleSection>
                    <AddGoalButton><img src="/add.png" alt="add-goal-button"/>add a goal</AddGoalButton>
               
                </GoalHeader>
                     {AllGoals.map((goal, index) => (
                        <GoalRow key={`goal-number-` + index}>
                            <Name>{goal.name}</Name>
                            <Action><img src="/edit.png" alt="edit-goal-button"/><img src="/delete.png" alt="delete-goal-button"/></Action>
                        </GoalRow>
                    ))}

            </GoalsContainer>
        </>
    );
   
};

export default Goals;