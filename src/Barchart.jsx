export const Barchart = ({
  dimsDict,
  dim,
  country,
  colorScale,
  dimScale,
  clause
}) =>
  dimsDict[dim][country].map((d,i) => (
    <><rect
      className="dim-rect"
      x={40}
      y={(i+0.5)*18}
      width={dimScale(d)}
      height={16}
      fill={colorScale(d)}
    >
    </rect>
       <text x={dimScale(d)+45} style={{fontSize:"9px"}} y={18*i+22} fill="black">{d}{eval(clause)?"*":" "}</text>
<text x={15} y={218} style={{fontSize:"10px"}}>{eval(clause)?"* missing data, imputed with subregion average":" "}</text>
    <text x={10} style={{fontSize:"10px"}} y={18*i+22}
fill="black">{2011+i}</text></>
  ));
