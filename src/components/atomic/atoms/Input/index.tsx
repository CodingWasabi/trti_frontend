import styled from 'styled-components';

interface IInputProps {
  width: string;
  height: string;
  fontSize?: number;
  boxShadow?: string;
  borderBottom?: string;
  textAlign?: string;
  margin?: string;
}

const Input = styled.input<IInputProps>`
  box-sizing: border-box;

  margin: ${(props) => props.margin};

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  font-size: ${(props) => props.fontSize}px;
  text-align: ${(props) => props.textAlign};

  box-shadow: ${(props) => props.boxShadow};
  border-bottom: ${(props) => props.borderBottom};
`;

Input.defaultProps = {
  fontSize: 16,
};

export default Input;
