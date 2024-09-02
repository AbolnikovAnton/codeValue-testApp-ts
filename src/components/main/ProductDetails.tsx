import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./styles/ControlPanelStyles";
import { SideContainer } from "./styles/MainStyles";
import {
  Dollar,
  FieldSet,
  InputName,
  InputPrice,
  PriceContainer,
  TextAreaDescription,
} from "./styles/ProductDetailsStyles";
import { ProductImage } from "./styles/ProductItemStyles";
import {
  addProduct,
  changeSelectedProduct,
  editProduct,
  selectProduct,
} from "../../reducers/rootReducer";
import { initStateType } from "../../reducers/types/rootReducerTypes";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state: initStateType) => state.selectedProduct
  );

  const handleInputChange = (field: string, value: string | number) => {
    if (selectedProduct) {
      dispatch(
        changeSelectedProduct({
          ...selectedProduct,
          [field]: value,
        })
      );
    }
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedProduct?.name && selectedProduct.price > 0) {
      if (isNaN(selectedProduct.id)) {
        dispatch(
          addProduct({
            ...selectedProduct,
            id: Date.now(),
            creationDate: new Date().toString(),
          })
        );
      } else {
        dispatch(editProduct(selectedProduct));
      }
      dispatch(selectProduct(null));
    }
  };

  return (
    <SideContainer>
      <form>
        <FieldSet selected={!!selectedProduct}>
          <legend>
            {!!selectedProduct ? `${selectedProduct.name} details` : "Details"}
          </legend>
          {!selectedProduct ? (
            <h1>Select product for details</h1>
          ) : (
            <Fragment>
              <ProductImage color="lightblue" className="fa fa-image" />
              <div>Name</div>
              <InputName
                maxLength={30}
                onChange={(e) => handleInputChange("name", e.target.value)}
                value={selectedProduct.name}
              />
              <div>Description</div>
              <TextAreaDescription
                maxLength={200}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                value={selectedProduct.description}
              />
              <div>Price</div>
              <PriceContainer>
                <InputPrice
                  onChange={(e) => handleInputChange("price", +e.target.value)}
                  type="number"
                  min="0"
                  value={selectedProduct.price}
                />
                <Dollar>$</Dollar>
              </PriceContainer>
              <Button
                color={
                  !selectedProduct.name || selectedProduct.price === 0
                    ? "grey"
                    : "greenyellow"
                }
                disabled={!selectedProduct.name || selectedProduct.price === 0}
                onClick={handleSave}
                issave={true}
              >
                Save
              </Button>
            </Fragment>
          )}
        </FieldSet>
      </form>
    </SideContainer>
  );
};

export default ProductDetails;
