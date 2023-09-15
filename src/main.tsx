import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import Home from './routes/Home'
import Repositorio from './routes/Repositorio';

//O APP É A ROTA NORMAL, NELE VAI TER O HEADER E O FOOTER QUE SERÃO CONSTANTES
//NA PÁGINA, E OS ELEMENTOS (ROTAS) QUE SERÃO MODIFICADOS QUE SERÃO OS FILHOS(CHILDREN)
//IRÃO CONTER NO OUTLET QUE É O ARRAY CHILDREN CONTENDO CADA TIPO DE COMPONENTE
//EX:
//SE CRIAR UMA ROTA PARA CONTATOS:
//NO ARRAY FICARA:
/*
  CHILDREN: [
    {
      PATH: "/",
      ELEMENT: <HOME />
    },
    {
      PATH: "/CONTACTS",
      ELEMENT: <CONTACTS />
    }
  ]
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repos/:login",
        element: <Repositorio />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router = {router}/>
  </React.StrictMode>,
)
