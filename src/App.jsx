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


function App() {

  //routing functionality
  const route = createBrowserRouter([{
    path: '', element: <Layout></Layout>, children:[
      {path:'', element: <Navigate to={'home'}></Navigate>},
      {path:'home', element:<Home></Home>},
      {path:'products', element:<Products></Products>},
      {path:'register',element:<Register></Register>},
      {path:'login', element:<Login></Login>},
      {path:'cart', element: <Cart></Cart>},
      {path: 'categories', element: <Categories></Categories>},
      {path:'brands', element: <Brands></Brands>},
      {path:'orders', element: <Orders></Orders>},
      {path: 'addresses', element: <Address></Address>},
      {path:'*', element: <NotFound></NotFound>}
    ]
  }])
  return <>
  <RouterProvider router={route}></RouterProvider>
  </>
}

export default App;