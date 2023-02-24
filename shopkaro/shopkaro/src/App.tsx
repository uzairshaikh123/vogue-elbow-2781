
// import './App.css';
// import Signin from './Pages/Signin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './Components/Navbar';
// import Homepage from './Pages/Homepage';
import AllRoutes from './MainRoutes/AllRoutes';
// import CartPage from './Pages/CartPage';
function App() {
  return (
  <>
<div>

<Navbar />

     <GoogleOAuthProvider clientId="369991425272-n1fpb6hpeds2mp83qef46ftqih1ah03g.apps.googleusercontent.com">
     
<AllRoutes />

  </GoogleOAuthProvider>
</div>
    </>
  )

}

export default App;
