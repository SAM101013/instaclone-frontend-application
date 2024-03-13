const API_URL = "http://localhost:5004";

export const signup = async (username, email, password) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
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
    const response = await fetch(`${API_URL}/users/login`, {
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

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users/getAllUsers`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting all users:", error);
    throw error;
  }
};

export default { signup, login, getAllUsers };
