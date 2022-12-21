import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fcf7f6;
    height: 100vh;
    width: 100vw;
    transition: 1s;
    opacity: ${props => props.isLoading ? 0 : 1};
`
export const WidgetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: white;
    padding: 1rem;
    border: #f1f1f1 1px solid ;
    transition: 0.3s;
    height: ${props => props.santanderAccounts ? 'auto' : '90vh'};
    width: 30vw;
    font-size: 1.2rem;

`

export const Gray = styled.div`
   color: gray;
   font-size: 0.8rem;
`

export const Button = styled(Link)`
   background: #182750;
   text-decoration:none;
   padding: 1.4rem;
   border-radius: 2%;
   color: white;
   width: 90%;
   cursor: pointer;
   transition: 0.3s;
   :hover{
    background: #2b4a9e;
   }
`

export const Card = styled.div`
   background: #eceef3;
   padding: 1rem;
   margin: 0.5rem;
   border-radius: 2%;
   width: 90%;
   height: auto;
   transition: 0.3s;
   font-size: 0.8rem;
   :hover{
    background: #e9eaea;
   }
`

export const Input = styled.input`
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;

  :focus{
    outline:none;
  }
  :focus ~ label{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

  :valid ~ label{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}
`
export const Label = styled.label`
color:#999; 
  font-size:${props => (props.rutInput !== '') ? '14px' : '10px' };;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top: ${props => (props.rutInput !== '') ? '-20px' : '10px' };
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;

`

export const InputContainer = styled.div`
    position:relative; 
    margin-bottom:45px; 
`