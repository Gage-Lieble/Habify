
import Calendar from "./Calendar/Calendar"
import UserContext from "../../context/user-context"
import React, {useContext, useEffect, useState} from "react"
import axios from "axios"
import HeaderCont from "./Header/HeaderCont"
import ShopContent from '../Shop/ShopContent'
import Inventory from "../Inventory/Inventory"
const DashboardContent = () => {
    const user = useContext(UserContext)
    const [profile, setProfile] = useState({})
    useEffect(() => {
        axios.get('api/profile/').then(res =>{
            for (let pro of res.data){
                if (pro.user === user.user){
                    setProfile(pro)
                }
            }
        })
    },[setProfile, user])

    const [innerCont, setInnerCont] = useState(<Calendar cal="cal" />)
    const toggleShopFunc = () => {
        if (innerCont.props.cal !== undefined){
            setInnerCont(<ShopContent />)
        }else{
            setInnerCont(<Calendar cal="cal" />)
        }
    }

    const toggleInvFunc = () => {
        if (innerCont.props.cal !== undefined){
            setInnerCont(<Inventory />)
        }else{
            setInnerCont(<Calendar cal="cal" />)
        }
    }
    return (
        <UserContext.Provider value={{user:user.user, coins: profile.coins}}>
        
            {/* <QuotesRender /> */}
            <HeaderCont toggleShop={toggleShopFunc} toggleInv={toggleInvFunc}/>
            <a className="link-log" href="/api/logout/">Logout {user.user}</a><br />

            Coins: {profile.coins}<br/>
            Streak: {profile.streak}
            
            {innerCont}
        </UserContext.Provider>

    )
}

export default DashboardContent