import { Navigate } from "react-router";
import ContactsForm from "./pages/ContactsForm";
import ContactsList from "./pages/ContactsList";
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAuth from "./contexts/useAuth";

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children
};

export const user_navigations = [
    { path: '/dashboard/default', element: <ProtectedRoute> <Dashboard /> </ProtectedRoute> },

    { path: '/contacts/add', element: <ProtectedRoute><ContactsForm /></ProtectedRoute> },
    { path: '/contacts/list', element: <ProtectedRoute><ContactsList /></ProtectedRoute> },

    { path: '/', element: <Navigate to="/login" /> },
    { path: '/register', element: <Register /> },
    { path: '/login', element: <Login /> },





];


export const navigations = [
    ...user_navigations];
