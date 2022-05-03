import { Col, Card } from 'react-bootstrap';

const Post = ({ post }) => (
  <Col xs={12} md={6} lg={4} gap="4">
    <Card my="5">
      <Card.Img variant="top" src={post.image} />
      <Card.Body>
        <Card.Title>
          {post.firstName} {post.lastName}
        </Card.Title>
        <Card.Text>{post.writeup}</Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={post.avatar} />
    </Card>
  </Col>
);

export default Post;
