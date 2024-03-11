import http from "./httpServices";

export async function userLogin(dataForm) {
  const { data } = await http.post("/users/login", dataForm);
  return data;
}

export async function userProfile(id) {
  const {value} = JSON.parse(localStorage.getItem("token"));
  const { data } = await http.get(`/users/profile/${id}`, {
    headers: { Authorization: `Bearer ${value}` },
  });
  return data;
}
