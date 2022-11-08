import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('../../../features/home/page/home.page'));
const About = React.lazy(
    () => import('../../../features/about/page/about.page')
);

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
