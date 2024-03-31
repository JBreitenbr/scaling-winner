import * as d3 from 'd3';
export let colorSchemes ={'life_expectancy': d3.interpolateGreens, 'fertility': d3.interpolateGnBu, 'infant_deaths': d3.interpolateYlOrRd, 'under5_deaths': d3.interpolateYlOrBr, 'undernourish': d3.interpolateRdPu,  'mobile_phone': d3.interpolatePurples, 'electricity': d3.interpolateOranges, 'unemployment': d3.interpolatePuRd,'afofi':d3.interpolateYlGn,'wparl':d3.interpolatePuBu,'industry':d3.interpolateGreys,'hiv' :d3.interpolateReds,'tub':d3.interpolatePurples,'mili':d3.interpolateOrRd};

export let dimArr=['life_expectancy', 'fertility', 'infant_deaths', 'under5_deaths', 'undernourish', 'hiv','tub','electricity','mobile_phone','unemployment','afofi','industry','wparl','mili'];

export let yearArr=["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];

export let  calcQuantiles=(mini,maxi)=>{
  let quantiles = [];
  let diff=maxi-mini;
  let step=diff/9;
  for(let i=0;i<9;i++){
    quantiles.push((mini+step*(i+0.5)).toFixed(2));
  }
  return quantiles;
}

export let dimBij={'life_expectancy': 'Life expectancy at birth, total (years)', 'fertility': 'Fertility rate, total (births per woman)', 'infant_deaths': 'Mortality rate, infant (per 1,000 live births)', 'under5_deaths': 'Mortality rate, under-5 (per 1,000 live births)', 'undernourish': 'Prevalence of undernourishment (% of population)', 'electricity': 'Access to electricity (% of population)','mobile_phone':"Mobile cellular subscriptions (per 100 people)","unemployment":"Unemployment, total (% of total labor force) (modeled ILO estimate)",'afofi':"Agriculture, forestry, and fishing, value added (% of GDP)",'wparl':"Proportion of seats held by women in national parliaments (%)",'industry':"Industry (including construction), value added (% of GDP)",'hiv':"Prevalence of HIV, total (% of population ages 15-49)",'tub':"Prevalence of tuberculosis (per 100,000 people)",'mili':"Military expenditure (% of GDP)"}

export let cntNames = ['Africa (all countries)','Northern Africa','Eastern Africa','Western Africa','Southern Africa','Middle Africa','Burundi', 'Comoros', 'Djibouti', 'Eritrea', 'Ethiopia', 'Kenya', 'Madagascar', 'Malawi', 'Mauritius', 'Mozambique', 'Rwanda', 'Seychelles', 'Somalia', 'South Sudan', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe', 'Angola', 'Cameroon', 'Central African Republic', 'Chad', 'Congo', 'Democratic Republic of the Congo', 'Gabon',  'Sao Tome and Principe', 'Algeria', 'Egypt', 'Libya', 'Morocco', 'Sudan', 'Tunisia', 'Botswana', 'Eswatini', 'Lesotho', 'Namibia', 'South Africa', 'Benin', 'Burkina Faso', 'Cabo Verde', "Cote d'Ivoire", 'Equatorial Guinea', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Liberia', 'Mali', 'Mauritania', 'Niger', 'Nigeria', 'Senegal', 'Sierra Leone', 'Togo']

let missDict={
"hiv": ["Egypt", "Mozambique", "Somalia", "Seychelles","Liberia"],
"undernourish": ["Burundi", "Eritrea", "Equatorial Guinea"],
"unemployment": ["Seychelles"],
"afofi": ["Eritrea", "Somalia"],
"industry": ["Eritrea", "Somalia"]}