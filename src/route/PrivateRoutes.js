import { Outlet, Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = () => {
    const location = useLocation();
    const token = window.localStorage.getItem("token") ;
    const lastOrder = window.localStorage.getItem("LastOrder");

    if (token && lastOrder) {
        return (<Outlet />);
    } else if (!lastOrder) {
        return (<Navigate to="/cars" />);
    } else {
        return (<Navigate to="/login" state={location.pathname}/>);
    }
}

export default PrivateRoutes