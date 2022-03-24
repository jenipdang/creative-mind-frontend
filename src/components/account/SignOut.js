import {useEffect } from 'react'
import { useGlobalContext } from '../data/context'
import { useHistory } from 'react-router-dom'
import Loading from '../pages/Loading'

const SignOut = () => {
  const { setUser, setMessage } = useGlobalContext()
  const history = useHistory()

  useEffect(() => {
    fetch('/signout', {
        method: "DELETE"
    })
    .then(r => r.json())
    .then(data => {
        setUser(null)
        setMessage({message: data.message, status: "success"})
        history.push('/signin')
    })
    .catch(err => console.log(err))
  }, [history, setUser, setMessage])

  return (
    <div><Loading /></div>
  )
}

export default SignOut