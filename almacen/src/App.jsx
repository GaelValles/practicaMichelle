import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import ProtectedRoute from "./protectedRoutes";
import Insertproduct from './pages/Insertproduct';
import Insertdealer from './pages/Insertdealer';
import { AuthProvider } from './components/AuthContext';
function app() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/insertproduct" element={<Insertproduct />} />
            <Route path="/insertdealer" element={<Insertdealer />} />
          </Route>
        
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default app;