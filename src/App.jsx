import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Signin from './Components/SignIn/Signin';
import Signup from './Components/SignUp/Signup';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
         </Routes>
      </>
   );
};
 
export default App;