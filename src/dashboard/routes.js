import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from '../components/login';
import LogoutButton from '../components/logout';
import ProfilePage from '../pages/Profile/ProfilePage';
import ClientPage from '../pages/Client/ClientPage';
import Layout from "../layouts/Layout";

const rutasAutenticadas = [
    {
        url: '/',
        component: <ProfilePage />
    },
    {
        url: '/client',
        component: <ClientPage />
    },
    {
        url: '/client/crear',
        component: <ClientPage />
    },
    {
        url: '/client/:id/edit',
        component: <ClientPage />
    },
    {
        url: '/logout',
        component: <LogoutButton />
    }
];

const rutasNoAutenticadas = [
    {
        url: '/login',
        component: <LoginButton />
    }
];

export default function RoutesDash() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    return (
        <Routes>
            {isAuthenticated ? (
                <Route element={<Layout />}>
                    {rutasAutenticadas.map((ruta, index) => (
                        <Route key={index} path={ruta.url} element={ruta.component} />
                    ))}
               
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            ) : (
                <Route element={<Layout />}>
                    {rutasNoAutenticadas.map((ruta, index) => (
                        <Route key={index} path={ruta.url} element={ruta.component} />
                    ))}
        
                    <Route path="*" element={<Navigate to="/login" />} />
                </Route>
            )}
        </Routes>
    );
}
