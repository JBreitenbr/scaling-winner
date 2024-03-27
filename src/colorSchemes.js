import * as d3 from 'd3';
export let colorSchemes ={'life_expectancy': d3.interpolateGreens, 'hiv': d3.interpolateReds, 'fertility': d3.interpolateGnBu, 'pop_density': d3.interpolatePuBuGn, 'infant_deaths': d3.interpolateOrRd, 'pop_under_15': d3.interpolateYlGn, 'neonatal_deaths': d3.interpolateYlOrRd, 'under5_deaths': d3.interpolateYlOrBr, 'undernourish': d3.interpolateRdPu, 'urban_pop': d3.interpolateYlGnBu, 'mobile_phone': d3.interpolatePurples, 'electricity': d3.interpolateOranges,
'agri':d3.interpolateYlGn, 'forest':d3.interpolateGreens,'unemployment': d3.interpolatePuBuGn,'afofi':d3.interpolatePuBuGn,'phone':d3.interpolatePuBuGn}