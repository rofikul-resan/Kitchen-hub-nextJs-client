"use client";
import { Paper, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section>
      <div className="mt-20 mb-12 w-fit mx-auto">
        <div className="flex gap-5 text-orange-500">
          <span>
            <AcUnitIcon />{" "}
          </span>{" "}
          <p className="font-semibold">Introduction of Kitchen Hub</p>
          <span>
            <AcUnitIcon />{" "}
          </span>
        </div>
        <Typography variant="h4" fontFamily={"cursive"}>
          We Are Experienced Restaurant.
        </Typography>
      </div>
      <div className="grid md:grid-cols-2 relative">
        <Paper
          sx={{ borderRadius: "99999px" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-black "
        >
          <div className="text-center h-28 w-28 flex justify-center items-center flex-col ">
            <p className="text-3xl text-orange-600 font-semibold font-fasthand">
              {" "}
              10
            </p>
            <small className="text-xs font-semibold">Year Experience</small>
          </div>
        </Paper>
        <div>
          <Image
            src={"/2col-gallery-02.png"}
            alt="image"
            height={400}
            width={250}
            priority
            className="rounded-md w-full h-full"
          />
        </div>
        <div className="p-6 pt-0 md:w-10/12 mx-auto duration-500 space-y-6 ">
          <span className="font-fasthand text-3xl text-orange-600">
            About US
          </span>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Brought to you by <br /> largest creatives.
          </Typography>
          <p className="text-gray-700">
            Compellingly engage backend technology and 2.0 strategic theme
            areas. Distinctively simplify world-class portals through global
            human capital holisticly expedite multimedia.
          </p>
          <Paper
            elevation={1}
            sx={{ transitionDuration: "0.5s" }}
            className="flex gap-6 p-4 hover:translate-x-3"
          >
            <Image
              src={"/mission.svg"}
              alt="img"
              height={100}
              width={100}
              priority
            />
            <div>
              <Typography variant="h5">Best foods in the city</Typography>
              <Typography variant="p" sx={{ fontSize: "14px" }}>
                Objectively transition virtual functionaities via
                enterprise-wide benefits.
              </Typography>
            </div>
          </Paper>
          <Paper
            elevation={1}
            sx={{ transitionDuration: "0.5s" }}
            className="flex gap-6 p-4  hover:translate-x-3"
          >
            <Image
              src={"/mission.svg"}
              alt="img"
              height={100}
              width={100}
              priority
            />
            <div>
              <Typography variant="h5">Best foods in the city</Typography>
              <Typography variant="p" sx={{ fontSize: "14px" }}>
                Objectively transition virtual functionaities via
                enterprise-wide benefits.
              </Typography>
            </div>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
