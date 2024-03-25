export const Barchart = ({
  dimsDict,
  dim,
  country,
  colorScale,
  h,
  dimScale
}) =>
  dimsDict[dim][country].map((d,i) => (
    <><rect
      className="mark"
      x="40"
      y={(i+0.5)*h+10}
      width={dimScale(d)}
      height={0.9*h}
      fill={colorScale(d)}
    >
    </rect>
    <text x={dimScale(d)+45} style={{fontSize:`${0.45*h}px`}} y={(i+1.3)*h+10} fill="black">{d}</text>
    <text x="10" style={{fontSize:`${0.5*h}px`}} y={(i+1.25)*h+10}
fill="black">{2011+i}</text></>
  ));
