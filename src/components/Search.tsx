import {BsSearch} from 'react-icons/bs'
import React, {useState, KeyboardEvent} from 'react'
import classes from './Search.module.css'

//CRIA-SE UM TIPO PARA RECEBER A FUNÇÃO E O TIPO DE VALOR QUE ESTÁ RETONANDO
//OU SEJA, UMA PROMISE VAZIA POIS SÓ ESTAVA DANDO O CONSOLE.LOG
type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}

//recebe um load user que é do typo search props
const Search = ({ loadUser } : SearchProps) => {
  const [userName, setUserName] = useState("");
  //O INPUT TEM UMA PROPRIEDADE DE ONKEYDOWN PARA QUANDO APERTAR UMA TECLA
  //COMO ESTA SENDO USADO O TYPESCRIPT TEM QUE TIPAR O E PARA KEYBOARDEVENT
  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      loadUser(userName);
    }
  }
  return (
    <div className={classes.search}>
      <h2>Busque por um usuário: </h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
         <input type="text" placeholder='Digite o nome do usuário' 
         onChange={(e) => setUserName(e.target.value)}
         onKeyDown = {handleKeyDown}/>

         <button onClick={() => loadUser(userName)}>
          <BsSearch />  
         </button>
      </div>
    </div>
  )
}

export default Search