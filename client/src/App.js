import React from 'react'
import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Error from './components/Error';
import Explore from './components/Explore';
import Signin from './components/Signin';
import Signup from './components/Signup';

const Layout = () => {
  return (
    <div className='md:w-9/12 mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      },
      {
        path: '/explore',
        element: <Explore />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App