import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import CustomCard from "../customCard/CustomCard.jsx";
import { useSelector } from "react-redux";

const JustInSection = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);
  console.log("Public books:", publicBooks);

  // Default books = empty array
  let books = [];

  if (publicBooks && publicBooks.length > 0) {
    const sorted = [...publicBooks].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    books = sorted.slice(0, 4); // Show latest 4 books
  }

  return (
  // <div className="mt-5">
  //   <SectionTitle title="Just In!" />

  //   <div className="container mt-4">
  //     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
  //       {books.length > 0 ? (
  //         books.map((book) => (
  //           <div key={book._id} className="col">
  //             <CustomCard {...book} />
  //           </div>
  //         ))
  //       ) : (
  //         <p className="text-center text-muted">No new books available.</p>
  //       )}
  //     </div>
  //   </div>
  // </div>
  <div className="justin-section mt-5 py-4">
    <div className="container px-3 px-md-4">
      
      {/* Better Title */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="fw-bold m-0">Just In</h3>
        <div className="line"></div>
      </div>

      {/* Grid */}
      <div className="row g-4 justify-content-center">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card-wrapper">
                <CustomCard {...book} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">
            No new books available.
          </p>
        )}
      </div>
    </div>
  </div>
);

};  
export default JustInSection;

// import SectionTitle from '../sectionTitle/SectionTitle.jsx'
// import CustomCard from '../customCard/CustomCard.jsx'


// const JustInSection = () => {
//   return (
//     <div className='mt-5'>
//       <SectionTitle title=" Just In!"/>
//       <div className='d-flex gap-2 justify-content-center flex-wrap'>
//         <CustomCard />
//         <CustomCard />
//         <CustomCard />
//         <CustomCard />
//         <CustomCard />
//         <CustomCard />
//         <CustomCard />


//       </div>
//     </div>
//   )
// }

// export default JustInSection