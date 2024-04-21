// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
 //import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// const Success = () => {
//   const [countdown, setCountdown] = useState(10);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timeoutId = setInterval(() => {
//       setCountdown((preCount) => {
//         if (preCount === 1) {
//           clearInterval(timeoutId);
//           navigate("/");
//         }
//         return preCount - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timeoutId);
//   }, [navigate]);

//   return (
//     <>
//       <section className="notFound">
//         <div className="container">
//           <img src="/sandwich.png" alt="success" />
//           <h1>Redirecting to Home in {countdown} seconds...</h1>
//           <Link to={"/"}>
//             Back to Home <HiOutlineArrowNarrowRight />
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Success;





import React from "react";
import { Link, useLocation } from "react-router-dom";


const Success = () => {
  const location = useLocation();
  const reservationData = location.state && location.state.reservationData;

  return (
    <section className="success">
      <div className="container">
        {/* <h1>Reservation Successful</h1> */}
        {reservationData && (
          <div className="details">
            <h2>Your Table Booked Successfully</h2>
            <p>First Name : <span> {reservationData.firstName}</span></p>
            <p>Last Name : <span>{reservationData.lastName}</span></p>
            <p>Email : <span>{reservationData.email}</span></p>
            <p>Phone : <span>{reservationData.phone}</span></p>
            <p>Date : <span>{reservationData.date}</span></p>
            <p>Time : <span>{reservationData.time}</span></p>
            <p>Tableno : <span>{reservationData.tableno}</span></p>

          </div>
        )}
       <div className ="back"> <Link to="/">Back to Home</Link></div>
      </div>
    </section>
  );
};

export default Success;
