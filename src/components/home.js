import { useState } from "react"
import styled from "styled-components"
import axios from "axios"

export const Home = () =>  {
    const [santanderAccounts, setSantanderAccounts ] = useState('')

    const handleclick = async () => {
       const response = await axios.post('https://floidback.onrender.com/get',
        {
            id: "11111111-1",
            password: 1234,
        })

        setSantanderAccounts(response[0]);
    }
  
    if (santanderAccounts) return (
        <Container>{santanderAccounts.map(account => (
            <>
            <div>{account.type}</div>
            <div>{account.number}</div>
            <div>{account.currency}</div>
            <div>{account.balance}</div>
            </>
            ))}
        </Container>
    )
     return (
        <Container>
            <img src="https://admin.floid.app/widget/assets/logos_clientes/Floid-Logo-circulo.png" height={80} alt="" />
            <h1>Comparte tu información bancaria con <b>Floid</b> usando tus credenciales.</h1>
            <Gray>La información viaja encriptada de extremo a extremo.</Gray>
            <Gray>Tus datos te pertenecen y serán compartidos sólo con Floid.</Gray>
            <Button onClick={handleclick} >Comenzar</Button>
            <img src="https://admin.floid.app/widget/assets/img/Logo_floid.svg" alt="" />
        </Container>
    )
}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: white;
    padding: 1rem;
    border: #f1f1f1 1px solid ;
    height: 90vh;
    width: 30vw;
    font-size: 1.2rem;

`

const Gray = styled.div `
   color: gray;
   font-size: 0.8rem;
`

const Button = styled.button`
   background: #182750;
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