import { getCurrentDate } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";
import headingImage from "@/assets/The Dragon News.png";
import Image from "next/image";
const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <div>
      <Box className="w-full my-5">
        <Container>
          <Image className="mx-auto" src={headingImage} width={500} alt="Heading Image" />
          <Typography color="gray" variant="body2" textAlign="center" className="my-2">
            Journalism Without Fear or Favour
          </Typography>{" "}
          <Typography color="gray" variant="body2" textAlign="center">
            {currentDate}
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Header;
