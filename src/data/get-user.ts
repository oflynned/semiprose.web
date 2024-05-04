export const getUser = async (token?: string) => {
  const response = await fetch("http://localhost:3002/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};
