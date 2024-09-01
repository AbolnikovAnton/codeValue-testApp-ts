import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ControlPanelContainer,
  Label,
  SearchInput,
  SortDropdown,
} from "./styles/ControlPanelStyles";
import {
  filterProducts,
  selectProduct,
  sortBy,
} from "../../reducers/rootReducer";
import { RootState } from "../../store/storeConfig";

const ControlPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    maxId,
    filterText,
    sortBy: sortByValue,
  } = useSelector((state: RootState) => state.products);

  return (
    <ControlPanelContainer>
      <Button
        onClick={() => {
          navigate(`item/new`);
          dispatch(
            selectProduct({
              id: maxId + 1,
              name: "New product",
              description: "",
              price: 0,
              creationDate: "",
            })
          );
        }}
      >
        Add
      </Button>
      <SearchInput
        onChange={(e) => {
          dispatch(filterProducts(e.target.value.toLocaleLowerCase()));
        }}
        value={filterText}
        placeholder="search products"
      />
      <div>
        <Label>Sort by:</Label>
        <SortDropdown
          defaultValue={sortByValue}
          onChange={(e) => {
            dispatch(sortBy(e.target.value));
          }}
        >
          <option value="name">Name</option>
          <option value="date">Recently added</option>
        </SortDropdown>
      </div>
    </ControlPanelContainer>
  );
};

export default ControlPanel;
