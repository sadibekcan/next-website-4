import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="callButton">
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className="texts">
          <div className="text-1">ORDER NOW!</div>
          <div className="text-2">8568 686 678</div>
        </div>
      </div>
      <div className="item">
          <ul className="list">
              <li className="listItem">Homepage</li>
              <li className="listItem">Products</li>
              <li className="listItem">Menu</li>
              <Image src="/img/logo.png" alt="" width="160px" height="69px" />
              <li className="listItem">Events</li>
              <li className="listItem">Blog</li>
              <li className="listItem">Contact</li>
          </ul>
      </div>
      <div className="item">
          <div className="cart">
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className="counter">3</div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;