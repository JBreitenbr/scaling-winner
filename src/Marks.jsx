import { geoNaturalEarth1, geoPath, geoGraticule,scaleBand,scaleLinear } from 'd3';
import {dimsDict} from './dimsDict';
let w=0.6*window.innerWidth;
const projection = geoNaturalEarth1().scale(220).translate([100, 350]);

const path = geoPath(projection);
const missingDataColor = 'gray';
export const Marks = ({
  worldAtlas: { countries},
  rowByNumericCode,
  colorScale,
  colorValue,
  setCountry
}) => (
    <g className="marks">
      { /*<path className="sphere" d={path({ type: 'Sphere' })}/>*/}
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
      {/*<path className="interiors" d={path(interiors)} />*/}
  </g>
);
