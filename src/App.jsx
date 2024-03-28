import React from 'react';
import {useState} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData';
import { useCodes } from './useCodes';
import {dimsDict} from './dimsDict';
import {colorSchemes} from './colorSchemes';
import {calcQuantiles} from './calcQuantiles'
import {dimArr} from './dimArr';
import {dimBij} from './dimBij';
import {clause} from './expr';
import {cntNames} from './cntNames';
import { Choropleth } from './Choropleth';
import {Legend} from './Legend';
import { Barchart } from './Barchart';
import { Buttongroup } from './Buttongroup';
let yearArr=["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
export default function App() {

let [width, setWidth]=useState(window.innerWidth);
let [height, setHeight]=useState(0.96*window.innerHeight);

  let [dim,setDim]=useState("life_expectancy")

  let [country,setCountry]=useState("Africa (all countries)")
  let [year,setYear]=useState('2021');
const handleResize = () => useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

  const worldAtlas = useWorldAtlas();
  const data = useData();
  const codes = useCodes();
  const handleChange1 = (event) => {
  setDim(event.target.value);
};
const handleChange2 = (event) => {
  setCountry(event.target.value);
};

  if (!worldAtlas || !data || !codes) {
    return <pre>Loading...</pre>;
  }

  const numericCodeByAlphaCode = new Map();
  codes.forEach(code => {
    const alpha3Code = code['alpha-3'];
    const numericCode = code['country-code'];
    numericCodeByAlphaCode.set(alpha3Code, numericCode);
  });

  const filteredData = data.filter(d => d.Year === year);

  const rowByNumericCode = new Map();
  filteredData.forEach(d => {
    const alpha3Code = d.Code;
    const numericCode = numericCodeByAlphaCode.get(alpha3Code);
    rowByNumericCode.set(numericCode, d);
  });

  const colorValue = d => d[dim];

  const colorScale = d3.scaleSequential(colorSchemes[dim]).domain([
    dimsDict[dim]["mini"],dimsDict[dim]["maxi"]
  ]);
let boundary;
if(width<height){
  boundary=0.85*width;
}
else boundary=0.5*width;
let dimScale=d3.scaleLinear().domain([dimsDict[dim]["mini"],dimsDict[dim]["maxi"]]).range([40,boundary]);
  return (<div style={{display:"flex",flexDirection:"column"}}><h3>Africa in Data</h3>
    <div id="dropdown-wrapper"><select id="selectButton1" value={dim} onChange={handleChange1}>
  {dimArr.map(function(item) {
      return (
        <option value={item} key={item}>
          {dimBij[item]}
        </option>
      )
    })}
</select>
    <select id="selectButton2" value={country} onChange={handleChange2}>
{cntNames.map(function(item) {
      return (
        <option value={item} key={item}>
          {item}
        </option>
      )
    })}
</select></div>
  <div><svg id="canvas"  height={height} width={width} style={{backgroundColor:"beige"}}>
  <g id="topgroup" transform="translate(0,10)">
      <Barchart
        dimsDict={dimsDict}
        dim={dim}
        country={country}
        colorScale={colorScale}
        dimScale= {dimScale}
        clause={clause}
        h={height/38}
        w={width}
        />
  </g>
      
    <g id="supergroup" transform= 
      {width<height?              "translate(0,10)":(width<500?"translate(350,-150)":"translate(350,-150) scale(1.3)")} >
      <Legend
        dimsDict={dimsDict}
        dim={dim}
        colorScale={colorScale}
        h={height/35}
        calcQuantiles={calcQuantiles}/>
      <Choropleth
        worldAtlas={worldAtlas}
        rowByNumericCode={rowByNumericCode}
        colorScale={colorScale}
        colorValue={colorValue}
        setCountry={setCountry}
      />
    <Buttongroup
      h={height/35}
      yearArr={yearArr}
      colorScale={colorScale}
      year={year}
      setYear={setYear}
      dimsDict={dimsDict}
      dim={dim}
      />
    </g> 
    </svg></div></div>
  );
};


