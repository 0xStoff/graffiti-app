import api from "./client";

const postComment = async (body, params) =>
  api.post("/api/comments", body, params);

const likePost = async (body, params) =>
  api.put("/api/posts/like", body, params);

const getPosts = () => api.get("/api/posts");

// const addPost = (listing, onUploadProgress) => {
//   const data = new FormData();
//   data.append("title", listing.title);
//   data.append("price", listing.price);
//   data.append("categoryId", listing.category.value);
//   data.append("description", listing.description);

//   listing.images.forEach((image, index) => {
//     data.append("images", {
//       name: "image" + index,
//       type: "image/jpg",
//       uri: image,
//     });
//   });

//   if (listing.location)
//     data.append("location", JSON.stringify(listing.location));

//   return api.post(endpoint, data, {
//     onUploadProgress: (progress) =>
//       onUploadProgress(progress.loaded / progress.total),
//   });
// };

export default {
  getPosts,
  postComment,
  likePost,
};
