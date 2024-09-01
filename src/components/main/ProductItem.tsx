import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles/ControlPanelStyles";
import {
  ImageAndDescription,
  ItemContainer,
  ItemDescription,
  ItemHeader,
  ProductImage,
} from "./styles/ProductItemStyles";
import { deleteProduct, selectProduct } from "../../reducers/rootReducer";
import {
  initStateType,
  ProductType,
} from "../../reducers/types/rootReducerTypes";

type propsType = {
  item: ProductType;
};

const ProductItem = ({ item }: propsType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedId = useSelector(
    (state: initStateType) => state.selectedProduct?.id
  );

  return (
    <ItemContainer
      selected={item.id === selectedId}
      onClick={() => {
        dispatch(selectProduct(item));
        navigate(`item/${item.id}`);
      }}
    >
      <ImageAndDescription>
        <ProductImage className="fa fa-image" />
        <div>
          <ItemHeader>{item.name}</ItemHeader>
          <ItemDescription>{item.description}</ItemDescription>
        </div>
      </ImageAndDescription>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteProduct(item.id));
        }}
        color="orange"
      >
        Delete
      </Button>
    </ItemContainer>
  );
};

export default ProductItem;
