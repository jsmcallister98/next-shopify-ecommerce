import styled from "styled-components";

// export const WaveSVG = () => {
//   return (
//     <svg
//       preserveAspectRatio="none"
//       width="1440"
//       height="74"
//       viewBox="0 0 1440 74"
//       className="Hero__Swoops-sc-13y35jq-4 bMVQrx"
//     >
//       <path
//         fill="white"
//         d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
//       ></path>
//     </svg>
//   );
// };

export const WaveSVG = () => {
  return (
    <svg
      preserveAspectRatio="none"
      width="1512"
      height="380"
      viewBox="0 0 1512 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M640.41 84.6022C317.096 257.559 254.629 189.841 0 111.967L0 479.5H1512V130.93C1356.18 43.4221 963.723 -88.3544 640.41 84.6022Z"
        fill="white"
      />
    </svg>
  );
};

export const Wave = styled.div`
  //   overflow: hidden;
  display: block;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -250px;
  width: 100%;
  height: 0px;
  transform: translateY(1px);
  background: #fff;
  svg {
    position: absolute;
    left: -3%;
    right: -3%;
    bottom: 0px;
    width: 106%;
    min-width: 600px;
    max-width: unset;
  }
`;
