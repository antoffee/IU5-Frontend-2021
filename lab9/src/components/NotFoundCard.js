import React from "react";
import BackButton from "./BackButton";

function NotFoundCard() {
  return (
    <div className="not-found">
      <h1>Пользователь не найден</h1>
      <BackButton />
    </div>
  );
}

NotFoundCard.propTypes = {};

export default NotFoundCard;
