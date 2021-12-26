import { useState } from "react";

import CookieStandAdmin from "../components/cookieStandAdmin";
import LoginForm from '../components/login'

export default function Home() {
  const [login, setlogin] = useState('')

  if (login) return (
    <CookieStandAdmin setlogin = {setlogin} login = {login}/>
  );
  return <LoginForm setlogin = {setlogin}/>
}
