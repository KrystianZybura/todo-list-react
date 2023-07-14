import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  return query;
};

const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    !value ? searchParams.delete(key) : searchParams.set(key, value);

    const newSearch = searchParams.toString();
    history.push(`${location.pathname}?${newSearch}`);
  };

  return replaceQueryParameter;
};

export { useQueryParameter, useReplaceQueryParameter };
