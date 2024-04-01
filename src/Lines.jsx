export const Lines=({boundary,transY,strokeColor})=>{return<><line x1={10} y1={transY} x2={boundary} y2={transY} stroke={strokeColor}></line>
<line x1={10} y1={230+transY} x2={boundary} y2={230+transY} stroke={strokeColor}></line>
  <line x1={10} y1={transY} x2={10} y2={230+transY} stroke={strokeColor}></line>
<line x1={boundary} y1={transY} x2={boundary} y2={230+transY} stroke={strokeColor}></line></>}
