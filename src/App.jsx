import './App.css'
import Body from './components/Body/Body'
import Header from './components/Header/Header'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header></Header>
      <Body></Body>
      <ToastContainer />
    </>
  )
}

export default App
