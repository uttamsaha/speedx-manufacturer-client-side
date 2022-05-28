
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddReview from './Pages/Home/Reviews/AddReview/AddReview';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import UpdateProfile from './Pages/Dashboard/UpdateProfile/UpdateProfile';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><PurchasePage></PurchasePage></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='addreview' element={<AddReview></AddReview>}></Route>
            <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
        </Route>
        <Route path='/updateprofile' element={<RequireAuth>
          <UpdateProfile></UpdateProfile>
        </RequireAuth>}>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
