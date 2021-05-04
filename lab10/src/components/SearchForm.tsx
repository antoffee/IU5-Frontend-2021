import React, { useState } from "react";
import {
  RouteComponentProps,
  useHistory,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import removeEndSlashIfExist from "./removeEndSlashIfExist";
import github from "../icons/github.png";

interface ISearchFormProps extends RouteComponentProps {
  onSearch: (value: string) => void;
}

const SearchForm: React.FC<ISearchFormProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const url = removeEndSlashIfExist(useRouteMatch().url);
  const handleSubmit = () => {
    if (value.trim().length !== 0) {
      onSearch(value);
      setValue("");
      history.push(`${url}/result`);
    }
  };

  return (
    <div className="search-container">
      Поиск пользователей GitHub
      <input
        type="text"
        placeholder="Введите имя пользователя"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={(e) => {
          if (e.key.toLowerCase() === "enter") {
            handleSubmit();
          }
        }}
      />
      <button type="button" onClick={handleSubmit}>
        Искать
      </button>
      <img alt="github" src={github} className="github-icon" />
    </div>
  );
};

export default withRouter<ISearchFormProps, React.FC<ISearchFormProps>>(
  SearchForm
);
