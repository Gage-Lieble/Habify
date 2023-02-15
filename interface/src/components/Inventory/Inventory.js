import axios from "axios"
import { useEffect, useContext, useState } from "react"
import UserContext from "../../context/user-context"


const Inventory = () => {
    const user = useContext(UserContext)

    const [userRewards, setUserRewards] = useState([])
    useEffect(() => {
        axios.get('rewards/api/rewards/').then(res => {
            for (let reward of res.data){
                if (reward.user === user.user){
                    setUserRewards(prev => [...prev, reward])
                } 
            }
        })
    },[setUserRewards, user])
    return (
        <>
        <h3>This is Inventory</h3>
        {userRewards.map((r) => (
            <>
                <img src={r.img} />
                <h3>{r.title}</h3>
                <h4>{r.price}</h4>
            </>
        ))}
        </>
    )
}

export default Inventory