import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from '../../../features/about/page/about.page';
import HomePage from '../../../features/home/page/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="about" element={<AboutPage></AboutPage>}></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
