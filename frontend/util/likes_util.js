import $ from "jquery";

export const createLike = (like) =>
  $.ajax({
    method: "POST",
    url: "api/likes",
    data: { like }
  });

export const deleteLike = (postId) =>
  $.ajax({
    method: "DELETE",
    url: `api/likes/${postId}`
  });
