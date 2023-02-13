import WeekOneReward from "./WeekOneReward"
import { useContext } from "react"
import UserContext from "../../context/user-context"
const ShopContent = () => {
    const user = useContext(UserContext)
    return (
        <>
        <h3>This is shop</h3>
        {user.coins}
        <WeekOneReward />
        </>
    )
}

export default ShopContent