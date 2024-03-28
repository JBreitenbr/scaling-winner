export const Legend = ({
  dimsDict,
  dim,
  colorScale,
  h,
  calcQuantiles
}) =>
  calcQuantiles(dimsDict[dim]["mini"],dimsDict[dim]["maxi"]).map((d,i) => (
    <><rect
      className="legend"
      y={225}
      x={(2*i+1)*18}
      height={0.9*h}
      width= {2*18}
      fill={colorScale(d)}
    ></rect>
    <text style={{fontSize:`${0.45*h}px`}} x={(2*i+1.5)*18-2} y={225+1.5*h}>{d}</text></>
  ));;
