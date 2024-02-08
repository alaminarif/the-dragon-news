import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "@/assets/Rectangle 3979.png";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async () => {
  const { data } = await getAllNews();
  // console.log(data);
  return (
    <Box>
      <Card className="my-5">
        <CardActionArea>
          <CardMedia>
            <Image src={data[0].thumbnail_url} width={800} height={500} alt="top news" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white rounded">{data[0].category}</p>
            <Typography gutterBottom>{data[0].title}</Typography>
            <Typography className="my-3">
              {data[0].author.name}- {data[0].author.published_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.slice(0, 4).map((news) => (
          <Grid item xs={6} key={news.id}>
            <Card className="my-5">
              <CardActionArea>
                <CardMedia>
                  <Image src={news.thumbnail_url} width={800} height={300} alt="top news" />
                </CardMedia>
                <CardContent>
                  <p className="w-[100px] bg-red-500 px-2 text-white rounded">{news.category}</p>
                  <Typography gutterBottom>{news.title}</Typography>
                  <Typography className="my-3">
                    - {news.author.name}- {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
