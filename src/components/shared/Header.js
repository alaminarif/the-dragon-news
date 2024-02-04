import { getCurrentDate } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <div>
      <Box>
        <Container>
          {" "}
          <Typography color="gray" variant="body2" textAlign="center">
            @2024 Arifur Rahman
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
