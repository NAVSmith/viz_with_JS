d3.select('svg').attr('width', '200px');
d3.selectAll('p').attr('class', 'info');
d3.selectAll('h1').style('font', 'Helvetica');
d3.select('h1').text('My document');

d3.select('body').append('a').attr('href', 'https://d3js.org').text('docs');
d3.select('table').selectAll('tr').append('td').text('0');
