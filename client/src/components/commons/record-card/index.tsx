import { css } from "@emotion/css";
import { useTheme } from "@mui/material";
import "./index.scss";
export interface IRecordCard {
  title: string;
  imgSrc: string;
  subtitle: string;
}

const RecordCard = ({ title, imgSrc, subtitle }: IRecordCard) => {
  const theme = useTheme();
  return (
    <div
      className={`record-card__container ${css`
        background: ${theme.palette.primary.light};
      `}`}
    >
      <div className="record-card__content">
        <div
          className={`record-card__overlay ${css`
            background: ${theme.palette.neutral.dark};
          `}`}
        />
        <img className="record-card__img" alt="title" src={imgSrc} />
        <div className="record-card__text-wrapper">
          <div
            className={`record-card__title ${css`
              color: ${theme.palette.primary.light};
            `}`}
          >
            {title}
          </div>
          <div className={`record-card__subtitle ${css``}`}>
            <div
              className={css`
                background: ${theme.palette.primary.main};
                width: 160px;
                color: #fff;
              `}
            >
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
