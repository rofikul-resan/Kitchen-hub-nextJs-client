"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Button, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { orange } from "@mui/material/colors";

const SwiperCard = ({ image }) => {
  return (
    <div className="h-[700] overflow-hidden relative">
      <Image
        src={image}
        alt="bannar 1"
        height={700}
        width={1300}
        className="w-full h-[700px]"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-l to-black/90 from-black/25 flex items-center pl-16">
        <div>
          <Typography variant="h3" className="text-white">
            Welcome To <br /> Our Kitchen Hub
          </Typography>
          <Typography variant="p" className="text-white ">
            <p className="md:w-5/12 mt-6">
              Let your loyal customers know you’re thinking of them. Invite them
              in for a free birthday dessert! Always send these messages in the
              morning so the birthday girl/boy has a chance to make plans. It
              will also help to brighten their whole day. Don’t know the dates?
              This is an opportunity to bond with your subscribers.
            </p>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              color: "white",
              borderColor: "white",
              borderRadius: "0px 10px",
              "&:hover": {
                bgcolor: orange["900"],
              },
            }}
            endIcon={<ArrowForward />}
            className="mt-6"
          >
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
};
const HomeBanner = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <SwiperCard image={"/2col-gallery-01.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard image={"/2col-gallery-02.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard image={"/2col-gallery-03.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard image={"/2col-gallery-04.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard image={"/2col-gallery-05.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard image={"/2col-gallery-06.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
