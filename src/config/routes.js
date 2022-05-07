import LayoutBasic from "../layouts/LayoutsBasic";
import LayoutAdmin from "../layouts/LayoutsAdmin";

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/Singln"; 
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";


const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn,
    }
            
];

const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact,
    }
]

const routeNotFound = [
    {
        path: "*",
        layout: LayoutBasic,
        component: NotFound,
    }
]

const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;