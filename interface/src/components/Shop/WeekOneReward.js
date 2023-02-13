import axios from "axios"
import UserContext from "../../context/user-context"
import { useContext, useEffect, useState } from "react"

const WeekOneReward = () => {
    const user = useContext(UserContext)
    const [csrfToken, setCsrfToken] = useState()
    useEffect(() => {
        axios.get('api/csrf').then(res => setCsrfToken(res.data.csrfToken))
    }, [])

    const clickFunc =() => {
        axios.post('rewards/buyreward/', {
            user: user.user,
            price: 350,
            img: 'https://static.vecteezy.com/system/resources/previews/001/198/620/original/gift-png.png'
        },{
            headers: {'X-CSRFToken': csrfToken}
        }).then(res => console.log(res))
    }

    return (
        <>
        <img src="" alt="present" />
        <p>$350</p>
        <button onClick={clickFunc}>Buy</button>
        </>
    )
}

export default WeekOneReward