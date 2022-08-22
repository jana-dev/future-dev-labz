import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { Grid } from "@mui/material";

import { parents } from "./utils";
import OpinionCard from "./components/OpinionCard";
import { useStyles } from "./ParentsOpinion.styles";

const ParentsOpinion = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.opinionContainer}>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
        }}
        modules={[Autoplay]}
      >
        {parents.map((parent, i) => {
          return (
            <SwiperSlide key={i}>
              <OpinionCard
                name={parent.name}
                opinion={`"${parent.opinion}"`}
                photo={parent.photo}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
};

export default ParentsOpinion;
