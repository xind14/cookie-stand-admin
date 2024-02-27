import React, { useState } from "react";
import Form from "./Form";

export default function Main() {
  const [cookieStandData, setCookieStandData] = useState([]);
  const [lastCreatedCookieStand, setLastCreatedCookieStand] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCookieStand = {
      locationName: formData.get("locationName"),
      minCustomers: formData.get("minCustomers"),
      maxCustomers: formData.get("maxCustomers"),
      avgCookiesPerSale: formData.get("avgCookiesPerSale"),
    };

    setCookieStandData((prevData) => [...prevData, newCookieStand]);
    setLastCreatedCookieStand(newCookieStand);

    event.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      {lastCreatedCookieStand && (
        <div className='flex'>
          {JSON.stringify(lastCreatedCookieStand, null, 2)}
        </div>
      )}
      <p className='flex items-center justify-center pt-8 pb-16 text-gray-500'>
        Report Table Coming Soon...
      </p>
    </div>
  );
}
