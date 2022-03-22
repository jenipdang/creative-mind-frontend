import { useGlobalContext } from "../data/context";
import { useEffect } from 'react'

const Notification = () => {
    const { message, setMessage } = useGlobalContext()

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMessage(null)
        }, 3000)
        return () => {
            clearTimeout(timerId)
        }
    }, [message, setMessage])
    return (
        <div id='notificaiton-banner'>
            <p id='notificaiton-message' className={message?.status}>{message?.message}</p>
        </div>
    )
    
}

export default Notification