import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Table from "./Table";
import MyForm from "./MyForm";
import UserInfo from './UserInfo'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MyForm/>}>

                </Route>
                <Route path='/userInfo/:id' element={<UserInfo/>}>

                </Route>
            </Routes>
        </BrowserRouter>

    </div>      
  );
}

export default App;