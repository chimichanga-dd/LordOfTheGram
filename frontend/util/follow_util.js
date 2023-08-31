import $ from "jquery";

export const createFollow = (follow) =>
  $.ajax({
    method: "POST",
    url: "api/follows",
    data: { follow }
  });

export const deleteFollow = (followingId) =>
  $.ajax({
    method: "DELETE",
    url: `api/follows/${followingId}`
  });

export const getPeople = () =>
  $.ajax({
    method: "GET",
    url: "api/not_following"
  });
