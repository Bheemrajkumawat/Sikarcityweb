import Routingpages from "./routes/Routingpages";
import ScrollToTop from "./utils/ScrollToTop";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <ScrollToTop />
      <Routingpages />
    </LoadingProvider>
  );
}

export default App;
