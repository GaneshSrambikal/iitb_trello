
import './App.css';
import Brand from './components/Brand';
import TodoContainer from './components/Todos/TodoContainer';

function App() {
  return (
    <div className="container-fluid">
      <div className="container px-4 p-5">
        <Brand />
        {/* 
           The below component holds all the data and components
         */}
        <TodoContainer /> 
      </div>
    </div>
  );
}

export default App;
