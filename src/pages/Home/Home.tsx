import { ReactElement } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { PROJECTS } from "const";

export const Home = (): ReactElement => {
  const handleClick = (link: string): void => {
    window.open(link, "_blank"); // Open the link in a new tab
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
          Projects
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            maxHeight: "calc(100vh - 250px)", // Set a fixed height or adjust as needed
            overflowY: "auto", // Enable vertical scrolling
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar in Chrome, Safari, Edge
            },
          }}
        >
          {PROJECTS.map((project) => (
            <Grid key={project.title} size={{ xs: 4, md: 6 }}>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardHeader
                  title={project.title}
                  sx={{
                    color: "text.secondary",
                    backgroundColor: "secondary.main",
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => handleClick(project.link)}
                    sx={{
                      color: "text.primary",
                      textTransform: "unset",
                      border: "1px solid",
                      boderColor: "text.primary",
                    }}
                  >
                    {project.text}
                    <project.icon
                      sx={{
                        paddingLeft: "10px",
                        color: "text.primary",
                      }}
                    />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};
