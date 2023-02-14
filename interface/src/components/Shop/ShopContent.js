import PriceLevelOne from "./PriceLevelOne"
import { useContext } from "react"
import UserContext from "../../context/user-context"
const ShopContent = () => {
    const user = useContext(UserContext)
    return (
        <>
        <h3>This is shop</h3>
        {user.coins}<br />
        <PriceLevelOne image={'/static/imgs/pets/0.png'} /> <br />
        <PriceLevelOne image={'/static/imgs/pets/1.png'} /> <br />
        <PriceLevelOne image={'/static/imgs/pets/2.png'} /><br />
        <PriceLevelOne image={'/static/imgs/pets/3.png'} /><br />
        <PriceLevelOne image={'/static/imgs/pets/4.png'} /><br />
        <PriceLevelOne image={'/static/imgs/pets/5.png'} /><br />
        <PriceLevelOne image={'/static/imgs/pets/6.png'} /><br />
        <PriceLevelOne image={'/static/imgs/pets/7.png'} /><br />
        <PriceLevelOne image={'/static/imgs/pets/8.png'} /><br />
        <PriceLevelOne image={'/static/imgs/pets/9.png'} /><br />
        </>
    )
}

export default ShopContent