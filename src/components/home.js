import { Container, Gray, Button } from "../styles"

export const Home = () => {

  return (
    <Container>
      <img src="https://admin.floid.app/widget/assets/logos_clientes/Floid-Logo-circulo.png" height={80} alt="" />
      <h1>Comparte tu información bancaria con <b>Floid</b> usando tus credenciales.</h1>
      <Gray>La información viaja encriptada de extremo a extremo.</Gray>
      <Gray>Tus datos te pertenecen y serán compartidos sólo con Floid.</Gray>
      <Button to="/santander">Comenzar con Santander</Button>
      <img src="https://admin.floid.app/widget/assets/img/Logo_floid.svg" alt="" />
    </Container>
  )
}