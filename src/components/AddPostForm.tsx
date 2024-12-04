import React from "react";
import { Form, Input, Button, notification } from "antd";
import { addPost } from "../api/posts";
import { AddPostFormProps, Values } from "../types";

const AddPostForm: React.FC<AddPostFormProps> = ({ onPostAdded }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: Values) => {
    try {
      const newPost = await addPost(values);
      // Add the new post to the table.
      onPostAdded(newPost);

      form.resetFields();

      notification.success({
        message: "Success",
        description: "Post added successfully!",
      });
    } catch (error) {
      console.error("Error adding post:", error);
      notification.error({
        message: "Error",
        description: "Failed to add post. Please try again later.",
      });
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter the title!" }]}
      >
        <Input placeholder="Enter post title" />
      </Form.Item>
      <Form.Item
        label="Content"
        name="body"
        rules={[{ required: true, message: "Please enter the content!" }]}
      >
        <Input.TextArea rows={4} placeholder="Enter post content" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPostForm;
