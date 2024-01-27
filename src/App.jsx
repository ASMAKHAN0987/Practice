import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Layout from './Layout'
import User from './Component/User/User.jsx'
import Github from './Component/Github/Github.jsx'
import { githubInfoLoader } from './Component/Github/GithubInfoLoader.js'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
         <Route path='' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/User/:userId' element={<User/>}/>
         <Route 
         loader={githubInfoLoader}
         path='/Github'
         element={<Github/>}
         />
    </Route>
  )
)
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App