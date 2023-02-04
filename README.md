# Mapping Earthquakes
This project focused on the application of web designing and visualization software, such as HTML-CSS-JavaScript, Leaflet, and Mapbox, and how we leveraged their useful functions for performing in-depth data analytics and visualizations.

## Table of Contents
- [Overview of Project](#overview-of-project)
  - [Resources](#resources)
  - [Challenge Overview](#challenge-overview)
  - [GitHub Repo Branches](#github-repo-branches)
- [Web Designing and Analysis Results](#web-designing-and-analysis-results)
  - [Deliverable 1: Add Tectonic Plate Data](#deliverable-1-add-tectonic-plate-data)
  - [Deliverable 2: Add Major Earthquake Data](#deliverable-2-add-major-earthquake-data)
  - [Deliverable 3: Add an Additional Map](#deliverable-3-add-an-additional-map)
- [Summary](#summary)
- [References](#references)

## Overview of Project
This project and Module 14 assignment focused on cultivating knowledge and skills of web designing and data analysis through some rigorous exercises for further understanding the concepts of integrating HyperText Markup Language (HTML), Cascading Style Sheet (CSS), JavaScript (JS), Leaflet (open source JS library for mobile-friendly interactive maps), and Mapbox (open source mapping libraries and applications) programs for building a dynamic and interactive webpage with optimized content, functionality, usability, and user experience. We then applied our knowledge and core skills to deploy our webpage, perform in-depth analysis for mapping earthquakes in relation to the tectonic plates' location on the earth, adding multiple overlay objects and other maps.

### Resources
- Source code: challenge_logic.js, style.css, index.html
- Source data: [](), [GeoJSON/PB2002_boundaries.json](https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json)
- Image file: jpg/png files
- Software: [Leaflet](https://leafletjs.com/index.html), [HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS: Cascading Style Sheet](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), [Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/), [Data-Driven Documents (D3)](https://d3js.org/), [GitHub](https://github.com/).

### Challenge Overview
Outline of our deliverables and a written report for presenting our results and analysis summary:

- ☑️ Deliverable 1: Add Tectonic Plate Data.
- ☑️ Deliverable 2: Add Major Earthquake Data.
- ☑️ Deliverable 3: Add an Additional Map.
- ☑️ A Summary on how to create the earthquake map with multiple layers and maps (this ["README.md"](./README.md)).

### GitHub Repo Branches
All deliverables in Module 14 challenge are committed in this GitHub repo as outlined below.  

main branch  
|&rarr; [./README.md](./README.md)  
|&rarr; [./index.html](./index.html)  
|&rarr; ./static/  
  &nbsp; |&rarr; ./static/js/  
    &emsp; |&rarr; [./static/js/charts.js](./static/js/logic.js)  
  &nbsp; |&rarr; ./static/css/  
    &emsp; |&rarr; [./static/css/style.css](./static/css/style.css)  
  &nbsp; |&rarr; ./static/images/  
    &emsp; |&rarr; [./static/images/bubbleplot_id946.jpg](./static/images/bubbleplot_id946.jpg)  
    &emsp; |&rarr; [./static/images/plotlydeploy_webpage.png](./static/images/plotlydeploy_webpage.png)  
    &emsp; |&rarr; [./static/images/barplot_id940.png](./static/images/barplot_id940.png)  
    &emsp; |&rarr; [./static/images/gaugeplot_id940.png](./static/images/gaugeplot_id940.png)  
    &emsp; |&rarr; [./static/images/bubbleplot_id940.png](./static/images/bubbleplot_id940.png)  

## Web Designing and Analysis Results
By using several web designing tools, such as HTML, CSS, JavaScript, Plotly, and Chrome DevTools, we were able to design and integrate a visualization dashboard that lets users explore the Belly Button Biodiversity databases. We have incorporated some best practices when designing a website, which include enhanced user-friendly filtering functionality, good usability, user experience, and mobile-responsive layout. We then deployed our refactored webpage, performed test runs, and analyzed the results. Our webpage allows volunteers and users to easily visualize some useful dashboards, filter a list of data, and extract certain information based on volunteer's ID.

### Customization and Optimization
The refactored source code and screenshots of our webpage can be referred in [index.html](./index.html), [charts.js](./static/js/charts.js), [add_p.js](./static/js/add_p.js), and Fig. 1&ndash;4. We applied customized CSS styles by directly linked to [style.css](./static/css/style.css) in addition to `bootstrap.min.css` and `d3.js` for enabling several useful features, better user experience, and dynamic event listeners, for instance:

- User experience was enhanced by adding a background image that can be temporarily hidden, eye-friendly background colors and recommended color contrasts.
- Descriptive information about the project and each dashboard on the webpage. I wrote [add_p.js](./static/js/add_p.js) script to accomplish this instead of hard coding into the static html elements.
- Mobile-responsive layout and design is integrated. The graphs that we generated by using Plotly JavaScript were also reconstructed for both desktop and mobile device users, and I also added a "Return to Top" icon for mobile device users.
- User-friendly navigation, tap/mouse hover, and highlighting features. The improved features allowed volunteers and users to easily jump to a certain part of the webpage and notice which webpage content section they are currently on.
- Title attributes were added to display "Belly Button Biodiversity Home" and brief link information when users hover their mouse over each link on the navigation bar. This could be useful when users use the keyboard \<F11\> key to view our webpage in full screen mode.
- Link to the completed webpage: <a href="https://ats-tandjoeng7.github.io/plotlydeploy/" target="_blank">Belly Button Biodiversity webpage</a>.

Fig. 1 outlined the design and layout of our webpage, which consisted of a horizontal navigation bar at the top followed by a header section with descriptive information about the Belly Button Biodiversity Dashboard, webpage content section including the ID No. Selector, and a simple footer at the bottom of the page.

![Fig. 1](./static/images/plotlydeploy_webpage.png 'Fig. 1 Belly Button Biodiversity homepage')\
**Fig. 1 Belly Button Biodiversity homepage**

### Deliverable 1
The interactive horizontal bar chart dashboard sorted according to the requirements is shown in Fig. 2.

![Fig. 2](./static/images/barplot_id940.png 'Fig. 2 Plotly Deploy Bar Chart dashboard')\
**Fig. 2 Plotly Deploy Bar Chart dashboard**

### Deliverable 2
The interactive indicator gauge dashboard is shown in Fig. 3.

![Fig. 3](./static/images/gaugeplot_id940.png 'Fig. 3 Plotly Deploy Indicator Gauge dashboard')\
**Fig. 3 Plotly Deploy Indicator Gauge dashboard**

### Deliverable 3
The interactive bubble plot dashboard is shown in Fig. 4.

![Fig. 4](./static/images/bubbleplot_id940.png 'Fig. 4 Plotly Deploy Bubble Plot dashboard')\
**Fig. 4 Plotly Deploy Bubble Plot dashboard**

### Deliverable 4
The customized webpage has all the required specifications and added enhancement features embedded as we have thoroughly discussed in the [Customization and Optimization](#customization-and-optimization) section.

## Summary
All deliverables have been designed and developed according to the assignment requirements, including well optimized functionality, better usability, mobile-responsive design, deployment and validation of some improvement features, and effortless analysis interface. I hope users will be able to experience the enhanced features when using our <a href="https://ats-tandjoeng7.github.io/plotlydeploy/" target="_blank">Belly Button Biodiversity webpage</a> and leave the webpage with good impression.

## References
[Plotly JavaScript Open Source Graphing Library](https://plotly.com/javascript/)  
[HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)  
[CSS: Cascading Style Sheet](https://developer.mozilla.org/en-US/docs/Web/CSS)  
[JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)  
[Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/)  
[Data-Driven Documents (D3)](https://d3js.org/)  
[d3-drag](https://github.com/d3/d3-drag/blob/main/README.md#drag_on)  
[Colorscales in JavaScript](https://plotly.com/javascript/colorscales/#earth-colorscale)  
[Responsive / Fluid Layouts in JavaScript](https://plotly.com/javascript/responsive-fluid-layout/)  
[Mapbox Styles API](https://docs.mapbox.com/api/maps/styles/)  
