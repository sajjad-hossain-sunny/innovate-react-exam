import { 
  Banner, 
  PlatformUsage, 
  Intergration,
  Services
} from "./components";
import { Navbar } from "./core";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <PlatformUsage />
      <Intergration />
      <Services />
    </>
  );
}

export default App;
