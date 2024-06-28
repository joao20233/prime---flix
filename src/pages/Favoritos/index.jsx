import './favoritos.css'

import { useEffect, useState } from 'react';

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix")

        setFilmes(JSON.parse(minhaLista) || [])


    }, [])


    function excluirFilme(id){
        let filtrarFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })

        setFilmes(filtrarFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtrarFilmes))
    }




    return ( 
        <div className='meus-filmes'>
            <h1>meus filmes:</h1>

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <button onClick={ () => excluirFilme(item.id)}>Excluir</button>
                        </li>
                    )
                })}
            </ul>
            
        </div>
     );
}

export default Favoritos;