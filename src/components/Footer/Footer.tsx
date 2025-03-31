import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FOOTER } from "const";

export const Footer = (): ReactElement => {
  return (
    <Container
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
      }}
      maxWidth={false}
    >
      <Typography
        sx={{
          color: "text.secondary",
          paddingRight: "6px",
        }}
      >
        {FOOTER.TITLE}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: "inline",
          color: "text.primary",
          lineHeight: "1.5",
          paddingRight: "8px",
        }}
      >
        {FOOTER.DESCRIPTION}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
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
