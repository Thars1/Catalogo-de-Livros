
import type { Livro } from "../tipos/Livro";

type Props={
    livro: Livro;
}



type RemoverLivro={
    removerLivro: (id:string)=>void;
}

const BookItem = ({livro,  removerLivro, trocarStatusLivro}:Props  & RemoverLivro & { trocarStatusLivro: (id:string, novoStatus:boolean) => void }) => {
    

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removerLivro(livro._id? livro._id : "");

    }


    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const novoStatus = e.target.checked;
            trocarStatusLivro(livro._id? livro._id : "", novoStatus);
        
    }
    
    

    return(
        <div className="card " style={{width: "18rem", margin: "10px"}}>
            <div className="card-body">
            <h5 className="card-title">{livro.title}</h5>
            <p className="card-subtitle mb-2 text-muted">{livro.author}</p>
            <p className="card-text"></p>
            <div className="form-check d-flex justify-content-between align-items-center">
            <label className="form-check-label" htmlFor="2lidoCheckbox">
                <input
                    className="form-check-input px-2"
                    type="checkbox"
                    id="2lidoCheckbox"
                    checked={livro.status}
                    onChange={handleStatusChange}
                />
                {livro.status?"Lido":"Não Lido"}
            </label>
            <button onClick={handleDelete} className="btn btn-danger">Excluir</button>
            </div>
        

            </div>
            </div>
    );

};

export default BookItem;