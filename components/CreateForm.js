export default function CreateForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onCreate({
      id: event.target.locationName.value,
      location: event.target.locationName.value,
      minimumCustomersPerHour: parseInt(
        event.target.minCustomers.value
      ),
      maximumCustomersPerHour: parseInt(
        event.target.maxCustomers.value
      ),
      averageCookiesPerSale: parseFloat(
        event.target.avgCookiesPerSale.value
      ),
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    });
    event.target.reset();
  }

  return (
    <>
      <form
        className="w-3/4 p-4 mx-auto my-auto rounded-md border bg-green-300 mt-8"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center text-2xl pt-2 pb-4 font-semibold">
          Create Cookie Stand
        </div>
        <div>
          <div className="w-100 flex items-center">
            <label className="mb-2 text-center">Location</label>
            <input
              name="locationName"
              id="locationName"
              className="w-full ml-2 pl-1"
            />
          </div>
          <div className="flex justify-between mt-3 ">
            <div className="p-1 rounded-md  text-pretty  bg-green-200">
              <label className="block p-1 text-center">
                Minimum Customers per Hour
              </label>
              <input
                name="minCustomers"
                className="block  m-auto pl-10 pr-10 text-center "
                id="minCustomers"
              />
            </div>
            <div className="p-1 rounded-md  text-pretty  bg-green-200">
              <label className="block p-1 text-center">
                Maximum Customers per Hour
              </label>
              <input
                name="maxCustomers"
                className="block  m-auto pl-10 pr-10 text-center "
                id="maxCustomers"
              />
            </div>
            <div className="p-1 rounded-md  bg-green-200">
              <label className="block p-1 text-center">
                Average Cookies Per Sale
              </label>
              <input
                name="avgCookiesPerSale"
                className="block  m-auto pl-10 pr-10 text-center "
                id="avgCookiesPerSale"
              />
            </div>
            <button
              type="submit"
              className="block w-1/5 ml-5 p-2 h-25 font-medium  bg-green-500"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
