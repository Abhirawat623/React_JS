const Header=()=>{

return(

<div><nav className="navbar">
    <div className="heading"><img className="heading-logo" src="/imagelogos/headLogo.jpg" alt="logo" height={"50px"} width={"50px"}/>
    <h1 className="heading-name">Zip Cart</h1></div>
    <input type="text" className="header-input" placeholder="Enter Product,Brand,Section"/>
    <ul className="nav-items">
        <li className="nav-logo"><img className="heading-logo" src="/imagelogos/log-in.jpg" alt="logo" height={"40px"} width={"50px"}/></li>
        <li className="nav-logo"><img className="heading-logo" src="/imagelogos/wishlist.png" alt="logo" height={"44px"} width={"50px"}/></li>
    </ul>
</nav>
</div>

)
}

export default Header;