import axios from "axios"
import { useEffect, useContext, useState } from "react"
import UserContext from "../../context/user-context"
import RewardCard from "../Shop/RewardCard"

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

    const applyFunc = () => {
        console.log('Apply')
    }
    return (
        <div id="inventorypg-wrap">
        <span>
            <h2>Inventory - {userRewards.length}</h2> <a href="api/logout/">Logout</a>
        </span>
        <div id="shop-content">
            {userRewards.map((r) => (
            
            <RewardCard img={r.img} name={r.title} func={applyFunc} btnText={"Apply"}/>
            ))}
        </div>
        </div>
    )
}

export default Inventory