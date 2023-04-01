import React from 'react'
import {Route, Routes} from "react-router-dom"
import Recipes from '../Pages/Recipes'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import MyRecipes from '../Pages/MyRecipes'
import SavedRecipes from '../Pages/SavedRecipes'
function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Recipes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/myrecipes' element={<MyRecipes/>}/>
        <Route path='/savedrecipes' element={<SavedRecipes/>}/>
    </Routes>
  )
}

export default AllRoutes