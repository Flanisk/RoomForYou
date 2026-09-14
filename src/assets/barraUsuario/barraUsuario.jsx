import { useEffect, useRef, useState } from "react";
import userIcon from "../../../imgs/userIcon.png";
import "./barraUsuario.css";

function BarraUsuario() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    function handleLogout() {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        setIsOpen(false);
    }

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
                    <button className="logoutButton" type="button" role="menuitem" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right" aria-hidden="true" />
                        Sair
                    </button>
                </div>
            )}
        </div>
    );
}

export default BarraUsuario;