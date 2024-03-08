const API_URL = "http://localhost:5003/users";

export const signup = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5003/users/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5003/users/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export default {
  signup: `${API_URL}/users/signup`,
  login: `${API_URL}/users/login`,
};
