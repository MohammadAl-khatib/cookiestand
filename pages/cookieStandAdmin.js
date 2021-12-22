import { useState } from "react";
import Head from "./head";
import Header from "./header";
import CreateForm from "./createForm";
import Footer from "./footer";
import ReportTable from "./reportTable";

function CookieStandAdmin() {
  const [location, setLocation] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [avg, setAvg] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    setLocation([...location,e.target.location.value]);
    setMin(e.target.min.value);
    setMax(e.target.max.value);
    setAvg(e.target.avg.value);
  };

  return (
    <>
      <Head />
      <main>
        <Header />
        <CreateForm formHandler = {formHandler} />
        <ReportTable location = {location} min = {min} max = {max}  avg = {avg}/>
      </main>
      <Footer location = {location} />
    </>
  );
}

export default CookieStandAdmin;
