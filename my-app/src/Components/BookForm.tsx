import { useState } from "react";
import type { Livro } from "../tipos/Livro";

type Props ={
    enviarLivro: (livro:Livro) => void;
}

const BookForm = ({ enviarLivro }: Props) => {

    const [title, setTitle]= useState('');
    const[author, setAuthor] = useState('');
    const[status, setStatus] = useState(false);

    const enviar =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!title || !author){
            alert('Preencha todos os campos');
            return;
        }
        enviarLivro({title,author, status});
        setTitle('');
        setAuthor('');
        setStatus(false);
        
    }


    return(

    <div className="row mt-4 justify-content-center w-100 ">    
    <form onSubmit={enviar} className="col-12 col-md-7 d-flex flex-column gap-3 p-4 mb-3 border rounded-3 shadow-sm bg-body-tertiary">
        
        <h1 className="h4 text-dark-emphasis mb-2">Adicionar Livro ao Catálogo</h1>
        
        <input
            className="form-control"
            type="text"
            placeholder="Título do Livro"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        
        <input
            className="form-control"
            type="text"
            placeholder="Autor do Livro"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
        />
        
        <div className="form-check my-1">
            <input
                className="form-check-input" 
                type="checkbox"
                id="lidoCheckbox"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="lidoCheckbox">
                Lido
            </label>
        </div>
        
       
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary col-12 col-md-8" type="submit">
                Enviar
            </button>
        </div>
        
    </form>

    </div>);
}

export default BookForm;