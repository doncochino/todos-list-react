import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (parameter) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(parameter)
};

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }) => {
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};