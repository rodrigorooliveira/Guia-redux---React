import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import { loginUser, logoutUser } from "../../redux/user/actions";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer);
  const {products} = useSelector((rootReducer) => rootReducer.cartReducer);

  const dispatch = useDispatch();

   const productsCount = useMemo(() => {
     return products.reduce((acc, curr) => acc + curr.quantity, 0);
   }, [products]);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    // eslint-disable-next-line
    dispatch(loginUser({name:"Daniel", name:"blabla@hotmail.com"}));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (<div onClick={handleLogoutClick}>Sair</div>) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>
     
      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
