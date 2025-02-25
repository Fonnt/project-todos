import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, OuterWrapper } from 'styles/ProjectStyles';
import TaskFilters from './TaskFilters';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskCounter from './TaskCounter';
import Header from './Header';

const Card = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <CardWrapper>
          <Header />
          <TaskInput />
          <TaskFilters />
          <TaskCounter />
          <TaskList />
        </CardWrapper>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Card;

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;  
  height: auto;
  padding: 5vh; 
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
`
