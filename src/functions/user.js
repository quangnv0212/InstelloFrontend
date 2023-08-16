import axios from "axios";
export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/updateProfilePicture`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const updateCover = async (url, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/updateCover`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const addFriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/addFriend/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const cancelRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/cancelRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const follow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/follow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    console.log(error?.response?.data.message);
    return error?.response?.data.message;
  }
};
export const unfollow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/unfollow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const acceptRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/acceptRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const unfriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/unfriend/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const deleteRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/deleteRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const search = async (searchTerm, token) => {
  try {
    const { data } = await axios.post(
      `https://quangnvfb.click/api/search/${searchTerm}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const addToSearchHistory = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/addToSearchHistory`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const getSearchHistory = async (token) => {
  try {
    const { data } = await axios.get(
      `https://quangnvfb.click/api/getSearchHistory`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const removeFromSearch = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `https://quangnvfb.click/api/removeFromSearch`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const getFriendsPageInfos = async (token) => {
  try {
    const { data } = await axios.get(
      `https://quangnvfb.click/api/getFriendsPageInfos`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error?.response?.data.message;
  }
};
