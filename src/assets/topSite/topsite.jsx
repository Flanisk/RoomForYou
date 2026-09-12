import "./topsite.css"
import SearchBar from "../searchBar/searchbar";
import BarraUsuario from "../barraUsuario/barraUsuario";

function Topsite () {
    return(
        <div className="caixa">
            <SearchBar />
            <BarraUsuario/>
        </div>
    )
}
export default Topsite