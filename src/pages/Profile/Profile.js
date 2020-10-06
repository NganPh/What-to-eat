import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../../components/TabPanel/TabPanel";
import Typography from "@material-ui/core/Typography";
import "./Profile.css";

const Home = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <div className="sidebar-header d-flex w-100 align-items-center justify-content-start">
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <div>Back to Home</div>
      </div>
      <div className="profile py-5">
        <div className="w-100 d-flex justify-content-center">
          <Avatar className="avatar">N</Avatar>
        </div>
        <Typography variant="h3" align="center">
          Ngan Pham
        </Typography>
        <Typography variant="subtitle1" align="center">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </Typography>
        <Paper className="w-100 mt-4 flex-grow-1" square>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            centered
          >
            <Tab label="My Recipe" />
            <Tab label="Saved Recipe" />
          </Tabs>
        </Paper>
        <TabPanel value={tab} index={0}>
          <div className="w-100 d-flex justify-content-center flex-row flex-wrap">
            <Avatar className="recipe-avatar" variant="rounded"></Avatar>
            <Avatar className="recipe-avatar" variant="rounded"></Avatar>
            <Avatar className="recipe-avatar" variant="rounded"></Avatar>
            <Avatar className="recipe-avatar" variant="rounded"></Avatar>
          </div>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <div className="w-100 d-flex justify-content-center flex-row flex-wrap">
            <Avatar className="recipe-avatar" variant="rounded"></Avatar>
            <Avatar className="recipe-avatar" variant="rounded"></Avatar>
            <Avatar className="recipe-avatar" variant="rounded"></Avatar>
            <Avatar className="recipe-avatar" variant="rounded"></Avatar>
          </div>
        </TabPanel>
      </div>
    </>
  );
};

export default Home;
