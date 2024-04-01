import * as d3 from 'd3';
const missingDataColor = 'gray';
let scaleF=160;
let projection=d3.geoMercator().scale(scaleF).translate([120,380]);
let path=d3.geoPath(projection);
export const Choropleth = ({
  worldAtlas: { countries},
  rowByNumericCode,
  colorScale,
  colorValue,
  setCountry
}) => (
    <g className="marks">
    {countries.features.map(feature => {
      const d = rowByNumericCode.get(feature.id);

      if(!d){
        console.log(feature.properties.name);

      }
      return (
        <path style={{stroke:"lightgrey"}} onMouseEnter={()=>setCountry(d.country)}
          fill={d ? colorScale(colorValue(d)) : missingDataColor}
          d={path(feature)}
        />
      );
    })}
  </g>
);