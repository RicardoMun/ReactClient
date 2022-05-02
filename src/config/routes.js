import LayoutBasic from "../layouts/LayoutBasic";
import LayoutAdmin from "../layouts/LayoutsAdmin";
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/singIn";
import NotFound from "../pages/notFound";
import Home from "../pages/home";


const routes = [
            {
                path: "/admin",
                layout: LayoutAdmin,
                component: AdminHome,
            },
            {
                path: "/admin/login",
                layout: LayoutAdmin,
                component: AdminHome
            },
            {
                path: "/",
                layout: LayoutBasic,
                component: Home,
            },
            {
                path: "*",
                layout: LayoutBasic,
                component: NotFound,
            }
];

export default routes;