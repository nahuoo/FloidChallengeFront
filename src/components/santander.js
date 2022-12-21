import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Wrapper, WidgetContainer, Container, Card, Button, InputContainer, Label, Input } from "../styles"
import { checkRut } from "../utils/checkRut";

export const Santander = () => {
    const [santanderAccounts, setSantanderAccounts] = useState('')
    const [rutInput, setRutInput] = useState('')
    const [validRut, setValidRut] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const formatoRut = (valor) => {
        if (valor.match(/^\d{9}$/) !== null) {
          return valor + '-';
        }
        return valor;
      }

    const handleRutInput = (e) => {
        setValidRut(checkRut(e.target.value))
        setRutInput(formatoRut(e.target.value))
    }
    const handleclick = async () => {

        try {
            setIsLoading(true)
            const response = await axios.post('https://floidback.onrender.com/get',
                {
                    id: "11111111-1",
                    password: 1234,
                },
            )
            setSantanderAccounts(response.data);
            console.log(response.data)
            setIsLoading(false)
        } catch (error) {
            setSantanderAccounts(error);
            console.log(error)
        }
    }

    return (
        <Wrapper isLoading={isLoading}>
            <WidgetContainer>
                <Container>
                    <Link to="/">Volver a inicio</Link>
                    <img src="https://admin.floid.app/widget/assets/logos/Santander.svg" height={40} alt="" />
                    {santanderAccounts.length > 0 &&
                        santanderAccounts.map((account, index) => {
                            return (
                                <Card key={index}>
                                    <p>Tipo de cuenta: {account.type}</p>
                                    <p>Numero de cuenta: {account.number}</p>
                                    <p>Tipo de Moneda: {account.currency}</p>
                                    <p>Balance: {account.balance}</p>
                                </Card>
                            )
                        })}
                    {santanderAccounts.length === 0 &&
                        <>
                            <InputContainer>
                                <Label rutInput>Ingresa tu RUT</Label>
                                <Input name="rut" type="text" required onChange={handleRutInput} value={rutInput} maxLength={11} />
                                <p>{validRut}</p>
                            </InputContainer>
                            <InputContainer>
                                <Label password>Contraseña</Label>
                                <Input name="password" type="password" required onChange={e => setPassword(e.target.value)} />
                            </InputContainer>
                            <Button onClick={handleclick} >{isLoading ? '...' : 'Continuar al sandBox'}</Button>
                        </>
                    }

                    <img src="https://admin.floid.app/widget/assets/img/Logo_floid.svg" alt="" />
                </Container>
            </WidgetContainer>
        </Wrapper>
    )
}
