import PriceLevelOne from "./PriceLevelOne"
import { useContext } from "react"
import UserContext from "../../context/user-context"
const ShopContent = () => {
    const user = useContext(UserContext)
    return (
        <>
        <h3>This is shop</h3>
        {user.coins}<br />
        <PriceLevelOne image={'/static/imgs/pets/0.png'} name="Aquilance" /> <br />
        <PriceLevelOne image={'/static/imgs/pets/1.png'} name="Pyrogriff" /> <br />
        <PriceLevelOne image={'/static/imgs/pets/2.png'} name="Draven" /><br />
        <PriceLevelOne image={'/static/imgs/pets/3.png'} name="Doge" /><br />
        <PriceLevelOne image={'/static/imgs/pets/4.png'} name="Starshock" /><br />
        <PriceLevelOne image={'/static/imgs/pets/5.png'} name="Verminator" /><br />
        <PriceLevelOne image={'/static/imgs/pets/6.png'} name="Freddie" /><br />
        <PriceLevelOne image={'/static/imgs/pets/7.png'} name="Blacno" /><br />
        <PriceLevelOne image={'/static/imgs/pets/8.png'} name="Petally" /><br />
        <PriceLevelOne image={'/static/imgs/pets/9.png'} name="Skiddo" /><br />
        </>
    )
}

export default ShopContent