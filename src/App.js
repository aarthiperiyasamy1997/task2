import { Manus } from "./Navi";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Commit, Goal } from "./Mypairs";
import { NewAccount } from "./Signup";
import { Login } from "./login";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Manus/>
    <Routes>
    <Route path='/' exact element={<Login/>}/>
     {/* <Route path='/sign' exact element={<NewAccount/>}/> */}
      <Route path='/Two/:sweet' exact element={<Goal/>}/>
      <Route path='/Three' exact element={<Commit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;