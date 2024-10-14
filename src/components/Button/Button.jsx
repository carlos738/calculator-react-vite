import styled from 'styled-components';
import './Button.css'

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none; react
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
