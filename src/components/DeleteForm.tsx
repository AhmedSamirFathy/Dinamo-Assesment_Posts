import React from "react";
import { Modal, notification } from "antd";
import { deletePost } from "../api/posts";
import { DeleteFormProps } from "../types";

const DeleteForm: React.FC<DeleteFormProps> = ({
  visible,
  postId,
  onCancel,
  onDelete,
}) => {
  const handleDelete = async () => {
    if (postId !== null) {
      try {
        await deletePost(postId);
        onDelete(postId);
        notification.success({
          message: "Deleted",
          description: "Post deleted successfully",
        });
      } catch (error) {
        console.error("Error deleting post:", error);
        notification.error({
          message: "Error",
          description: "Failed to delete post. Please try again later.",
        });
      }
    }
  };

  return (
    <Modal
      title="Confirm Deletion"
      visible={visible}
      onCancel={onCancel}
      onOk={handleDelete}
      okText="Delete"
      cancelText="Cancel"
      confirmLoading={false}
    >
      <p>Are you sure you want to delete this post?</p>
    </Modal>
  );
};

export default DeleteForm;
