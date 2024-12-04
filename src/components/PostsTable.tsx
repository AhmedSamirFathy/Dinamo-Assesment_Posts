import React, { useState } from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import DeleteForm from "./DeleteForm";
import { Post, PostsTableProps } from "../types";

const PostsTable: React.FC<PostsTableProps> = ({ posts, onEdit, onDelete }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);

  const handleDeleteClick = (postId: number) => {
    setCurrentPostId(postId);
    setDeleteModalVisible(true);
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
    setCurrentPostId(null);
  };

  const handleDelete = (postId: number) => {
    onDelete(postId);
    setDeleteModalVisible(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Content",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, post: Post) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            onClick={() => onEdit(post)}
            icon={<EditOutlined />}
            type="link"
            style={{ padding: 0 }}
          />
          <Button
            onClick={() => handleDeleteClick(post.id)}
            icon={<DeleteOutlined />}
            type="link"
            style={{ padding: 0 }}
            danger
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={posts} columns={columns} rowKey="id" />
      <DeleteForm
        visible={deleteModalVisible}
        postId={currentPostId}
        onCancel={handleDeleteCancel}
        onDelete={handleDelete}
      />
    </>
  );
};

export default PostsTable;
