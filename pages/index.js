import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("No location entered");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [avg, setAvg] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    setLocation(e.target.location.value);
    setMin(e.target.min.value);
    setMax(e.target.max.value);
    setAvg(e.target.avg.value);
  };
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between bg-emerald-500 py-4 ">
        <h1 className="text-3xl font-bold">Cookie Stand Admin</h1>
      </header>

      <main>
        <div className=" mt-6 bg-emerald-300 w-3/4 m-auto">
          <h3 className="text-center text-2xl font-medium">
            Create Cookie Stand
          </h3>
          <form className="m-auto" onSubmit={formHandler}>
            <label className="text-center ml-4">Location </label>
            <input
              name="location"
              className=" w-[65rem] h-5"
              placeholder="Enter branch name..."
            />
            <div className="flex justify-between ml-4 mr-8 mt-6">
              <div className="block">
                <h3 className="text-center">Minimum Customer per Hour</h3>
                <input name="min" className=" w-[17rem] h-5" />
              </div>
              <div className="block">
                <h3 className="text-center">Maximum Customer per Hour</h3>
                <input name="max" className=" w-[17rem] h-5" />
              </div>
              <div className="block">
                <h3 className="text-center">Average Cookies per Sale</h3>
                <input name="avg" className=" w-[17rem] h-5" />
              </div>
              <button className="px-20 py-1 bg-emerald-500">Create</button>
            </div>
          </form>
        </div>
        <p className="text-center mt-12">Report Table Coming Soon...</p>
        <p className="text-center mt-6">{JSON.stringify({ location: location, minCustomers: min , maxCustomers:max, avgCookies:avg}, null, 4)}</p>
      </main>

      <footer className="flex justify-between bg-emerald-500 py-4  mt-96">
        <p className="font-bold ml-6 ">&copy;2021</p>
      </footer>
    </div>
  );
}
