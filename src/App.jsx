import { 
  Banner, 
  PlatformUsage, 
  Intergration
} from "./components";
import { Navbar } from "./core";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <PlatformUsage />
      <Intergration />
    </>
  );
}

export default App;
