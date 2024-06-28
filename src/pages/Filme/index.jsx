import './filme-info.css'
import { useEffect, useState } from 'react';
import api from '../../services/api'


import { useParams, useNavigate } from 'react-router-dom';

const Filme = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false)
                })
                .catch(() => {
                    navigate("/", { replace: true})
                    return;
                });
        }

        loadFilme();

        return () => {
            console.log('desmonstado comp');
        }
    }, [navigate,id]);

    if (loading) {
        return (
            <div className='filmes-info' >
                <h2>carregando detalhes do filme...</h2>
            </div>
        )
    }


    function salvarFilmes(){
        const minhaLista = localStorage.getItem('@primeflix')

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

        if(hasFilme){
            alert('ok')
            return
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
    }




    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />
            <h3>sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilmes}>Salvar</button>
                <button>
                    <a target='blank' href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>


        </div>
    );
}

export default Filme;