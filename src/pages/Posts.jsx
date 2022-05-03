import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Post from '../components/Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch('https://codebuddy.review/posts');
    const resData = await response.json();
    setPosts(resData.data.posts);
    console.log(resData.data.posts);
  };

  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/posts') {
      getPosts();
    }
  }, [window.location.href]);

  const postList = posts.map(post => <Post key={post.id} post={post} />);

  return (
    <Container my="5">
      <Row gap={4}>{postList}</Row>
    </Container>
  );
};

export default Posts;
