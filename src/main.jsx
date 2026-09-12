import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/home/App.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Financeiro from "./pages/financeiro/financeiro.jsx";
import GestaoQuartos from "./pages/gestaoQuartos/gestaoQuartos.jsx";
import Calendario from "./pages/calendario/calendario.jsx";
import Hospedes from "./pages/hospedes/hospedes.jsx";
import Configuracoes from "./pages/configuracoes/configuracoes.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/financeiro" element={<Financeiro />} />
                <Route path="/gestao-quartos" element={<GestaoQuartos />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/hospedes" element={<Hospedes />} />
                <Route path="/configuracoes" element={<Configuracoes />} />
            </Routes>
            

            
        </BrowserRouter>
    </StrictMode>
);