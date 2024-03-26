import React from 'react';
import {useState} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import parse from 'html-react-parser';
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
let width = 0.95*window.innerWidth;
let height = 0.9*window.innerHeight;

let yearArr=["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
export default function App() {
  let [dim,setDim]=useState("life_expectancy")
  
  let [country,setCountry]=useState("Africa (all countries)")
  let [year,setYear]=useState('2021');

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
let dimScale=d3.scaleLinear().domain([dimsDict[dim]["mini"],dimsDict[dim]["maxi"]]).range([0.1*width,0.9*width]);
  return (<div style={{display:"flex",flexDirection:"column"}}>
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
    <svg id="canvas"  height={height} width={width} style={{backgroundColor:"beige"}}>
      <Choropleth
        worldAtlas={worldAtlas}
        rowByNumericCode={rowByNumericCode}
        colorScale={colorScale}
        colorValue={colorValue}
        setCountry={setCountry}
      />
      <Legend
        dimsDict={dimsDict}
        dim={dim}
        colorScale={colorScale}
        h={height/35}
        calcQuantiles={calcQuantiles}/>
      
      {country=="Seychelles" && dim=="unemployment"?<text x="150" y="100">no data</text>:
      <Barchart
        dimsDict={dimsDict}
        dim={dim}
        country={country}
        colorScale={colorScale}
        h={height/35}
        dimScale= {dimScale}
        clause={clause}
        />}
    </svg><div style={{display:"flex"}}>
  {yearArr.map(function(item) {
      return (
        <div className="yearTab" style={year==item?{backgroundColor:colorScale(dimsDict[dim]["maxi"]),color:"white",width:"50px"}:{backgroundColor:colorScale(dimsDict[dim]["mini"]),width:"50px"}} onClick={()=>setYear(item)}>{item}</div>
      )
    })}
  </div></div>
  );
};


