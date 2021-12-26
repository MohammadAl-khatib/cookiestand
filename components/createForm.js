function CreateForm(props) {
  return (
    <div className="border-2 border-emerald-400 mt-8 bg-emerald-200 w-5/6 m-auto pb-4 rounded-lg px-12">
      <form className="m-auto" onSubmit={(e) => props.formHandler(e)}>
        <div className="flex justify-between place-items-end ml-4 mr-8 mt-6">
          <div className="block bg-emerald-200  px-2 rounded">
            <h3 className="text-center font-extrabold mb-2">ADD LOCATION</h3>
            <input name="location" className=" w-[45rem] h-9 pl-3"   placeholder="Cookie Stand Location"/>
          </div>
          <button className=" h-[3rem] bg-emerald-500 rounded font-medium w-[22rem]">CREATE STAND</button>
        </div>

        <div className="flex justify-between ml-4 mr-8 mt-6">
          <div className="block bg-emerald-200 pb-2 px-2 rounded">
            <h3 className="text-center font-extrabold pb-2">Minimum Customer per Hour</h3>
            <input name="min" className=" w-[20rem] h-9 pl-3" defaultValue ={0} />
          </div>
          <div className="block bg-emerald-200 pb-2 px-2 rounded">
            <h3 className="text-center font-extrabold pb-2">Maximum Customer per Hour</h3>
            <input name="max" className=" w-[20rem] h-9 pl-3" defaultValue ={0}/>
          </div>
          <div className="block bg-emerald-200 pb-2 px-2 rounded">
            <h3 className="text-center font-extrabold pb-2">Average Cookies per Sale</h3>
            <input name="avg" className=" w-[20rem] h-9 pl-3" defaultValue ={0}/>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
