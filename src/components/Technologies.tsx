import { ReactElement } from "react";
import { Box } from "@mui/material";
import { TECHNOLOGIES } from "const";

export const Technologies = (): ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {TECHNOLOGIES.map((tech) => (
        <img
          key={tech.name}
          src={tech.icon}
          alt={tech.name}
          height="50px"
          width="50px"
        />
      ))}
    </Box>
  );
};
