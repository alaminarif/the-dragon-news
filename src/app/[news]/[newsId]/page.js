import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
const NewsDetailPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  // console.log(data);
  return (
    <div className="my-2">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <h1 className="">Image</h1>
            <Image src={news.thumbnail_url} width={800} height={500} alt="news" />
            <Grid container spacing={2} className="my-2">
              <Grid item lg={6}>
                <Image src={news.thumbnail_url} width={800} height={500} alt="news" />
              </Grid>
              <Grid item lg={6}>
                <Image src={news.image_url} width={800} height={500} alt="news" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6}>
            <Typography variant="h5" component="h2" className="">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar alt="author" src={news.author.img} />
              <Typography> By{news.author.name}</Typography>
              <Typography>- By{news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px",
                color: "gray",
              }}
            >
              {news.details}
            </Typography>
            <Typography variant="h6">``Many desktop publishing packages and web page editors now use as their default model text!</Typography>
            <Typography variant="h6">-Jhankar Mahbub Bhai</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewsDetailPage;
