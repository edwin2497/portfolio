import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FOOTER } from "const";

export const Footer = (): ReactElement => {
  return (
    <Container
      sx={{
        backgroundColor: "background.default", // Use the default background color from the theme
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
      }}
      maxWidth={false}
    >
      <Typography
        variant="h6"
        sx={{
          color: "text.secondary", // Use the primary text color from the theme
        }}
      >
        {FOOTER.TITLE}
        <Link
          to="https://github.com/edwin2497"
          style={{ textDecoration: "none", color: "grey" }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "inline",
              color: "text.primary", // Use the primary text color from the theme
              lineHeight: "1.5",
            }}
          >
            {FOOTER.DESCRIPTION}
          </Typography>
        </Link>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "24px",
        }}
      >
        <Grid container spacing={2}>
          {FOOTER.CONTACT_INFO.map((item) => (
            <Link key={item.name} to={item.url}>
              <item.icon
                sx={{
                  color: "text.primary",
                }}
              />
            </Link>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
