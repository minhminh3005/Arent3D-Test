import { css } from "@emotion/css";
import { Grid, useTheme } from "@mui/material";
import BlogCard, { IBlogCard } from "../../components/commons/blog-card";
import PrimaryButton from "../../components/commons/primary-button";
import ScrollButton from "../../components/commons/scroll-button";
import blog01 from "../../images/column-1.jpg";
import blog02 from "../../images/column-2.jpg";
import blog03 from "../../images/column-3.jpg";
import blog04 from "../../images/column-4.jpg";
import blog05 from "../../images/column-5.jpg";
import blog06 from "../../images/column-6.jpg";
import blog07 from "../../images/column-7.jpg";
import blog08 from "../../images/column-8.jpg";
import column01 from "../../images/column-sample-1.jpg";
import column02 from "../../images/column-sample-2.jpg";
import column03 from "../../images/column-sample-3.jpg";
import column04 from "../../images/column-sample-4.jpg";

const columnData: IBlogCard[] = [
  {
    title: "2021.05.17 23:25",
    subtitle1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subtitle2: "自分のカラダの記録",
    imgSrc: blog01,
  },
  {
    title: "2021.05.17 23:25",
    subtitle1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subtitle2: "自分のカラダの記録",
    imgSrc: blog02,
  },
  {
    title: "2021.05.17 23:25",
    subtitle1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subtitle2: "自分のカラダの記録",
    imgSrc: blog03,
  },
  {
    title: "2021.05.17 23:25",
    subtitle1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subtitle2: "自分のカラダの記録",
    imgSrc: blog04,
  },
  {
    title: "2021.05.17 23:25",
    subtitle1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subtitle2: "自分のカラダの記録",
    imgSrc: blog05,
  },
  {
    title: "2021.05.17 23:25",
    subtitle1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subtitle2: "自分のカラダの記録",
    imgSrc: blog06,
  },
  {
    title: "2021.05.17 23:25",
    subtitle1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subtitle2: "自分のカラダの記録",
    imgSrc: blog07,
  },
  {
    title: "2021.05.17 23:25",
    subtitle1: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subtitle2: "自分のカラダの記録",
    imgSrc: blog08,
  },
];

const columnSample = [column01, column04, column03, column02];

const Column = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={theme.spacing(8)}>
        {columnSample.map((item, idx) => (
          <Grid key={`${idx}`} item xs={6} md={3}>
            <img
              alt={`${idx}`}
              className={css`
                width: 100%;
              `}
              src={item}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={theme.spacing(2)} marginTop={theme.spacing(8)}>
        {columnData.map((item, idx) => (
          <Grid key={`${item.title}-${idx}`} item xs={12} md={6} lg={3}>
            <BlogCard
              title={item.title}
              imgSrc={item.imgSrc}
              subtitle1={item.subtitle1}
              subtitle2={item.subtitle2}
            />
          </Grid>
        ))}
      </Grid>
      <PrimaryButton title="コラムをもっと見る" onClick={() => {}} />
      <ScrollButton css={css`
        position: absolute;
        bottom: 15%;
        right: -5%;
      `} onClick={()=>{}} />
    </>
  );
};

export default Column;
