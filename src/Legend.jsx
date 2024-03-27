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
      x={(2*i+1)*20}
      height={0.9*h}
      width= {2*20}
      fill={colorScale(d)}
    ></rect>
    <text className="quantiles" x={(2*i+1.5)*20-2} y={250}>{d}</text></>
  ));;
