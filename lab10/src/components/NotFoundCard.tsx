import React from "react";
import BackButton from "./BackButton";

const NotFoundCard: React.FC = () => (
  <div className="not-found">
    <h1>Пользователь не найден</h1>
    <BackButton />
  </div>
);

export default NotFoundCard;
