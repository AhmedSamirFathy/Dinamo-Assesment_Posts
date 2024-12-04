import axios from "axios";
import { Post, Values } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch all posts
export const fetchPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

// Add a new post
export const addPost = async (post: Values) => {
  const response = await axios.post(`${BASE_URL}/posts`, post);
  return response.data;
};

// Update an existing post
export const updatePost = async (post: Post) => {
  const response = await axios.put(`${BASE_URL}/posts/${post.id}`, {
    title: post.title,
    body: post.body,
  });
  return response.data;
};

// Delete a post
export const deletePost = async (id: number) => {
  await axios.delete(`${BASE_URL}/posts/${id}`);
};
