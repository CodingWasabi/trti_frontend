import styled from 'styled-components';

interface IInputProps {
  width: string;
  height: string;
  fontSize?: string;
}

const Input = styled.input<IInputProps>`
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  padding-left: 10px;
`;

Input.defaultProps = {
  fontSize: '16px',
};

export default Input;
