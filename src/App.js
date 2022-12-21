import { Wrapper, WidgetContainer } from "./styles"
import { Home } from "./components/home"

function App() {
  return (
    <Wrapper>
      <WidgetContainer>
        <Home />
      </WidgetContainer>
    </Wrapper>
  );
}

export default App;
