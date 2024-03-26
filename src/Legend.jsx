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
      y="215"
      x={(2*i+1)*h}
      height={0.9*h}
      width= {2*h}
      fill={colorScale(d)}
    ></rect>
    <text className="quantiles" x={(2*i+1.5)*h-2} y="240">{d}</text></>
  ));;
