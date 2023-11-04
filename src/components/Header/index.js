
function Header(){
    return(
        <>
        <header>
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo"/>
            <a href="/" className="site-name">FilmeZ</a>
        <ul>
                <li>
                    <a href="/">
                        Home
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