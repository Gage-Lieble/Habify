import PriceLevelOne from "./PriceLevelOne"
import { useContext, useState } from "react"
import UserContext from "../../context/user-context"
const ShopContent = () => {
    const user = useContext(UserContext)

    const [wallet, setWallet] = useState(user.coins)
    const displayWallet = (debt) => {
        setWallet(wallet - debt)
    }
    return (
        <>
        <h3>This is shop</h3>
        ${wallet}<br />
        <PriceLevelOne image={'/static/imgs/pets/0.png'} name="Aquilance" setWallet={displayWallet} /> <br />
        <PriceLevelOne image={'/static/imgs/pets/1.png'} name="Pyrogriff" setWallet={displayWallet} /> <br />
        <PriceLevelOne image={'/static/imgs/pets/2.png'} name="Draven" setWallet={displayWallet} /><br />
        <PriceLevelOne image={'/static/imgs/pets/3.png'} name="Doge" setWallet={displayWallet} /><br />
        <PriceLevelOne image={'/static/imgs/pets/4.png'} name="Starshock" setWallet={displayWallet} /><br />
        <PriceLevelOne image={'/static/imgs/pets/5.png'} name="Verminator" setWallet={displayWallet} /><br />
        <PriceLevelOne image={'/static/imgs/pets/6.png'} name="Freddie" setWallet={displayWallet} /><br />
        <PriceLevelOne image={'/static/imgs/pets/7.png'} name="Blacno" setWallet={displayWallet} /><br />
        <PriceLevelOne image={'/static/imgs/pets/8.png'} name="Petally" setWallet={displayWallet} /><br />
        <PriceLevelOne image={'/static/imgs/pets/9.png'} name="Skiddo" setWallet={displayWallet} /><br />
        </>
    )
}

export default ShopContent