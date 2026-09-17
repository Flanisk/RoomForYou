import Sidebar from "../../assets/sidbar/siebar";
import "./login.css";

function Login(){

return(
    <main className="loginMain">
        <form className="login container bg-white p-5">
            <div className="form-group mb-5">
                <label htmlFor="Email">Email: </label>
                <input type="Email" className="form-control" placeholder="Insira o Email"/>
            </div>
            <div className="form-group mb-5">
                <label htmlFor="Senha">Senha: </label>
                <input type="Password" className="form-control" placeholder="Insira a Senha"/>
            </div>

            <div className="container justify-content-between d-flex pt-5">
                
                <a> Esqueci minha senha </a>

                <button className="btn btn-primary">Entrar</button>

            </div>
        </form>
    </main>

)
}

export default Login;