import './App.css';
import Routing from './App_Routing/Routing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
    <Routing/>
    </>
  );
}

export default App;
