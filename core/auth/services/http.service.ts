import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const userUrl = "https://jsonplaceholder.typicode.com/users/1";

export const getUser = async (): Promise<User> => {
  const response = await axios.get<User>(userUrl);
  return response.data;
};
