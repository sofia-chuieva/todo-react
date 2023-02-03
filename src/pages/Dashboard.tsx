import React, { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { TaskArea } from "../components/TaskArea";
import { SideBar } from "../components/SideBar";

export const DashBoard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <SideBar />
    </Grid>
  );
};
