import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { SideContainer } from "./styles/MainStyles";
import { useDispatch } from "react-redux";
import {
  ArrowIcon,
  PaginationContainer,
  PrevNext,
} from "./styles/ProductsListStyles";
import { changePage } from "../../reducers/rootReducer";
import { initStateType } from "../../reducers/types/rootReducerTypes";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, filterText, sortBy, currentPage } = useSelector(
    (state: initStateType) => state
  );

  return (
    <>
      <SideContainer>
        {products
          .filter(
            (item) =>
              item.name.toLocaleLowerCase().includes(filterText) ||
              item.description.toLocaleLowerCase().includes(filterText)
          )
          .sort((a, b) => {
            switch (sortBy) {
              case "date":
                return (
                  new Date(a.creationDate).getTime() -
                  new Date(b.creationDate).getTime()
                );
              default:
                return a.name.localeCompare(b.name);
            }
          })
          .map((item, index) => {
            if (index < currentPage * 4 && index >= currentPage * 4 - 4) {
              return <ProductItem item={item} key={item.id} />;
            }
          })}
        <PaginationContainer>
          <PrevNext
            onClick={() => {
              if (currentPage > 1) dispatch(changePage(currentPage - 1));
            }}
          >
            <ArrowIcon className="fa fa-angle-left" />
            Prev Page
          </PrevNext>
          <div>
            {currentPage} of{" "}
            {Math.ceil(products.length / 4)
              ? Math.ceil(products.length / 4)
              : 1}
          </div>
          <PrevNext
            onClick={() => {
              if (currentPage < Math.ceil(products.length / 4))
                dispatch(changePage(currentPage + 1));
            }}
          >
            Next Page
            <ArrowIcon className="fa fa-angle-right" />
          </PrevNext>
        </PaginationContainer>
      </SideContainer>
    </>
  );
};

export default ProductsList;
