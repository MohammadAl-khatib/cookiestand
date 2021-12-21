function CreateForm(props) {
  return (
    <div className=" mt-8 bg-emerald-300 w-3/4 m-auto pb-4 rounded">
      <h3 className="text-center text-2xl font-medium py-4">Create Cookie Stand</h3>
      <form className="m-auto" onSubmit={(e) => props.formHandler(e)}>
        <label className="text-center ml-4 font-medium">Location </label>
        <input
          name="location"
          className=" w-[65rem] h-5"
          placeholder="Enter branch name..."
        />
        <div className="flex justify-between ml-4 mr-8 mt-6">
          <div className="block bg-emerald-200 pb-2 px-2 rounded">
            <h3 className="text-center font-medium">Minimum Customer per Hour</h3>
            <input name="min" className=" w-[17rem] h-5" />
          </div>
          <div className="block bg-emerald-200 pb-2 px-2 rounded">
            <h3 className="text-center font-medium">Maximum Customer per Hour</h3>
            <input name="max" className=" w-[17rem] h-5" />
          </div>
          <div className="block bg-emerald-200 pb-2 px-2 rounded">
            <h3 className="text-center font-medium">Average Cookies per Sale</h3>
            <input name="avg" className=" w-[17rem] h-5" />
          </div>
          <button className="px-20 py-1 bg-emerald-500 rounded font-medium">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
