export function tokenVerifyLocalStorage(navigate, setToken, setUser){
  const tokenVerify = localStorage.getItem("tokenGQ");
    if(tokenVerify){
      setToken(tokenVerify);
      setUser({
        name: localStorage.getItem("nameGQ"),
        email: localStorage.getItem("emailGQ")
      })
      navigate("/");
    }
}
export function tokenVerify(navigate, token){
  if(!token){
    navigate("/login");
  }
}