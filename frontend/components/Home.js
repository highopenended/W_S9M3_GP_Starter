import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../hooks/index.js'

export default function Home() {
  const navigate = useNavigate()
  const {auth, checkAuth}=useAuth(()=>navigate('/login'))

  // const [auth, setAuth] = useState(null)
  // async function checkAuth() {
  //   try {
  //     await axios.get(
  //       `${BASE_URL}/is_authed`,
  //       { headers: { Authorization: localStorage.getItem('token') } },
  //     )
  //     setAuth(true)
  //   } catch (err) {
  //     localStorage.removeItem('token')
  //     setAuth(false)
  //   }
  // }
  // useEffect(() => {
  //   if (!localStorage.getItem('token')) navigate('/login')
  //   else checkAuth()
  // }, [])
  // useEffect(() => {
  //   if (auth === false) navigate('/login')
  // }, [auth])

  const sensitiveStuff = async () => {
    await checkAuth()
    // doing sensitive stuff
  }
  if (!auth) {
    return (<div>Please wait...</div>)
  }
  return (
    <div className="screen">
      <h3>Home Page</h3>
      <button onClick={sensitiveStuff}>
        Interact with site...
      </button>
    </div>
  )
}
