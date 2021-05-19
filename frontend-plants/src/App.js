
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
// const logout = () => {
//   localStorage.removeItem('token')
// }
function App() {
  return (
    <div className="App">
      
      Water Plants App
      {/* <button onClick={()=>}</button> */}
      <Login />
      <Signup />
      
    </div>
  );
}

export default App;
