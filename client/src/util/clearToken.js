

export default function clearTokenFromLocalStorage() {
  const token = localStorage.getItem("token");
  if (token) {
    const now = new Date();
    const storedTime = JSON.parse(token).expiry;
    if (now.getTime() > storedTime) {
      localStorage.removeItem("token");
    }
  }
}
