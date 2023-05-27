import React from "react";
import { IRouter } from "../@type/router.type";
import { Footer } from "../componenets/layouts";
import Home from "../pages/user/Home";
import ProductDetail from "../pages/user/ProductDetail";
import Cart from "../pages/user/Cart";
import ProductsByCategory from "../pages/user/ProductsByCategory";
import SearchProducts from "../pages/user/SearchProducts";
const RouterLayout: IRouter[] = [
    {
        name: "Homepage",
        path: "",
        index: true,
        public: true,
        children: [],
        element: () => <Home />,
    },
    {
        name: "Cart",
        path: "cart",
        index: true,
        public: true,
        children: [],
        element: () => <Cart />,
    },
    {
        name: "ProductsByCategory",
        path: "category/:id",
        index: true,
        public: true,
        children: [],
        element: () => <ProductsByCategory />,
    },
    {
        name: "ProductsByCategory",
        path: "search/keyword?page?",
        index: true,
        public: true,
        children: [],
        element: () => <SearchProducts />,
    },
    {
        name: "ProductDetail",
        path: "products/:id",
        index: true,
        public: true,
        children: [],
        element: () => <ProductDetail />,
    },
];

export default RouterLayout;
