import styled from "styled-components"
import { Home } from "./components/home"

function App() {
  return (
    <Wrapper>
      <Container>
        <Home />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fcf7f6;
    height: 100vh;
    width: 100vw;
`
const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`
export default App;
