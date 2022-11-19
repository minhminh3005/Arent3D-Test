import { css } from "@emotion/css";
import { Typography, useTheme } from "@mui/material";
import "./index.scss";
export interface IBlogCard {
  title: string;
  imgSrc: string;
  subtitle1: string;
  subtitle2: string;
}

const BlogCard = ({ title, imgSrc, subtitle1, subtitle2 }: IBlogCard) => {
  const theme = useTheme();
  return (
    <div className="blog-card__container">
      <div className="blog-card__content">
        <img className="blog-card__img" src={imgSrc} alt={title} />
        <div
          className={`blog-card__content ${css`
            background-color: ${theme.palette.primary.light};
          `}`}
        >
          <Typography color="white" variant="inherit">
            {title}
          </Typography>
        </div>s
      </div>
      <div className={`blog-card__subtitle1 ${css`color: ${theme.palette.neutral.light}`}`}>{subtitle1}</div>
      <div className={`blog-card__subtitle2 ${css`color: ${theme.palette.primary.main}`}`}>{subtitle2}</div>
    </div>
  );
};

export default BlogCard;
