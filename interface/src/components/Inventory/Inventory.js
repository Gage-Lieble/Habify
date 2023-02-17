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
            <span id='profile-info'>
                <span>
                    <h2 id="username-head">{user.user}</h2>
                    <a href="api/logout/">Logout</a>
                </span>
                <img id="profile-img" src='/static/imgs/pets/0.png'/>
            </span>
            <h2>Inventory - {userRewards.length}</h2> 
        <div id="shop-content">
            {userRewards.map((r) => (
            
            <RewardCard img={r.img} name={r.title} func={applyFunc} btnText={"Apply"}/>
            ))}
        </div>
        </div>
    )
}

export default Inventory