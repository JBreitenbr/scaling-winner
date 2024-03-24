import React from 'react';
import {useState} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { interpolateGreens, scaleSequential, min, max } from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData';
import { useCodes } from './useCodes';
import {dimsDict} from './dimsDict';
import { Marks } from './Marks';

const width = 350;
const height = 500;
const selectedYear = '2016';
export default function App() {
  let [dim,setDim]=useState("mobile_phone")
  let [country,setCountry]=useState("Algeria")
  const worldAtlas = useWorldAtlas();
  const data = useData();
  const codes = useCodes();

  if (!worldAtlas || !data || !codes) {
    return <pre>Loading...</pre>;
  }
  
  const numericCodeByAlphaCode = new Map();
  codes.forEach(code => {
    const alpha3Code = code['alpha-3'];
    const numericCode = code['country-code'];
    numericCodeByAlphaCode.set(alpha3Code, numericCode);
  });
  
  const filteredData = data.filter(d => d.Year === selectedYear);

  const rowByNumericCode = new Map();
  filteredData.forEach(d => {
    const alpha3Code = d.Code;
    const numericCode = numericCodeByAlphaCode.get(alpha3Code);
    rowByNumericCode.set(numericCode, d);
    console.log("*")
    console.log(numericCode);
  });

  const colorValue = d => d[dim];

  const colorScale = scaleSequential(interpolateGreens).domain([
    dimsDict[dim]["mini"],dimsDict[dim]["maxi"]
  ]);

  return (

<div style={{border:"1px solid darkred",margin:"20px",padding:"20px"}}>
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        rowByNumericCode={rowByNumericCode}
        colorScale={colorScale}
        colorValue={colorValue}
      />
    </svg></div>
  );
};


