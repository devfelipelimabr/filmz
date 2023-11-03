
function Header(){
    return(
        <>
        <header>
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