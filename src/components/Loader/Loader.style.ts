import styled, { keyframes } from 'styled-components';

export const Wraper = styled.div`
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 100;
`;

const rotate = keyframes`
from  {   
    transform: rotate(0deg);
  }
  to {  
    transform: rotate(360deg);
  }
}
`;

export const Spiner = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-radius: 50%;
  border-top: 0.3rem solid #2c79de2c;
  border-right: 0.3rem solid #2c79de2c;
  border-bottom: 0.3rem solid #2c79de2c;
  border-left: 0.3rem solid #2c79de;
  transform: translateZ(0);
  animation: ${rotate} 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;
