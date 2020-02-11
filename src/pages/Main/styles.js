import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  position: relative;

  input {
    flex: 1;
    height: 50px;
    background: #fff;
    padding: 0 20px;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    /* tratamento de props direto no css */
    border: ${props => (props.withError ? '2px solid #ef484a' : 0)};
    &:disabled {
      background-color: #d0d0d0;
    }
  }

  .error {
    opacity: ${props => (props.withError ? '1' : '0')};
    width: auto;
    padding: 15px 30px;
    background-color: #ef484a;
    position: absolute;
    left: 0;
    top: 60px;
    color: #fff;
    text-align: CENTER;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  button {
    height: 50px;
    width: 80px;
    padding: 0 20px;
    margin-left: 10px;
    background-color: #ef484a;
    color: #fff;
    font-size: 20px;
    border: 0;
    font-weight: bold;
    border-radius: 3px;
    &:hover {
      background-color: #d61114;
    }
  }
`;
