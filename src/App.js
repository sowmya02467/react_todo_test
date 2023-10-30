
import './App.css';
import Input1 from './Components/Input1';
import Input2 from './Components/Input2';
import { useState } from 'react';
function App() {

 const[todos, setTodos] = useState([]);

 const addNewTodos = (newTodos) =>{
  setTodos([...todos, newTodos]);
 };


 const deleteTodos = (itemsDeleteTodos) =>{
    const filteredTodos = todos.filter((item) => item !== itemsDeleteTodos);
    setTodos(filteredTodos)
 }


  return (
   
    <div className="App" style = {{backgroundColor:'#B2EBF2', height:'33rem', margin:'20px 30px'}}>
      <h1 style={{textAlign:'center', marginTop:'2rem', }}>TODO TASK</h1>
      <Input1 addNewTodos = {addNewTodos}  style= {{margin :'3rem'}} />
    <Input2  todos = {todos} deleteTodos = {deleteTodos}/>


    </div>
  );
}

export default App;
