import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import ResumeEdwinLeon from "assets/ResumeEdwinLeon.pdf";
import { CONTACT } from "const";

export const Contact = (): ReactElement => {
  const handleDownloadClick = (): void => {
    const link = document.createElement("a");
    link.href = ResumeEdwinLeon;
    link.setAttribute("download", "Resume Edwin Leon"); // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "background.default",
        height: "calc(100vh - 128px)", // 128px is the height of the NavBar and Footer combined'
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
          minHeight: "calc(100vh - 128px)", // 128px is the height of the NavBar and Footer combined'
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "text.primary",
          }}
        >
          {CONTACT.TITLE}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
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
                  color: "text.primary",
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
              backgroundColor: "primary.main",
              color: "text.primary",
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
