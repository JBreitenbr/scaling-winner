import { geoNaturalEarth1, geoPath, geoGraticule,scaleBand,scaleLinear } from 'd3';
import {dimsDict} from './dimsDict';
const projection = geoNaturalEarth1().scale(220).translate([100, 350]);
const path = geoPath(projection);
const graticule = geoGraticule();

    var xScale = scaleBand().range ([0, 350]).padding(0.4),
        yScale = scaleLinear().range ([500, 0]);
const missingDataColor = 'gray';
let myArr=dimsDict["life_expectancy"]["Algeria"];
let mapped=myArr.map(function(d,i){return (<rect key={i} x="10" y={i*10} width={d} height="8" fill="lightgrey" />
)});
export const Marks = ({
  worldAtlas: { countries},
  rowByNumericCode,
  colorScale,
  colorValue
}) => (
    <g className="marks">
      { /*<path className="sphere" d={path({ type: 'Sphere' })}/>*/}
    {countries.features.map(feature => {
      const d = rowByNumericCode.get(feature.id);

      if(!d){
        console.log(feature.properties.name);

      }
      return (
        <path style={{stroke:"lightgrey"}} onMouseEnter={()=>console.log(d)}
          fill={d ? colorScale(colorValue(d)) : missingDataColor}
          d={path(feature)}
        />
      );
    })}
      {/*<path className="interiors" d={path(interiors)} />*/}
  </g>
);
