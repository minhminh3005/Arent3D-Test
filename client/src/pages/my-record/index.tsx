import { Grid, useTheme } from "@mui/material";
import PrimaryButton from "../../components/commons/primary-button";
import RecordCard, { IRecordCard } from "../../components/commons/record-card";
import record01 from "../../images/MyRecommend-1.jpg";
import record02 from "../../images/MyRecommend-2.jpg";
import record03 from "../../images/MyRecommend-3.jpg";
import record04 from "../../images/record-sample-1.jpg";
import record05 from "../../images/record-sample-2.jpg";
import record06 from "../../images/record-sample-3.jpg";
import { css } from "@emotion/css";
import ScrollButton from "../../components/commons/scroll-button";

const recordData: IRecordCard[] = [
  { title: "BODY RECORD", subtitle: "自分のカラダの記録", imgSrc: record01 },
  { title: "MY EXERCISE", subtitle: "自分の運動の記録", imgSrc: record02 },
  { title: "MY DIARY", subtitle: "自分の日記", imgSrc: record03 },
];

const recordSample = [record04, record05];

const MyRecord = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={theme.spacing(8)}>
        <Grid
          item
          xs={12}
          container
          spacing={theme.spacing(7)}
          justifyContent="space-between"
        >
          {recordData.map((item, idx) => (
            <Grid item xs={6} md={4} key={`${item.title}-${idx}`}>
              <RecordCard
                title={item.title}
                subtitle={item.subtitle}
                imgSrc={item.imgSrc}
              />
            </Grid>
          ))}
        </Grid>
        {recordSample.map((item, idx) => (
          <Grid key={`${idx}`} item xs={12}>
            <img
              className={css`
                width: 100%;
              `}
              alt={`${idx}`}
              src={item}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <>
            <div
              className={css`
                font-weight: 400;
                font-size: 22px;
                line-height: 27px;
                letter-spacing: 0.11px;
                color: ${theme.palette.neutral.main}
              `}
            >
              MY DIARY
            </div>
            <img
              className={css`
                width: 100%;
              `}
              alt={"record06"}
              src={record06}
            />
          </>
        </Grid>
      </Grid>
      <PrimaryButton title="自分の日記をもっと見る" onClick={() => {}} />
      <ScrollButton css={css`
        position: absolute;
        top: 50%;
        right: -5%;
      `} onClick={()=>{}} />
    </>
  );
};

export default MyRecord;
