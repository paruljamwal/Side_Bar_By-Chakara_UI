import React from "react";
import { Side } from "./Sidebar.style";
import {AddIcon,SettingsIcon} from '@chakra-ui/icons'
import { Button, ButtonGroup } from "@chakra-ui/react";
import home from '../assets/home.png'
import ex from '../assets/explore.png'
import set from '../assets/settings.png'
import fav from '../assets/star.png'
import tre from '../assets/trend.png'
const Sidebar = () => {
  return (
    <Side>
      <div>
        <p style={{"fontSize":'30px', "fontWeight":"bolder", "textAlign":"center", "marginBottom":"20px"}} >Logo</p>
      </div>
      <div style={{"marginBottom":"20px"}}>
        {" "}
        <Button  _hover='rgb(26,134,208)' width='3xs' variant="ghost" size='lg'>
       <img src={home} width='25px' style={{"marginRight":"10px"}} /> Home
        </Button>
      </div>
      <div style={{"marginBottom":"20px"}}>
        {" "}
        <Button _hover='rgb(26,134,208)' width='3xs' variant="ghost" size='lg'>
        <img src={tre} width='25px' style={{"marginRight":"10px"}} />  Trending
        </Button>
      </div>
      <div style={{"marginBottom":"20px"}}>
        <Button  _hover='rgb(26,134,208)'  width='3xs' variant="ghost" size='lg'>
        <img src={ex} width='25px' style={{"marginRight":"10px"}} /> Explore
        </Button>
      </div>
      <div style={{"marginBottom":"20px"}}>
        <Button _hover='rgb(26,134,208)' width='3xs' variant="ghost" size='lg'>
        <img src={fav} width='25px' style={{"marginRight":"10px"}} /> Favourites
        </Button>
      </div>
      <div style={{"marginBottom":"20px"}}>
        <Button  _hover='rgb(26,134,208)' width='3xs' variant="ghost" size='lg'>
        <img src={set} width='25px' style={{"marginRight":"10px"}} />  Settings
        </Button>
      </div>
    </Side>
  );
};

export default Sidebar;
