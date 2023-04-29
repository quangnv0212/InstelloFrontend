import axios from "axios";
export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      `https://quangnv.fun/createPost`,
      {
        type,
        background,
        text,
        images,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error.response.data.message;
  }
};
export const reactPost = async (postId, react, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnv.fun/reactPost`,
      {
        postId,
        react,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const getReacts = async (postId, token) => {
  try {
    const { data } = await axios.get(
      `https://quangnv.fun/getReacts/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const comment = async (postId, comment, image, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnv.fun/comment`,
      {
        postId,
        comment,
        image,
      },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const savePost = async (postId, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnv.fun/savePost/${postId}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const deletePost = async (postId, token) => {
  try {
    const { data } = await axios.delete(
      `https://quangnv.fun/deletePost/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
