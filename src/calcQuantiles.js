export let  calcQuantiles=(mini,maxi)=>{
  let quantiles = [];
  let diff=maxi-mini;
  let step=diff/9;
  for(let i=0;i<9;i++){
    quantiles.push((mini+step*(i+0.5)).toFixed(2));
  }
  return quantiles;
}