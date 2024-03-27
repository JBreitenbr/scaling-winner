export const Barchart = ({
  dimsDict,
  dim,
  country,
  colorScale,
  h,
  w,
  dimScale,
  clause
}) =>
  dimsDict[dim][country].map((d,i) => (
    <><rect
      className="dim-rect"
      x={0.08*w}
      y={(i+0.5)*h+10}
      width={dimScale(d)}
      height={0.9*h}
      fill={colorScale(d)}
    >
    </rect>
    <text x={dimScale(d)+35} style={{fontSize:`${0.45*h}px`}} y={(i+1.3)*h+10} fill="black">{d}{eval(clause)?"*":" "}</text>
<text x="15" y={12.3*h+10} style={{fontSize:`${0.6*h}px`}}>{eval(clause)?"* missing data, imputed with subregion average":" "}</text>
    <text x={0.02*w} style={{fontSize:`${0.5*h}px`}} y={(i+1.25)*h+10}
fill="black">{2011+i}</text></>
  ));
