import { hours } from "../data";
import CookieStandTableRow from "./CookieStandTableRow";

export default function CookieStandTable({ stands, deleteStand }) {
  if (!stands || stands.length === 0) {
    return (
      <h2 className="mt-8 text-2xl text-center text-gray-800">
        No Cookie Stands Available
      </h2>
    );
  }

  let totalsByHour = new Array(hours.length).fill(0);
  stands.forEach((stand) => {
    stand.hourly_sales.forEach((sale, index) => {
      totalsByHour[index] += sale;
    });
  });

  return (
    <table className="border border-green-300 w-3/4 mx-auto my-5 rounded-lg">
      <thead className="border border-green-600">
        <tr className="border border-green-600 bg-green-500">
          <th className="border border-green-600 text-center">Location</th>
          {hours.map((hour) => {
            return (
              <th key={hour} className="border border-green-600 text-center">
                {hour}
              </th>
            );
          })}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        {stands.map((stand) => (
          <CookieStandTableRow
            key={stand.id}
            stand={stand}
            deleteStand={deleteStand}
          />
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-green-500 border border-green-600 ">
          <td className="border border-green-600 font-bold">Totals</td>
          {totalsByHour.map((total, index) => (
            <td className="border border-green-600 text-right" key={index}>
              {total}
            </td>
          ))}
          <td className="text-right">
            {totalsByHour.reduce((num, sum) => num + sum, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
