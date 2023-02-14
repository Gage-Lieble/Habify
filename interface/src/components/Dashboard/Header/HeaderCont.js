


const HeaderCont = (props) => {
    return (
        <div id="navbar">
            <div id="nav-logo">S</div>
            <span className="r-nav">
                <button onClick={() => props.togglePage('cal')}>Calendar</button>
                <button onClick={() => props.togglePage('shop')}>Shop</button>
                <button onClick={() => props.togglePage('inv')}>Inventory</button>
                <div id="nav-pfp">L</div>
            </span>
        </div>
    )
}

export default HeaderCont