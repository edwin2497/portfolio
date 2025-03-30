import { ReactElement } from "react";
import { Container, Typography } from "@mui/material";
import { ABOUT } from "const";

export const About = (): ReactElement => {
  return (
    <Container
      maxWidth={false} // Disable the default maxWidth behavior
      sx={{
        backgroundColor: "background.default", // Use the default background color from the theme
        height: "calc(100vh - 164px)", // 164px is the height of the NavBar and Footer combined'
        margin: "0",
        padding: "0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 164px)", // 164px is the height of the NavBar and Footer combined'
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "text.primary", // Use the primary text color from the theme
          }}
        >
          {ABOUT.TITLE}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary", // Use the secondary text color from the theme
          }}
        >
          {ABOUT.DESCRIPTION}
        </Typography>
      </Container>
    </Container>
  );
};
