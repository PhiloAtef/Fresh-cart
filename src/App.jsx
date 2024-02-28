import './App.css';
import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Orders from "./Components/Orders/Orders";
import Address from "./Components/Address/Address";
import NotFound from "./Components/NotFound/NotFound";
import AuthContextProvider from './Contexts/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


function App() {

  //routing functionality
  const route = createBrowserRouter([{
    path: '', element: <Layout></Layout>, children:[
      {path:'', element: <Navigate to={'home'}></Navigate>},
      {path:'register',element:<Register></Register>},
      {path:'login', element:<Login></Login>},

      {path:'home', element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'products', element:<ProtectedRoute><Products/></ProtectedRoute> },
      {path:'cart', element:<ProtectedRoute><Cart/></ProtectedRoute> },
      {path: 'categories', element:<ProtectedRoute><Categories/></ProtectedRoute> },
      {path:'brands', element:<ProtectedRoute><Brands/></ProtectedRoute> },
      {path:'orders', element:<ProtectedRoute> <Orders/></ProtectedRoute>},
      {path: 'addresses', element:<ProtectedRoute><Address/></ProtectedRoute> },

      {path:'*', element: <NotFound></NotFound>}
    ]
  }])
  return <>
  <AuthContextProvider>
    <RouterProvider router={route}></RouterProvider>
  </AuthContextProvider>
  </>
}

export default App;