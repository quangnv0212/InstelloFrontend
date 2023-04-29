import axios from "axios";

export const uplaodImages = async (formData, path, token) => {
  try {
    const { data } = await axios.post(
      `https://quangnv.fun/uploadImages`,
      formData,
      {
        headers: {
          Auhorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
