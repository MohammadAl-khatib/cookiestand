import { hours } from "./data";
import { TrashIcon } from '@heroicons/react/outline'

function ReportTable(props) {
  const { location, min, max, avg } = props;
  return (
    <>
    {location.length > 0 && (
      <table className="w-5/6 mx-auto mt-6 text-center">
        <thead className="bg-emerald-500 border border-stone-900">
          <th className="border border-stone-900">Location</th>
          {hours.map((hour) => {
            return <th className="border border-stone-900">{hour}</th>;
          })}
          <th className="border border-stone-900">Totals</th>
        </thead>
        <tbody>
          {location.map((item) => {
            return (
              <tr key={item[1]} className="even:bg-emerald-400  odd:bg-emerald-200 border border-stone-900">
                <td className="flex justify-between px-4 border-stone-900 text-left">{item[0]} <button onClick={() =>props.deletehandler(item[1])} className="mr-0"><TrashIcon className="h-5 w-5 text-red-400"/></button> </td>
                {[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36].map(
                  (item) => {
                    return <td className="border border-stone-900">{item}</td>;
                  }
                )}
                <td className="border border-stone-900">516</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
        <tr className="bg-emerald-500">
                <td className="border border-stone-900 text-center font-bold">Totals</td>
                {[200, 540, 196, 215, 83, 276, 316, 205, 184, 306, 348, 624, 325, 412].map(
                  (item) => {
                    return <td className="border border-stone-900 font-bold">{item}</td>;
                  }
                )}
                <td className="border border-stone-900 font-bold">2500</td>
              </tr>
        </tfoot>
      </table>
    )
    }
    {
      location.length == 0 && (
        <h1 className="text-center text-2xl mt-6 font-medium">No Cookie Stands Available</h1>
      )
    }
    </>
  );
}

export default ReportTable;
