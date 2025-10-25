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
import { Technologies } from "components";
import { PROJECTS } from "const";

const HEIGHT_OFFSET = "128px"; // Height of NavBar + Footer + Technologies

export const Home = (): ReactElement => {
  const handleClick = (link: string): void => {
    window.open(link, "_blank"); // Open link in a new tab
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "background.default",
        height: {
          xs: `calc(100vh - ${HEIGHT_OFFSET})`,
          md: `calc(100vh - ${HEIGHT_OFFSET})`,
        },
        m: 0,
        p: 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          alignItems: "center !important",
          display: "flex !important",
          flexDirection: "column !important",
          justifyContent: "space-around !important",
          minHeight: {
            xs: "auto",
            md: `calc(100vh - ${HEIGHT_OFFSET})`,
          },
          py: { xs: 3, md: 0 },
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "text.primary" }}>
          Projects
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            maxHeight: {
              md: "calc(100vh - 350px)",
              lg: "calc(100vh - 250px)",
            }, // Set a fixed height or adjust as needed
            overflowY: "auto", // Enable vertical scrolling
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar in Chrome, Safari, Edge
            },
          }}
        >
          {PROJECTS.map((project) => (
            <Grid
              key={project.title}
              size={4}
            >
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardHeader
                  title={project.title}
                  sx={{
                    color: "text.secondary",
                    backgroundColor: "secondary.main",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography sx={{ color: "text.secondary" }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions
                  disableSpacing
                  sx={{
                    alignItems: "stretch",
                    gap: 1.5,
                    flexDirection: "column",
                    "& > *": {
                      ml: 0,
                    },
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => handleClick(project.gitLink)}
                    sx={{
                      color: "text.primary",
                      textTransform: "unset",
                      border: "1px solid",
                      borderColor: "text.primary",
                    }}
                  >
                    {project.gitText}
                    <project.gitIcon
                      sx={{
                        pl: "10px",
                        color: "text.primary",
                      }}
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleClick(project.siteLink)}
                    sx={{
                      color: "text.primary",
                      textTransform: "unset",
                      border: "1px solid",
                      borderColor: "text.primary",
                    }}
                  >
                    {project.siteText}
                    <project.siteIcon
                      sx={{
                        pl: "10px",
                        color: "text.primary",
                      }}
                    />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Technologies />
      </Container>
    </Container>
  );
};
