import Mainapp from "./Mainapp";
import {Routes, Route} from 'react-router-dom'
import Dineroli from "./pages/dineroli/Dineroli";
import Form from "./pages/form/Form";
import Crypto from "./pages/dineroli/component/Crypto";
import Defi from "./pages/dineroli/component/Defi";
import Nft from "./pages/dineroli/component/Nft";
import Original from "./pages/dineroli/component/Original";
function App() {
  return (
    <Routes>
          <Route path='/' element={<Mainapp />}/>
          <Route path='/dineroli' element={<Dineroli/>} />
          <Route path='/dineroli/cryptobasic' element={<Crypto />}/>
          <Route path='/dineroli/defi' element={<Defi />}/>
          <Route path='/dineroli/nftbasic' element={<Nft />}/>
          <Route path='/dineroli/originals' element={<Original />}/>
          <Route path='/form' element={<Form/>}/>
      </Routes>
  );
}

export default App;
