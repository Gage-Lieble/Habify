


const HeaderCont = (props) => {
    return (
        <div id="navbar">
            <div id="nav-logo">S</div>
            <span className="r-nav">
                <button onClick={props.toggleShop}>Shop</button>
                <button onClick={props.toggleInv}>Inventory</button>
                <div id="nav-pfp">L</div>
            </span>
        </div>
    )
}

export default HeaderCont