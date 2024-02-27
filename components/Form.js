import React from "react";

export default function Form({ onSubmit }) {
  return (
    <>
      <form
        className='w-3/4 p-4 mx-auto my-auto rounded-md border bg-green-300 mt-8'
        onSubmit={onSubmit}
      >
        <div className='flex items-center justify-center text-2xl pt-2 pb-4 font-semibold'>
          Create Cookie Stand
        </div>
        <div>
          <div className='w-100 flex items-center'>
            <label className='mb-2 text-center'>Location</label>
            <input
              name='locationName'
              id='locationName'
              className='w-full ml-2 pl-1'
            />
          </div>
          <div className='flex items-stretch justify-between'>
            <div className='p-1 rounded-md  text-pretty'>
              <label className='block p-1 text-center'>
                Minimum Customers per Hour
              </label>
              <input
                name='minCustomers'
                className='block  m-1 pl-3'
                id='minCustomers'
              />
            </div>
            <div className='p-1 rounded-md  text-pretty'>
              <label className='block p-1 text-center'>
                Maximum Customers per Hour
              </label>
              <input
                name='maxCustomers'
                className='block  m-1 pl-4'
                id='maxCustomers'
              />
            </div>
            <div className='p-1 rounded-md'>
              <label className='block p-1 text-center'>
                Average Cookies Per Sale
              </label>
              <input
                name='avgCookiesPerSale'
                className='block  m-1 pl-1'
                id='avgCookiesPerSale'
              />
            </div>
            <button
              type='submit'
              className='block w-1/5 ml-5 p-2 h-25 font-medium mt-2 bg-green-500'
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
