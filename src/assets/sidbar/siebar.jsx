import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


import logo from "../../../imgs/WhatsApp_Image_2026-08-25_at_13.03.36-removebg-preview.png";

function Sidebar() {
    const linkClassName = ({ isActive }) => (isActive ? "ativo" : undefined);

    return (
        <aside className="sidebar">

            <img src={logo} alt="Logo" />

            <nav>

                <NavLink to="/" end className={linkClassName}>
                    <i className="bi bi-house"></i>
                    Dashboard
                </NavLink>

                <NavLink to="/financeiro" className={linkClassName}>
                    <i className="bi bi-wallet2"></i>
                    Financeiro
                </NavLink>

                <NavLink to="/gestao-quartos" className={linkClassName}>
                    <i className="bi bi-door-closed"></i>
                    Gestão de quartos
                </NavLink>

                <NavLink to="/calendario" className={linkClassName}>
                    <i className="bi bi-calendar"></i>
                    Calendário
                </NavLink>

                <NavLink to="/hospedes" className={linkClassName}>
                    <i className="bi bi-person"></i>
                    Hóspedes
                </NavLink>

                <NavLink to="/notificacoes" className={linkClassName}>
                    <i className="bi bi-bell"></i>
                    Notificações
                </NavLink>

                <NavLink to="/configuracoes" className={linkClassName}>
                    <i className="bi bi-gear-fill"></i>
                    Configurações
                </NavLink>

            </nav>

        </aside>
    );
}

export default Sidebar;