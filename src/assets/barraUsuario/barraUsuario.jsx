import { useEffect, useRef, useState } from "react";
import userIcon from "../../../imgs/userIcon.png";
import "./barraUsuario.css";
import { NavLink } from "react-router-dom";

function BarraUsuario() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const linkClassName = ({ isActive }) => (isActive ? "ativo" : undefined);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);


    return (
        <div className="barraUsuario" ref={menuRef}>
            <button
                className="boxUsuario"
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="menu"
                onClick={() => setIsOpen((current) => !current)}
            >
                <img className="userIconBox" src={userIcon} alt="" />
                <span>Usuario</span>
                <i className={`bi bi-chevron-${isOpen ? "up" : "down"}`} aria-hidden="true" />
            </button>

            {isOpen && (
                <div className="cardLogout" role="menu">
                    <p className="logoutTitulo">Conta do usuário</p>
                    <NavLink to="/login" className={linkClassName}>
                    <i className="bi bi-door-closed"></i>
                    Sair
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default BarraUsuario;