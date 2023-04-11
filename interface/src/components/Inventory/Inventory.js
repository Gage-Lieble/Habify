import axios from "axios"
import { useEffect, useContext, useState } from "react"
import UserContext from "../../context/user-context"
import RewardCard from "../Shop/RewardCard"

const Inventory = () => {
    const user = useContext(UserContext)

    const [userRewards, setUserRewards] = useState([])
    const [userPfp, setUserPfp] = useState()
    useEffect(() => {
        axios.get('rewards/api/rewards/').then(res => {
            for (let reward of res.data){
                if (reward.user === user.user){
                    setUserRewards(prev => [...prev, reward])
                } 
            }
        })
        axios.get('api/profile/').then(res => {
            for (let profile of res.data){
                if (profile.user === user.user){
                    setUserPfp(profile.pfp)
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
                <img id="profile-img" src={userPfp}/>
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