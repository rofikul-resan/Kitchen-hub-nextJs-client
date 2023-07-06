import { Typography } from "@mui/material";
import Image from "next/image";

const SectionHeader = ({ title }) => {
  return (
    <div
      className="relative h-[400px] w-full my-12 bg-fixed bg-center"
      style={{ background: "url('/secHeder.jpg')" }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="bg-white/75 text-center py-6">
          <p className="font-fasthand text-orange-700 text-2xl">
            Corporate Applications
          </p>
          <Typography variant="h2" className="capitalize">
            {title}
          </Typography>
          <p className="md:w-7/12 mx-auto font-semibold text-sm">
            Assertively myocardinate robust e-tailers for extensible human
            capital. dpropriately benchmark networks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
