import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0px; 
  left: 0px; 
  width: 100vw;
  height: 100vh;
  background: -webkit-linear-gradient(290deg, rgba(10, 27, 32, 0.75), rgba(22, 6, 29, 0.75));
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  cursor: pointer;
`;

export const Modal = styled.div`
  height: 650px;
  width: 700px;
  background: -webkit-linear-gradient(290deg, rgb(40, 40, 40), rgb(20, 20, 20));
  border-radius: 10px;
  box-shadow: 20px 10px 50px rgba(5, 5, 5, 0.6);
  &:hover {
    cursor: default;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const Form = styled.form`
  line-height: 1.75;
`;

export const Label = styled.label`
  font-size: 25px;
  margin-left: 15%;
`;

export const Input = styled.input`
  margin-left: 15%;
  width: 50%;
  height: 30px;
  background: -webkit-linear-gradient(290deg, rgba(10, 27, 32, 0.25), rgba(22, 6, 29, 0.25));
  color: rgb(140, 140, 140);
  font-size: 17px;
  font-family: "QuickSand";
  border: 2px solid rgb(40, 40, 40);
  border-radius: 5px;
  padding: 5px;
`;

export const InputMsg = styled.textarea`
  margin-left: 15%;
  margin-bottom: 20px;
  width: 70%;
  height: 200px;
  resize: none;
  background: -webkit-linear-gradient(290deg, rgba(10, 27, 32, 0.25), rgba(22, 6, 29, 0.25));
  color: rgb(140, 140, 140);
  font-size: 17px;
  font-family: "QuickSand";
  border: 2px solid rgb(40, 40, 40);
  border-radius: 5px;
  padding: 5px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 80%;
  background-color: rgb(60, 60, 60);
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px
`;