import axios from "axios"
import UserContext from "../../context/user-context"
import { useContext, useEffect, useState } from "react"

const Testcomp = () => {
    const user = useContext(UserContext)
    const [csrfToken, setCsrfToken] = useState()
    useEffect(() => {
        axios.get('api/csrf').then(res => setCsrfToken(res.data.csrfToken))
    }, [])
    const clickFunc =() => {
        axios.post('rewards/buyreward/', {
            user: 'admin',
            price: 350,
            img: 'axios'
        },{
            headers: {'X-CSRFToken': csrfToken}
        }).then(res => console.log(res))
    }

    return (
        <>
        <button onClick={clickFunc}>Click</button>
        </>
    )
}

export default Testcomp