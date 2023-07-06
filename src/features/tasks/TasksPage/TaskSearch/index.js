import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../Input/styled";
import searchQueryParamName from "../searchQueryParamName";

const TaskSearch = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    !target.value.trim()
      ? searchParams.delete(searchQueryParamName)
      : searchParams.set(searchQueryParamName, target.value);

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Input
      placeholder="Filtruj zadania"
      value={query ?? ""}
      onChange={onInputChange}
    />
  );
};
export default TaskSearch;
