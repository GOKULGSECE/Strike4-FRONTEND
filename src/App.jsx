import Login from './components/Login';
import SignUp from './components/SignUp';
import Homepage from './component/homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PreferencesForm from './component/PreferencesForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/preference" element={<PreferencesForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
