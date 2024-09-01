import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styles/HeaderContainer";
import { selectProduct } from "../../reducers/rootReducer";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <HeaderContainer
      onClick={() => {
        navigate(`/products`);
        dispatch(selectProduct(null));
      }}
    >
      My Store
    </HeaderContainer>
  );
};

export default Header;
