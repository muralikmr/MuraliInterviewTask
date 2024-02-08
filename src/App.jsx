
 import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Registration from './InterviewAssignment/Registration';
import Login from './InterviewAssignment/Login';
import Fetching from './InterviewAssignment/Fetching';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="./login" element={<Login/>}/>
        <Route path="./fetching" element={<Fetching/>}/>
      </Routes>


    </Router>
      
    </>
  );
};



export default App;







