
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import App from '../App'


function Routing(){

    const Router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Home/>}>
            <Route path='/about' element={<About/>}/>
          
            </Route>
        )
    )
    return(
        <RouterProvider router={Router}/>
    )
}

export default Routing;