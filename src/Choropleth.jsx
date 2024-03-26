import * as d3 from 'd3';
const missingDataColor = 'gray';
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
          d={d3.geoPath(d3.geoMercator().scale(200).translate([100,400]))(feature)}
        />
      );
    })}
      {/*<path className="interiors" d={path(interiors)} />*/}
  </g>
);
