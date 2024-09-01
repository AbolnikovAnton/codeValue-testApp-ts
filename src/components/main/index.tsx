import ControlPanel from "./ControlPanel";
import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductsList";
import { MainContainer, MainFrame } from "./styles/MainStyles";

const Main = () => {
  return (
    <MainContainer>
      <ControlPanel />
      <MainFrame>
        <ProductsList />
        <ProductDetails />
      </MainFrame>
    </MainContainer>
  );
};

export default Main;
