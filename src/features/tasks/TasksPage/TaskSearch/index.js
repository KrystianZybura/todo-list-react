import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../Input/styled";

const TaskSearch = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("szukaj");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    !target.value.trim()
      ? searchParams.delete("szukaj")
      : searchParams.set("szukaj", target.value);

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
