export default  function NewCourse(){
   async function saveCourse(){
"use server"
        console.log("Acesso a funçao")
    }
    return(
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Curso</h1>
            <form >
                <input type="text" placeholder = "Digite o titulo do Curso" /> <br />
                <input type="text" placeholder = "Digite a Descrição do Curso" /> <br />
                <input type="text" placeholder = "Digite a URL da Imagem" /> <br />
                <button formAction={saveCourse} className="text-white" >Salvar</button>
            </form>
        </div>


    )
}