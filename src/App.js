import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Table from "./Table";
import MyForm from "./MyForm";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MyForm/>}>

                </Route>
            </Routes>
        </BrowserRouter>

    </div>      
  );
}

export default App;