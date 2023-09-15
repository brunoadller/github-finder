import React, {useState} from 'react'
import Search from '../components/Search'
import { UserProps } from '../types/user'
import User from '../components/User'
import Error from '../components/Error'

const Home = () => {
  //define que o usuario é do tipo user props ou nulo
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)

  //retorna a promise que está na função loadUser
  const loadUser = async(userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data)
    //como ele retorna um 404 quando não encontra, 
    //da pra usar isso pra confirmar o erro
    if(res.status === 404){
      setError(true)
      //não deixa a função acontecer mais
      return
    }
    // desedtruturando a promisse para pegar sómente os dados necessarios
    const {avatar_url, login, location, followers, following} = data

    //criando um objeto que recebera os dados desestruturados do tipo UserProps
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    //fazendo esses dados pertencerem a useState user
    //como ele recebe um dado do tipo userProps, userData ira ser aceitado
    setUser(userData)
  }
  return (
    <div>
      <Search loadUser = {loadUser}/>
      {user && <User {...user}/>}
      {error && <Error />}
    </div>
  )
}

export default Home