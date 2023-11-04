import Header from "../../components/Header";

function No404(){
    return(
        <>
        <Header/>
        <section className="not-found">
            <h1>
                PÁGINA NÃO ENCONTRADA!
            </h1><br/>
           <img id="image-404" src="/img/not-found.svg" alt="not-found"/>
        </section>
        </>
    )
}

export default No404