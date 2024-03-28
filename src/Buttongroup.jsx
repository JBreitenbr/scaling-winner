export const Buttongroup = ({
  h,
  yearArr,
  colorScale,
  year,
  setYear,
  dimsDict,
  dim
}) =>
  yearArr.map((d,i) => (
    <><rect
      y={505}
      x={(2*i+1)*15}
      height={0.9*h}
      width= {2*15}
      stroke="darkgrey"
      fill={year==d?colorScale(dimsDict[dim]["maxi"]):colorScale(dimsDict[dim]["mini"])}
    ></rect>
    <text style={year==d?{fill:"white",fontSize:`${0.5*h}px`}:{fontSize:`${0.5*h}px`}} onClick={()=>setYear(d)} x={(2*i+1.5)*15-4} y={517}>{d}</text></>
  ));
