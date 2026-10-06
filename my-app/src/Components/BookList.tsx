import type {  Livro } from "../tipos/Livro";
import BookItem from "./BookItem";

type ListaDeLivros={
    listaDeLivros :Livro[];
}


type RemoverLivro={
    removerLivro: (id:string) => void;
}


const BookList = ({listaDeLivros, removerLivro, trocarStatusLivro}:ListaDeLivros & RemoverLivro & { trocarStatusLivro: (id:string, novoStatus:boolean) => void })=>{
    if(listaDeLivros.length === 0)
        return(<h1>Não há livros cadastrados</h1>);

    return(
        <div className="d-flex flex-wrap justify-content-center">
            {listaDeLivros.map((livro)=>(<BookItem key={livro._id} livro={livro}  removerLivro={removerLivro} trocarStatusLivro={trocarStatusLivro}/>))}
        </div>
    );
}
export default BookList;