import Input from "../../Input/styled";
import searchQueryParamName from "../searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

const TaskSearch = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
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
