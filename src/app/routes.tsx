import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Somos from "./pages/Somos";
import Procedimientos from "./pages/Procedimientos";
import ProcedimientoDetalle from "./pages/ProcedimientoDetalle";
import Contacto from "./pages/Contacto";
import EstadosFinancieros from "./pages/EstadosFinancieros";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "somos", Component: Somos },
      { path: "procedimientos", Component: Procedimientos },
      { path: "procedimientos/:slug", Component: ProcedimientoDetalle },
      { path: "contacto", Component: Contacto },
      { path: "indicadores", Component: EstadosFinancieros },
      { path: "*", Component: NotFound },
    ],
  },
]);
