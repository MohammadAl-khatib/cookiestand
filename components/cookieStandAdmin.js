import { useState } from "react";
import axios from "axios";
import Head from "./head";
import Header from "./header";
import CreateForm from "./createForm";
import Footer from "./footer";
import ReportTable from "./reportTable";

function CookieStandAdmin(props) {
  const [location, setLocation] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [avg, setAvg] = useState(0);
  const config={
    headers: {"Authorization" : `Bearer ${props.login}`}
}
  const formHandler = async (e) => {
    e.preventDefault();
    setMin(e.target.min.value);
    setMax(e.target.max.value);
    setAvg(e.target.avg.value);
    await axios.post(`${process.env.NEXT_PUBLIC_API}/api/v1/cookies/`,{'location': e.target.location.value}, config).then( ()=> {
      axios.get (`${process.env.NEXT_PUBLIC_API}/api/v1/cookies/`, config).then(res =>{
        setLocation(res.data.map(item =>{
          return [item.location, item.id]
        }))
      })
    })
  };

  const deletehandler = async (id) => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API}/api/v1/cookies/${id}`,config).then(() =>{
      axios.get (`${process.env.NEXT_PUBLIC_API}/api/v1/cookies/`, config).then(res =>{
        setLocation(res.data.map(item =>{
          return [item.location, item.id]
        }))
      })
    })
  }

  return (
    <>
      <Head />
      <main>
        <Header setlogin = {props.setlogin}/>
        <CreateForm formHandler = {formHandler} />
        <ReportTable location = {location} min = {min} max = {max}  avg = {avg} deletehandler = {deletehandler}/>
      </main>
      <Footer location = {location} />
    </>
  );
}

export default CookieStandAdmin;
