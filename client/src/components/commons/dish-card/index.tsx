import { css } from "@emotion/css";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./index.scss";

export interface IDishCard {
  title: string;
  imgSrc: string;
}

const DishCard = ({ title, imgSrc }: IDishCard) => {
  const theme = useTheme();
  return (
    <div className="dish-card">
      <img className="dish-card__img" src={imgSrc} alt={title} />
      <div
        className={`dish-card__content ${css`
          background-color: ${theme.palette.primary.light};
        `}`}
      >
        <Typography color="white" variant="inherit">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default DishCard;
