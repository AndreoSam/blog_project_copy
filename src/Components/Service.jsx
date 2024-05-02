import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { serviceData } from "../Services/Api";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const About_comp = () => {
  const [service, setService] = useState([]);

  const getservData = async () => {
    const res = await serviceData();
    console.log(res);
    if (res && res?.status === 200) {
      setService(res?.data?.data);
    }
  };
  useEffect(() => {
    getservData();
  }, []);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    flexWrap:'wrap',
    gap:'20px',
    marginTop:'20px',
    textAlign:'center',
    padding:'20px'
  });

  return (
    <>
      <Box>
        <Container style={{backgroundColor:'rgba(0, 128, 0, 0.3)'}}>
          <Typography variant="h2" align="center" marginTop={4}>
            Services
          </Typography>
          <Typography variant="h5" align="center" marginTop={4} style={{color:'olive'}}>
            Laborum repudiandae omnis voluptatum consequatur mollitia ea est
            voluptas ut
          </Typography>
          {/* <Box style={{display:'flex', justifyContent:'space-between',marginTop:'10px' }}> */}
          <StyledToolbar>
            {service.map((item, i) => {
              return (
                <>
                  
                  <Box >
                    <Card sx={{ maxWidth: 345 ,height:'220px',backgroundColor:'skyblue',paddingTop:'10px'}}>
                      <Box>
                        <SettingsSuggestIcon
                          style={{ fontSize: "xxx-large" ,color:'primary'}}
                        />
                      </Box>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{color:'red'}}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          {item.details.slice(0,100)}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </>
              );
            })}
          </StyledToolbar>
          {/* </Box> */}
        </Container>
      </Box>
    </>
  );
};

export default About_comp;
