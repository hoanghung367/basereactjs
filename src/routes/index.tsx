// Layouts

// Pages

import Error from "../pages/Error";
import Home from "../pages/Home";


// Public routes
const publicRoutes: any = [
    { path: '/', component: Home },
    // { path: '/login', component: Login, layout: null },
    // { path: '/:class/:subject', component: Subject },
    { path: '/*', component: Error },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
