import React, { useState, useEffect } from "react";
import { fetchPosts } from "./api/posts";
import PostsTable from "./components/PostsTable";
import AddPostForm from "./components/AddPostForm";
import EditPostForm from "./components/EditPostForm";
import { Layout, Typography, Button, Modal, notification, Spin } from "antd";
import { Post } from "./types";

const { Content, Header } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchPosts();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      notification.error({
        message: "Error",
        description: "Failed to load posts. Please try again later.",
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handlePostAdded = (newPost: Post) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Add to the start of the table.
    setIsModalVisible(false);
  };

  const handlePostUpdated = async (updatedPost: Post) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setEditingPost(null);
    setIsEditing(false);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsEditing(true);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsEditing(false);
    setEditingPost(null);
  };

  const handlePostDelete = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <Layout>
      <Header
        style={{
          color: "white",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Title style={{ color: "white", margin: 0 }}>Posts</Title>
        <Button
          type="primary"
          style={{ position: "absolute", right: 20, top: 15 }}
          onClick={showModal}
        >
          Add Post
        </Button>
      </Header>
      <Content style={{ padding: "20px" }}>
        {loading ? (
          <Spin
            tip="Loading posts..."
            size="large"
            style={{ display: "block", marginTop: "20px" }}
          />
        ) : (
          <PostsTable
            posts={posts}
            onEdit={handleEdit}
            onDelete={handlePostDelete}
          />
        )}
        <Modal
          title="Add New Post"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <AddPostForm onPostAdded={handlePostAdded} />
        </Modal>
        <Modal
          title="Edit Post"
          visible={isEditing}
          onCancel={handleCancel}
          footer={null}
        >
          {editingPost && (
            <EditPostForm post={editingPost} onUpdate={handlePostUpdated} />
          )}
        </Modal>
      </Content>
    </Layout>
  );
};

export default App;
