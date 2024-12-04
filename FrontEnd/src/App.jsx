import { useState, useEffect} from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import {LoginContext} from './context/LoginContext'


function App() {
  const [dataLogin, setDataLogin] = useState(null)
  useEffect(() => {
    if(localStorage.getItem("dataLogin") != null){
      let backupDataLogin = JSON.parse(localStorage.getItem("dataLogin"))
      setDataLogin(backupDataLogin)
    }
  }, []);

  return (
    <>
     <LoginContext.Provider value={{dataLogin, setDataLogin}}>
      {/* <NavMaterial /> */}
      {/* {dataLogin == null ? <NavMaterial /> : <NavAdmin />} */}
      {/* <NavGuest /> */}
      <main className=''>
        <Outlet/>
      </main>
      </LoginContext.Provider>
    </>
  )
}

export default App

