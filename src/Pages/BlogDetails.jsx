import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { Box, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
// import { red } from '@mui/material/colors'
import { Link, useParams } from 'react-router-dom'
import { blogDetailsData, catagory_all_Data, commentsData, createCommentData, recent_post_Data } from '../Services/Api'
import { htmlToText } from 'html-to-text'
import CommentIcon from '@mui/icons-material/Comment';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from '@mui/icons-material';
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ReplyIcon from '@mui/icons-material/Reply';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const BlogDetails = () => {
  const { id } = useParams();
  const [blgDetail, setBlgDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const [recentpost, setRecentpost] = useState([]);
  const [count, setCount] = useState(4);

  //comment
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const getBlogDetails = async () => {
    try {
      const response = await blogDetailsData(id);
      setBlgDetail(response?.data);
    } catch (error) {
      console.log("error" + error);
    }
  };
  const getComments = async () => {
    try {
      const res = await commentsData(id);
      setComments((res?.data?.post?.comment?.comments).reverse().slice(0,count));
      console.log(comments)
    } catch (error) {
      console.log("error" + error);
    }
  };

  useEffect(()=>{
    getComments();
  },[count])

  const getCatagory = async () => {
    try {
      const result = await catagory_all_Data();
      // console.log(result?.data);
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
        // console.log(resu?.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetails();
    // getComments();
    getCatagory();
    recentPost();
  }, []);


  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(options);
  };

  const textChanger = (data) => {
    const text = htmlToText(data);
    return text;
  };

  const postComment = async (e) => {
    e.preventDefault();
    await createCommentData({ name, email, comment }, id);
    getComments();
    setName('');
    setEmail('');
    setComment('');
  };

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
        <Typography variant='h2'>Blog Details</Typography>
        <Card sx={{ maxWidth: 755,marginTop:5}}>
      <CardMedia
        sx={{ height: 340}}
        image={`https://restapinodejs.onrender.com/api/blog/image/${id}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {blgDetail?.data?.title}
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
                                  {formatDate(blgDetail?.data?.createdAt)}
                                  </time>
                                </Link>
                              </li>
                              <li class="d-flex align-items-center ml-4">
                                <CommentIcon fontSize='small' color='primary'/>
                                <Link>
                                {blgDetail?.data?.comments.length}
                                </Link>
                              </li>
                              <li class="d-flex align-items-center ml-4">
                              <CategoryIcon fontSize='small' color='primary'/>
                                <Link to="">{getCategoryName(blgDetail?.data?.category)}</Link>
                              </li>
                              <li class="d-flex align-items-center ml-4">
                              <ThumbUpAltIcon fontSize='small' color='primary'/>
                                <Link to=""> {blgDetail?.data?.likes}</Link>
                              </li>
                              <li class="d-flex align-items-center ml-4">
                              <ThumbDownAltIcon fontSize='small' color='primary'/>
                                <Link to=""> {blgDetail?.data?.unlikes}</Link>
                              </li>
                            </ul>
        </Box>
        <Typography variant="body1" color="text.secondary">
        {textChanger(blgDetail?.data?.postText)}
        </Typography>
      </CardContent>
    </Card>
          </Box>
          
        <Box style={{ margin: '0 auto', width: '80%', marginTop: '10px', height: 'auto'}}>
          <Typography variant='h5'><strong>{blgDetail?.data?.comments.length} Comments</strong></Typography>
          {comments?.map((item, i) => {
            return (<>
            <Box style={{marginTop:'15px',marginLeft:'20px'}}>
            <Typography variant='h6'><strong>{item.name}</strong></Typography>
            <Typography>  
               <time datetime="2020-01-01">{formatDate(item.createdAt)}</time>
            </Typography>
            <Typography>{item.comment}</Typography>
            <Typography color='gray'><ReplyIcon/><strong>Reply</strong> </Typography>
            </Box>
            </>)
          })}
        </Box>

        <Box className="text-center" marginTop={4}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowDownwardIcon />}
                      onClick={() => {
                        setCount(count + 4);
                      }}
                      size="small"
                    >
                      Show Previous Comments
                    </Button>
                  </Box>

          <Box className='mt-5 shadow p-3 mb-5 bg-body rounded' style={{marginLeft:'auto',marginRight:'auto', width:'80%'}}>
        <Typography variant='h5'><strong>Leave a Comment</strong></Typography><hr/>
        <Typography color='gray'> Your email address will not be published. Required
                        fields are marked *</Typography>
          <form className='mt-4'>
             <TextField id="outlined-basic" label="Your Name*" variant="outlined" size='small' value={name} onChange={e=>setName(e.target.value)} style={{width:'80%'}}/><br/>

             <TextField  label="Your Email*" variant="outlined" size='small' style={{marginTop:5,width:'80%'}} value={email} onChange={e=>setEmail(e.target.value)} /><br/>

             <TextField  label="Your Comment*" variant="outlined" size='small' style={{marginTop:5,width:'80%'}} value={comment} onChange={e=>setComment(e.target.value)} multiline rows={3}/><br/>

             <Button variant="contained" size='large' style={{marginTop:10, marginBottom:20,backgroundColor:'green'}} onClick={postComment} >Post Comment</Button>
          </form>
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

export default BlogDetails