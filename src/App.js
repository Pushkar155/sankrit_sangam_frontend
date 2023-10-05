import './App.css';
import Quiz from './components/Quiz/Quiz';
import Question from './components/Questions/Question';
import Finalpage from './components/FianlPage/Finalpage';
import Unit from './components/unitselectionpage/Unit';
import { AuthProvider } from './AuthContext';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Quiz/>}/>
          <Route exact path="/unit" element={<Unit/>}/>
          <Route exact path="/questions" element={<Question/>}/>
          <Route exact path="/final" element={<Finalpage/>}/>
        </Routes>
            {/* <Question/> */}
            {/* <Unit/> */}
            {/* <Finalpage/> */}
      </div>
    </AuthProvider>
    
  );
}

export default App;
