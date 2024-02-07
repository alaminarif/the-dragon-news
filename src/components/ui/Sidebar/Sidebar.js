import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/Rectangle 3979.png";
const Sidebar = () => {
  return (
    <div>
      <Card className="my-5">
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} width={800} alt="top news" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white rounded">Technology</p>
            <Typography gutterBottom>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</Typography>
            <Typography className="my-3">By Arifur Rahman - Fabruary 18 2024</Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Sidebar;
