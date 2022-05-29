import React from "react";
import { Side } from "./Sidebar.style";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Slide, useDisclosure } from "@chakra-ui/react";
import home from "../assets/home.png";
import ex from "../assets/explore.png";
import set from "../assets/settings.png";
import fav from "../assets/star.png";
import tre from "../assets/trend.png";
import { hover } from "@testing-library/user-event/dist/hover";
import close from "../assets/close.png";
const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    // <Slide  direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
    <Side>
      <div style={{"position":"relative", "display":"grid" , "gridColumn":'2'}}>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bolder",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Logo
        </p>
          <img  style={{"position":"absolute" , "width":"10px" , "top":"10px" , "right":"2px" , 'marginTop':"3px" , "marginRight":'2px'}} src={close} alt="" />
      </div>
      <div style={{ marginBottom: "20px" }}>
        {" "}
        <Button className="button" width="3xs" variant="ghost" size="lg">
          <img src={home} width="25px" style={{ marginRight: "10px" }} onClick={onToggle} /> Home
        </Button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        {" "}
        <Button className="button" width="3xs" variant="ghost" size="lg">
          <img src={tre} width="25px" style={{ marginRight: "10px" }} />{" "}
          Trending
        </Button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Button className="button" width="3xs" variant="ghost" size="lg">
          <img src={ex} width="25px" style={{ marginRight: "10px" }} /> Explore
        </Button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Button className="button" width="3xs" variant="ghost" size="lg">
          <img src={fav} width="25px" style={{ marginRight: "10px" }} />{" "}
          Favourites
        </Button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Button className="button" width="3xs" variant="ghost" size="lg">
          <img src={set} width="25px" style={{ marginRight: "10px" }} />{" "}
          Settings
        </Button>
      </div>
    </Side>
 
  );
};

export default Sidebar;
