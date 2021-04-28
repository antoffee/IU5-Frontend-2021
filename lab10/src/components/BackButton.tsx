import React from "react";
import { useHistory } from "react-router-dom";

const BackButton: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(process.env.REACT_APP_DEV === "true" ? "/" : "/lab10/build");
  };
  return (
    <button type="button" onClick={handleClick} className="back-button">
      Вернуться на страницу поиска
    </button>
  );
};

export default BackButton;
