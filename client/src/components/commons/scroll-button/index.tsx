import { IconButton } from "@mui/material";
import React from "react";
import ScrollIcon from "../../icons/ScrollIcon";

interface IScrollButton {
  onClick: () => void;
  css?: string;
}

const ScrollButton = ({ onClick, css }: IScrollButton) => {
  return (
    <div className={css}>
      <IconButton onClick={onClick}>
        <ScrollIcon />
      </IconButton>
    </div>
  );
};

export default ScrollButton;
