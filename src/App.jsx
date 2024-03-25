import React from 'react';
import {useState} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
//import { interpolateBlues, scaleSequential, scaleLinear} from 'd3';
import * as d3 from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData';
import { useCodes } from './useCodes';
import {dimsDict} from './dimsDict';
import {colorSchemes} from './colorSchemes';
import {dimArr} from './dimArr';
import {dimBij} from './dimBij';
import {cntNames} from './cntNames';
import { Marks } from './Marks';
import { Barchart } from './Barchart';
const width = 385;
const height = 535;
let yearArr=["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
export default function App() {
  let [dim,setDim]=useState("life_expectancy")
  let toolTip=d3.select("#tooltip");
  console.log(toolTip);
  let [country,setCountry]=useState("Africa (all countries)")
  let [year,setYear]=useState('2016');
  const worldAtlas = useWorldAtlas();
  const data = useData();
  const codes = useCodes();
  const handleChange1 = (event) => {
  setDim(event.target.value);
};
const handleChange2 = (event) => {
  setCountry(event.target.value);
};
const handleClick = (e) => {
  console.log("Heureka")
}
  const handleMouseEnter = e => {
    //e.target.style.background = "grey"
    console.log(e.target)
  }
  const handleMouseLeave = e => {
    e.target.style.background = "maroon"
  }
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
    console.log("*")
    console.log(numericCode);
  });

  const colorValue = d => d[dim];

  const colorScale = d3.scaleSequential(colorSchemes[dim]).domain([
    dimsDict[dim]["mini"],dimsDict[dim]["maxi"]
  ]);
let dimScale=d3.scaleLinear().domain([dimsDict[dim]["mini"],1.1*dimsDict[dim]["maxi"]]).range([0.1*width,0.9*width]);
  return (<div style={{display:"flex",flexDirection:"column"}}>
    <select id="selectButton1" value={dim} onChange={handleChange1}>
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
</select>
    <svg width={width} height={height} style={{backgroundColor:"beige"}}>
      <Marks
        worldAtlas={worldAtlas}
        rowByNumericCode={rowByNumericCode}
        colorScale={colorScale}
        colorValue={colorValue}
      />
      
      <Barchart
        dimsDict={dimsDict}
        dim={dim}
        country={country}
        colorScale={colorScale}
        h={height/35}
        dimScale= {dimScale}
        />
    </svg><div style={{display:"flex"}}>
  {yearArr.map(function(item) {
      return (
        <div className="yearTab" style={year==item?{backgroundColor:"navy",color:"white",width:"50px"}:{width:"50px"}} onClick={()=>setYear(item)}>{item}</div>
      )
    })}
  </div></div>
  );
};


