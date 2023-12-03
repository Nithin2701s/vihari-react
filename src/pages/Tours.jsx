// import React from 'react';
// import Navbar from '../components/UI/Navbar';

// const Tours = ({ tours }) => {
//   const [tours, setTours] = useState([]);
//   const [offset, setOffset] = useState(0);
//   useEffect(() => {
//     // Fetch initial tours
//     fetchTours();
//   }, []);
//   return (
//     <>
//       <div class="gallary-header text-center">
//     <h2>
//         tours
//     </h2>
// </div>
// <div id="pack" class="packages" style={{marginTop: '40px'}}>
    
//     <div class="container">
//         <div class="packages-content">
//             <div class="row">
//                 <div class="col-md-4 col-sm-6">
//                     <div class="single-package-item">
//                         <div >
//                             <img style={{height:'200px'}} src="/<%=tour.DispImageurl%>" alt="package-place"/>
//                         </div>
                        
//                         <div class="single-package-item-txt">
//                             <h3><a href="/"></a> <span class="pull-right"><i class="fa-solid fa-indian-rupee-sign "></i></span></h3>
//                             <div class="packages-para">
//                                 <p>
//                                     <i class="fa fa-angle-right"></i>  5 star accomodation
//                                 </p>
//                                 <p>
//                                     <span>
//                                         <i class="fa fa-angle-right"></i>  transportation
//                                     </span>
//                                     <i class="fa fa-angle-right"></i> food facilities
//                                  </p>
//                             </div>
//                             <div class="packages-review">
//                                 <p>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
                                    
//                                 </p>
//                             </div>
//                             <div class="about-btn">
//                                <a href="/payment"> <button style={{backgroundColor:'#06bbcc'}} class="about-view packages-btn">
//                                     book now
//                                 </button></a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
            
//                 </div>
//                 </div>
//                 </div>
//             </div>
//     </>
//   );
// };

// export default Tours;