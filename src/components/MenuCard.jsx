import { Star } from "@mui/icons-material";
import { Button, Card, Paper, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import Image from "next/image";

const MenuCard = () => {
  return (
    <Card elevation={0}>
      <div className="flex w-full ml-6 ">
        <div className=" rounded-t-3xl overflow-hidden w-fit">
          <Paper
            variant="elevation"
            sx={{ borderRadius: 0 }}
            className="bg-orange-600 text-white font-semibold text-center pt-4 pb-1"
          >
            {" "}
            <span>$ 15</span>
          </Paper>
          <div className="w-[200] h-[200] overflow-hidden menu-card-img ">
            <Image
              src={"/menu.jpg"}
              alt="menu image"
              height={300}
              width={150}
              priority
            />
          </div>
        </div>
        <div className="mt-auto space-y-2 p-3 mr-10 flex-1 border-dashed border-2 border-gray-300 hover:bg-gray-100 border-l-0 relative pl-6 pr-16">
          <div className="absolute bg-white right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
            <Star className="text-orange-500" />
          </div>
          <Typography variant="h4" className="font-semibold capitalize ">
            menu name
          </Typography>
          <p>Soft Drink, Dim Polao, Kabab</p>

          <Button
            variant="contained"
            color="primary"
            className=" text-white font-semibold btn-shape pb-2 ml-auto mr-10 justify-end"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;
