import './Input.css';
import { styled } from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

// eslint-disable-next-line react/prop-types
const Input = ({ value,onChange,placeholder }) => {
  return <StyledInput value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;
