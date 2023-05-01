// import React, { useState } from "react";
// import "./SideBar.css";
// import bgImage from "../../brandDriveAssets/BRANDING-ASSETS/brand-drive-logomark-01.png";
// import one from "../../brandDriveAssets/BRANDING-ASSETS/bd-logo-white-main-01.png";

// import two from "../../brandDriveAssets/BRANDING-ASSETS/brand drive logo mark-main-01.svg";

// // import three from "../../brandDriveAssets/BRANDING-ASSETS/brand-drive-logomark-01.svg";


// // import four from "../../brandDriveAssets/BRANDING-ASSETS/brand-drive-logomark-01.png";

// // import five from "../../brandDriveAssets/BRANDING-ASSETS/brand-drive-logomark-01.png";

// // import six from "../../brandDriveAssets/BRANDING-ASSETS/brand-drive-logomark-01.png";



// const SideBar = () => {
//   const [isExpanded, setExpandedState] = useState(false);
//   const menuItems = [
//     {
//       text: "Dashboard",
//       icon: one,
//     },
//     {
//       text: "Admin Profile",
//       icon: two,
//     },
//     {
//       text: "Admin Profile",
//       icon: "brand-drive-logomark-01.png",
//     },
//     {
//       text: "Admin Profile",
//       icon: "brand-drive-logomark-01.png",
//     },
//     {
//       text: "Admin Profile",
//       icon: "brand-drive-logomark-01.png",
//     },
//     {
//       text: "Admin Profile",
//       icon: "brand-drive-logomark-01.png",
//     },
//   ];

//   return (
//     <div
//       className={
//         isExpanded
//           ? "Side-nav-container"
//           : "side-nav-container side-nav-container-NX"
//       }
//     >
//       <div className="nav-upper">
//         <div className="nav-heading">
//           {isExpanded && (
//             <div className="nav-brand">
//               <img src={bgImage} alt="logo" />
//               <h4>BrandDrive</h4>
//             </div>
//           )}

//           <button
//             className={isExpanded ? "hamburger hamburger-in" : "hamburger-out"}
//             onClick={() => setExpandedState(!isExpanded)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//         <div className="nav-menu">
//           {menuItems.map(({ text, icon }) => (
//             <a href="http://google.com" className="menu-item">
//               <img src={icon} alt="" srcSet="" />
//               <p>{text}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles({
  root: {
    background: "#F4F5F9",
    width: 45,
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    position: "fixed",
  },
});