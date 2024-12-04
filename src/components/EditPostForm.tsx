import React, { useEffect, useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { EditPostFormProps, Values } from "../types";
import { updatePost } from "../api/posts";

const EditPostForm: React.FC<EditPostFormProps> = ({ post, onUpdate }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({ title: post.title, body: post.body });
  }, [post, form]);

  const handleFinish = async (values: Values) => {
    setLoading(true);
    const updatedPost = { ...post, ...values };
    if (updatedPost.id > 100) {
      // If the post is user-created, update it directly in the table
      onUpdate(updatedPost);
      notification.success({
        message: "Success",
        description: "Post updated locally!",
      });
    } else {
      // If the post is from the API, send a PUT request
      try {
        const updatedPostFromApi = await updatePost(updatedPost);
        onUpdate(updatedPostFromApi);
        notification.success({
          message: "Success",
          description: "Post updated successfully on the server!",
        });
      } catch (error) {
        console.error("Failed to update post:", error);
        notification.error({
          message: "Error",
          description: "Failed to update post. Please try again later.",
        });
      }
    }
    form.resetFields();
    setLoading(false);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ title: post.title, body: post.body }}
      onFinish={handleFinish}
    >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="body" label="Body" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditPostForm;
