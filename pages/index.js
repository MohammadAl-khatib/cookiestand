import { useState } from "react";

import CookieStandAdmin from "./cookieStandAdmin";
import LoginForm from './login'

export default function Home() {
  const [login, setlogin] = useState('')

  if (login) return (
    <CookieStandAdmin setlogin = {setlogin} login = {login}/>
  );
  return <LoginForm setlogin = {setlogin}/>
}
