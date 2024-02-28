// import React, { useState } from "react";
// import CreateForm from "@/components/CreateForm";
// import ReportTable from "@/components/ReportTable";
// import { hourly_sales } from "./data";

// export default function Main() {
//   const [cookieStandData, setCookieStandData] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const newCookieStand = {
//       locationName: formData.get("locationName"),
//       minCustomers: formData.get("minCustomers"),
//       maxCustomers: formData.get("maxCustomers"),
//       avgCookiesPerSale: formData.get("avgCookiesPerSale"),
//       hourly_sales:hourly_sales
//     };

//     setCookieStandData((prevData) => [...prevData, newCookieStand]);

//     event.target.reset();
//   };

//   return (
//     <div>
//       <CreateForm onSubmit={handleSubmit} />
//       <ReportTable stands={cookieStandData} hourly_sales={hourly_sales}/>
     
//     </div>
//   );
// }
