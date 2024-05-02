import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { blogData, catagory_all_Data, recent_post_Data } from '../Services/Api';
import { htmlToText } from 'html-to-text';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CategoryIcon from '@mui/icons-material/Category';
import Loading from '../Components/Loading';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    const [text, setText] = useState("");
    const [count, setCount] = useState(4);
    const [catagory, setCatagory] = useState([]);
    const [recentpost, setRecentpost] = useState([]);
    const [loadding, setLoadding] = useState(true);
    
  
    const getblogData = async () => {
      const res = await blogData();
      console.log(res?.data)
      if (res && res?.data?.status === "success") {
        setBlog((res?.data?.data).slice(0, count));
        setLoadding(false)
      }
    };
    useEffect(() => {
      getblogData();
    }, [count]);
  
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(dateString).toLocaleDateString(options);
    };
  
    const textChanger = (data) => {
      const text = htmlToText(data);
      return text;
    };
    
    const getCatagory = async () => {
      try {
        const result = await catagory_all_Data();
        console.log(result?.data)
        if (result && result?.data?.status === "success") {
          setCatagory(result?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
  
  
    const recentPost = async () => {
      try {
        const resu = await recent_post_Data();
        if (resu && resu?.data?.status === "success") {
          setRecentpost(resu?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getCatagory();
      recentPost();
    }, []);
  
  const getCategoryName = (categoryId) => {
      const category = catagory?.data?.find((category) => category._id === categoryId);
      return category ? category?.category : 'Uncategorized';
  }
  return (
    <>
    <Layout>
    <Grid container>
        <Grid item xs={12} sm={8} style={{ background: "#FBFBFB" }}>
        <Box style={{ margin: '0 auto', width: '80%', marginTop: '50px', height: 'auto', background: '' }}>
          {
          loadding?(<>
          <Loading/>
          </>):(<>
            <Typography variant='h2'>Blogs</Typography>
                {
                    blog.map((item,i)=>{
                        return (<>
<Card sx={{ maxWidth: 755,marginTop:5}}>
      <CardMedia
        sx={{ height: 340}}
        image={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`}
        title="blog image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Box >
        <ul style={{display:'flex',flexWrap:'wrap'}}>
                              <li class="d-flex align-items-center">
                                <PersonIcon fontSize='small' color='primary'/>
                                <Link to="/Blog_link">Monalisa</Link>
                              </li>
                              <li class="d-flex align-items-center ml-4">
                                <DateRange fontSize='small' color='primary'/>
                                <Link>
                                  <time datetime="2020-01-01">
                                    {formatDate(item.createdAt)}
                                  </time>
                                </Link>
                              </li>
                              <li class="d-flex align-items-center ml-4">
                                <CommentIcon fontSize='small' color='primary'/>
                                <Link>
                                  {item.comment_count}
                                </Link>
                              </li>
                              <li class="d-flex align-items-center ml-4">
                              <CategoryIcon fontSize='small' color='primary'/>
                                <Link to="">{getCategoryName(item.category)}</Link>
                              </li>
                            </ul>
        </Box>
        <Typography variant="body1" color="text.secondary">
         {textChanger(item?.postText).slice(0,350)}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/BlogDetails/${item?._id}`}>Read More</Link>
      </CardActions>
    </Card>
                        </>)
                    })
                }
   <Box className="text-center" marginTop={4}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowDownwardIcon />}
                      onClick={() => {
                        setCount(count + 4);
                      }}
                      size="small"
                    >
                      Show More
                    </Button>
                  </Box>
          </>)}
    
                </Box>
        </Grid>
        <Grid item xs={12} sm={4} style={{ background: "" ,marginTop:'30px' }}>
            <Box style={{margin:'auto',height:'auto',width:'60%'}}>
                <Typography variant='h5' marginLeft={4}>Categories</Typography>
            <ul style={{listStyleType:'none'}}>
                {catagory?.data?.map((item, i) => {
                          return (
                            <>
                              <li style={{marginTop:'5px'}}>
                                <Link to={`/Category_post/${item._id}`}><strong>{item.category}</strong></Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
            </Box>
            <Box style={{margin:'auto',height:'auto',width:'60%'}}>
            <Typography variant='h5' marginLeft={4} marginTop={10} marginBottom={3} color={'olive'}>Recent Post</Typography>
            {
            recentpost?.data?.map((item, i) => {
              return (<>
              <Box style={{display:'flex',marginLeft:'15px'}}>
                <Box style={{margin:'5px 10px'}}>
                <img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`}alt="" height={'80px'} width={'80px'}/>
                </Box>
                <Box>
                  <Typography><strong>{item.title.slice(0,25)}</strong></Typography>
                  <time datetime="2020-01-01">
                  {formatDate(item.createdAt)}
                  </time>
                </Box>
            </Box>
              </>)
            })

            }
            
            </Box>
        </Grid>

    </Grid>


    </Layout>
    </>
  )
}

export default Blog