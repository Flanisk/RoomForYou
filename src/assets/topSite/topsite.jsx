import "./topsite.css"
import SearchBar from "../searchBar/searchbar";
import BarraUsuario from "../barraUsuario/barraUsuario";
import BarraNotificacao from "../notificações /barraNotificacao";

function Topsite () {
    return(
        <div className="caixa">
            <SearchBar />


            <BarraUsuario/>

            <BarraNotificacao/>
        </div>


    )




}
export default Topsite