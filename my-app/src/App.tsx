
import axios from 'axios'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'

import type { LinkLivro, Livro } from './tipos/Livro'
import { useState, useEffect } from 'react'

  const API_URL= 'https://crudcrud.com/api/65af389fa34046a2999ae1eb1ceeaade/livros';
  
    
  const link: LinkLivro = { link: API_URL };


function App() {
  const [listaDeLivros, setListaDeLivros] =useState<Livro[]>([]);
  
  const trocarStatusLivro = (id: string, novoStatus: boolean) => {
  setListaDeLivros(prev =>
    prev.map(livro =>
      livro._id === id ? { ...livro, status: novoStatus } : livro
    )
  );

  const livro = listaDeLivros.find(l => l._id === id);
  if (!livro) return;

  const { _id, ...dadosSemId } = livro; 

  axios
    .put(`${API_URL}/${id}`, {
      ...dadosSemId,
      status: novoStatus
    })
    .then(res => console.log('Atualizado com sucesso:', res.data))
    .catch(erro => {
      console.error('Erro ao atualizar status:', erro);
      
    });
};
  const adcionarLivro= async (dados:Livro)=>{
    try {
      const resposta = await axios.post<Livro>(API_URL, dados);
      setListaDeLivros([...listaDeLivros, resposta.data]);
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(()=>{

    const fetchLivros = async () => {
      try {
        const resposta = await axios.get<Livro[]>(API_URL);
        setListaDeLivros(resposta.data);
      } catch (erro) {
        console.log(erro);
      }
    };
    fetchLivros();
  },[]);
  const removerLivro= async (id:string)=>{
    try {
      await axios.delete(link.link+`/${id}`);
      setListaDeLivros(listaDeLivros.filter((livro)=>livro._id !== id));
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center">
     <BookForm enviarLivro={adcionarLivro} />
     <BookList listaDeLivros={listaDeLivros} removerLivro={ removerLivro } trocarStatusLivro={trocarStatusLivro} />
    </div>
  )
}

export default App
