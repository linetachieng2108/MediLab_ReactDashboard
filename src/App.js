import './App.css';
import "./bootstrap.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTest from './components/AddTest';
import Dashboard from './components/Dashboard';
import AddPatient from './components/AddPatient';
import AddNurse from './components/AddNurse';
import AddBooking from './components/AddBooking';
import AddLocation from './components/AddLocation';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <AddTest/> */}
      <Routes>
        <Route path='/add_test' element={<AddTest/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/add_patient' element={<AddPatient/>}/>
        <Route path='/add_nurse' element={<AddNurse/>}/>
        <Route path='/add_booking' element={<AddBooking/>}/>
        <Route path='/add_location' element={<AddLocation/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
