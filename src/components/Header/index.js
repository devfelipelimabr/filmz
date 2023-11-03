
function Header(){
    return(
        <>
        <header>
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo"/>
        <ul>
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/filme/:id">
                        Filmes
                    </a>
                </li>
                <li>
                    <a href="/favoritos">
                        Favoritos
                    </a>
                </li>
            </ul>
        </header>
        
        </>
    )
}

export default Header;