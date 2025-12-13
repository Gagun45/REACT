import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {CartsComponent} from "../components/carts/carts-component/CartsComponent.tsx";

export const routes = createBrowserRouter([
    {path: '/', element:<HomePage/>,
    children:[
        {path: 'details', element: <CartsComponent/>}
    ]},
])