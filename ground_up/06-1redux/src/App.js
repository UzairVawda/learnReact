import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalsAndAmount,
  getCartItems,
} from "./Features/Cart/cartSlice";
import Modal from "./Components/Modal";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotalsAndAmount());
  }, [dispatch, cartItems]);

  useEffect(() => {
    dispatch(getCartItems("Uzair Vawda"));
  }, [dispatch]);

  if (isLoading) {
    return <p>LOADING...</p>;
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
