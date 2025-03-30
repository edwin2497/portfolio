import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import { CONTACT } from "const";

export const Contact = (): ReactElement => {
  const handleDownloadClick = () => {};

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
          {CONTACT.TITLE}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary", // Use the secondary text color from the theme
          }}
        >
          {CONTACT.DESCRIPTION}
        </Typography>
        <Box
          sx={{
            paddingTop: "14px",
          }}
        >
          {CONTACT.CONTACT_INFO.map((item) => (
            <Link
              key={item.name}
              to={item.url}
              style={{
                textDecoration: "none",
                color: "#C5C6C7",
                padding: "6px",
              }}
            >
              <item.icon
                sx={{
                  color: "text.primary", // Use the primary text color from the theme
                }}
              />
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            paddingTop: "14px",
          }}
        >
          <Button
            variant="outlined"
            onClick={handleDownloadClick}
            sx={{
              backgroundColor: "primary.main", // Use the primary color from the theme
              color: "text.primary", // Use the primary text color from the theme
              textTransform: "unset",
            }}
          >
            {CONTACT.RESUME.LABEL}
          </Button>
        </Box>
      </Container>
    </Container>
  );
};
