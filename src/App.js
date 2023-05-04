import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import CountingClassBase from './classComponents/CountingClassBase';
import CountingFunctional from './functionalComponents/CountingFunctional';
import MousePositionClassBase from './classComponents/MousePositionClassBase';
import MousePositionFunctional from './functionalComponents/MousePositionFunctional';
import CounterClassBase from './classComponents/CounterClassBase';
import CounterFunctional from './functionalComponents/CounterFunctional';
import FetchingData from './functionalComponents/FetchingData';
import User from './functionalComponents/User';

function App() {
  return (
 <>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/counting-classbase' element={<CountingClassBase/>} />
      <Route path='/counting-functional' element={<CountingFunctional/>} />
      <Route path='/mouse-position-classbase' element={<MousePositionClassBase/>}/>
      <Route path='/mouse-position-functional' element={<MousePositionFunctional/>} />
      <Route path='/counter-classbase' element={<CounterClassBase/>} />
      <Route path='/counter-functional' element={<CounterFunctional/>} />
      <Route path='/fetching-data' element={<FetchingData/>} />
      <Route path='/fetching-data/:id' element={<User/>}/>
    </Routes>

 </>
  );
}

export default App;
