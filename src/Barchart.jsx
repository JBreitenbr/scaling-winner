export const Barchart = ({
  dimsDict,
  dim,
  country,
  colorScale,
  w,
  dimScale,
  clause
}) =>
  dimsDict[dim][country].map((d,i) => (
    <><rect
      className="dim-rect"
      x="40"
      y={(i+0.5)*w+10}
      width={dimScale(d)}
      height={0.9*w}
      fill={colorScale(d)}
    >
    </rect>
    <text x={dimScale(d)+45} style={{fontSize:`${0.45*w}px`}} y={(i+1.3)*w+10} fill="black">{d}{eval(clause)?"*":" "}</text>
<text x="15" y={12.3*w+10} style={{fontSize:`${0.6*w}px`}}>{eval(clause)?"* missing data, imputed with subregion average":" "}</text>
    <text x="10" style={{fontSize:`${0.5*w}px`}} y={(i+1.25)*w+10}
fill="black">{2011+i}</text></>
  ));
