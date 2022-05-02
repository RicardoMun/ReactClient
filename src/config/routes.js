import LayoutAdmin from "../layouts/LayoutsAdmin";
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/singln";

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
];

export default routes;