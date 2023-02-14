import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from 'reactstrap';

const CartWidget = () => {
    const [cartCount, setCartCount] = useState(0);
  return (
    <div>
        <FaShoppingCart className="navbar__cart-icon" />
        <Badge className="navbar__cart-count" color="danger">
                  {cartCount}
                </Badge>
    </div>
  )
}

export default CartWidget;