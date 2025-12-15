import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {AddNewCarPage} from "../pages/AddNewCarPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
    children: [
        {path: 'cars', element: <CarsPage/>},
        {path: 'cars/new', element: <AddNewCarPage/>}
    ]},
])