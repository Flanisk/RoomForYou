import "./searchbar.css";

function SearchBar() {
    return (
        <div className="search-container">

            <i className="bi bi-search"></i>

            <input
                type="text"
                placeholder="Pesquisar..."
            />

        </div>
    );
}

export default SearchBar;