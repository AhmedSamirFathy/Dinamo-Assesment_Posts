export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Values {
  title: string;
  body: string;
}

export interface DeleteFormProps {
  visible: boolean;
  postId: number | null;
  onCancel: () => void;
  onDelete: (id: number) => void;
}

export interface EditPostFormProps {
  post: Post;
  onUpdate: (updatedPost: Post) => void;
}

export interface AddPostFormProps {
  onPostAdded: (post: { id: number; title: string; body: string }) => void;
}

export interface PostsTableProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}
