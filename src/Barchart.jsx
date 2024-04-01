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
      y={(i+0.5)*15+10}
      width={dimScale(d)}
      height={0.9*15}
      fill={colorScale(d)}
    >
    </rect>
    <text x={dimScale(d)+42} style={{fontSize:`${0.45*15}px`}} y={(i+1.3)*15+10} fill="black">{d}{eval(clause)?"*":" "}</text>
<text x="15" y={12.3*15+10} style={{fontSize:`${0.6*15}px`}}>{eval(clause)?"* missing data, imputed with subregion average":" "}</text>
<text x="15" y={13*15+10} style={{fontSize:`${0.5*15}px`}}>{eval(clause)&&["Sudan","Libya"].includes(country)?"Northern Africa: Algeria, Egypt, Libya, Morocco, Sudan, Tunisia":" "}
{eval(clause)&&["South Sudan","Eritrea","Ethiopia","Djibouti"].includes(country)?"Eastern Africa: Burundi, Comoros, Djibouti, Eritrea, Ethiopia, Kenya,":" "}
{eval(clause)&&["Niger","Liberia","Guinea-Bissau"].includes(country)?"Western Africa: Benin, Burkina Faso, Cabo Verde, Cote d'Ivoire, Equatorial ":" "}
</text>
<text x="15" y={13.6*15+10} style={{fontSize:`${0.5*15}px`}}>
  {eval(clause)&&["South Sudan","Eritrea","Ethiopia","Djibouti"].includes(country)?"Madagascar, Malawi, Mauritius, Mozambique, Rwanda, Seychelles,":" "}
{eval(clause)&&["Niger","Liberia","Guinea-Bissau"].includes(country)?"Guinea, Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Mauritania, ":" "}</text>
      <text x="15" y={14.2*15+10} style={{fontSize:`${0.5*15}px`}}>
        {eval(clause)&&["South Sudan","Eritrea","Ethiopia","Djibouti"].includes(country)?"Somalia, South Sudan, Tanzania, Uganda, Zambia, Zimbabwe":" "}{eval(clause)&&["Niger","Liberia","Guinea-Bissau"].includes(country)?"Niger, Nigeria, Senegal, Sierra Leone, Togo":" "}</text>
    <text x={18} style={{fontSize:`${0.5*15}px`}} y={(i+1.25)*15+10}
fill="black">{2011+i}</text></>
  ));
