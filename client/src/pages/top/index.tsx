import { Grid, useTheme } from "@mui/material";
import DishCard, { IDishCard } from "../../components/commons/dish-card";
import Hexagon, { IHexagon } from "../../components/commons/hexagon-button";
import KnifeIcon from "../../components/icons/KnifeIcon";
import CupIcon from "../../components/icons/CupIcon";
import img01 from "../../images/d01.jpg";
import img02 from "../../images/d02.jpg";
import img03 from "../../images/l01.jpg";
import img04 from "../../images/l02.jpg";
import PrimaryButton from "../../components/commons/primary-button";
import ScrollButton from "../../components/commons/scroll-button";
import { css } from "@emotion/css";

const hexaDataArr: IHexagon[] = [
  {
    title: "Morning",
    icon: <KnifeIcon />,
  },
  {
    title: "Lunch",
    icon: <KnifeIcon />,
  },
  {
    title: "Dinner",
    icon: <KnifeIcon />,
  },
  {
    title: "Snack",
    icon: <CupIcon />,
  },
];

const dishDataArr: IDishCard[] = [
  {
    title: "05.21.Morning",
    imgSrc: img01,
  },
  {
    title: "05.21.Lunch",
    imgSrc: img02,
  },
  {
    title: "05.21.Dinner",
    imgSrc: img03,
  },
  {
    title: "05.21.Snack",
    imgSrc: img04,
  },
  {
    title: "05.21.Morning",
    imgSrc: img01,
  },
  {
    title: "05.21.Lunch",
    imgSrc: img02,
  },
  {
    title: "05.21.Dinner",
    imgSrc: img03,
  },
  {
    title: "05.21.Snack",
    imgSrc: img04,
  },
];

const TopPage = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container justifyContent="space-around">
        {hexaDataArr.map((item, idx) => (
          <Grid
            key={`${item.title}-${idx}`}
            item
            xs={6}
            md={3}
            container
            justifyContent="center"
          >
            <Hexagon title={item.title} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={theme.spacing(4)}
        flexDirection="row"
      >
        {dishDataArr.map((item, idx) => (
          <Grid key={`${item.title}-${idx}`} item xs={12} md={6} lg={3}>
            <DishCard title={item.title} imgSrc={item.imgSrc} />
          </Grid>
        ))}
      </Grid>
      <PrimaryButton title="記録をもっと見る" onClick={()=> {}}/>
      <ScrollButton css={css`
        position: absolute;
        top: 50%;
        right: -5%;
      `} onClick={()=>{}} />
    </>
  );
};

export default TopPage;
