// Change Detection, Pakistan 2010-2020
// True Color, Water Masking
// NDVI Calculations

// Load Image Collections
var golfClub = /* color: #d63000 */ee.Geometry.MultiPoint(
        [[73.07533998507961, 33.57992373068636],
         ]);
var l8 = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');

Map.centerObject(golfClub, 12)
Map.addLayer(golfClub)
/* Map.addLayer(geometry)*/
// Spatial filtering
var l8Rawalpindi = l8.filterBounds(golfClub);



// temporal filtering

var l8Rawalpindi2013 = l8Rawalpindi.filterDate('2013-01-01', '2013-12-31');
var l8Rawalpindi2014 = l8Rawalpindi.filterDate('2014-01-01', '2014-12-31');
var l8Rawalpindi2015 = l8Rawalpindi.filterDate('2015-01-01', '2015-12-31');
var l8Rawalpindi2016 = l8Rawalpindi.filterDate('2016-01-01', '2016-12-31');
var l8Rawalpindi2017 = l8Rawalpindi.filterDate('2017-01-01', '2017-12-31');
var l8Rawalpindi2018 = l8Rawalpindi.filterDate('2018-01-01', '2018-12-31');
var l8Rawalpindi2019 = l8Rawalpindi.filterDate('2019-01-01', '2019-12-31');
var l8Rawalpindi2020 = l8Rawalpindi.filterDate('2020-01-01', '2020-09-30');
// Determine size of collections

print(l8Rawalpindi2013.size());
print(l8Rawalpindi2014.size());
print(l8Rawalpindi2015.size());
print(l8Rawalpindi2016.size());
print(l8Rawalpindi2017.size());
print(l8Rawalpindi2018.size());
print(l8Rawalpindi2019.size());
print(l8Rawalpindi2020.size());


// sort to create a scene object from least to most cloudy
/*
var sortedRawalpindi2013 = l8Rawalpindi2013.sort('CLOUD_COVER');
var sortedRawalpindi2014 = l8Rawalpindi2014.sort('CLOUD_COVER');
var sortedRawalpindi2015 = l8Rawalpindi2015.sort('CLOUD_COVER');
var sortedRawalpindi2016 = l8Rawalpindi2016.sort('CLOUD_COVER');
var sortedRawalpindi2017 = l8Rawalpindi2017.sort('CLOUD_COVER');
var sortedRawalpindi2018 = l8Rawalpindi2018.sort('CLOUD_COVER');
var sortedRawalpindi2019 = l8Rawalpindi2019.sort('CLOUD_COVER');
var sortedRawalpindi2020 = l8Rawalpindi2020.sort('CLOUD_COVER');
var scene2013 = sortedRawalpindi2013.first(); 
var scene2014 = sortedRawalpindi2014.first(); 
var scene2015 = sortedRawalpindi2015.first();
var scene2016 = sortedRawalpindi2016.first(); 
var scene2017 = sortedRawalpindi2017.first();
var scene2018 = sortedRawalpindi2018.first();
var scene2019 = sortedRawalpindi2019.first(); 
var scene2020 = sortedRawalpindi2020.first();*/ 

// Display RGB
// for landsat8, we have to specify 'B4', 'B3', and 'B2' for R, G, and B, respectively
// also need to provide min and max values suitable for displaying reflectance
var visParamsRGB8 = {bands: ['B4', 'B3', 'B2'], max: 0.4};
/*
Map.addLayer(scene2013, visParamsRGB8, 'true-color composite 2013');
Map.addLayer(scene2014, visParamsRGB8, 'true-color composite 2014');
Map.addLayer(scene2015, visParamsRGB8, 'true-color composite 2015');
Map.addLayer(scene2016, visParamsRGB8, 'true-color composite 2016');
Map.addLayer(scene2017, visParamsRGB8, 'true-color composite 2017');
Map.addLayer(scene2018, visParamsRGB8, 'true-color composite 2018');
Map.addLayer(scene2019, visParamsRGB8, 'true-color composite 2019');
Map.addLayer(scene2020, visParamsRGB8, 'true-color composite 2020');*/

var median2013 = l8Rawalpindi2013.median();
var median2014 = l8Rawalpindi2014.median();
var median2015 = l8Rawalpindi2015.median();
var median2016 = l8Rawalpindi2016.median();
var median2017 = l8Rawalpindi2017.median();
var median2018 = l8Rawalpindi2018.median();
var median2019 = l8Rawalpindi2019.median();
var median2020 = l8Rawalpindi2020.median();

/*Map.addLayer(median2013, visParamsRGB8, 'median 2013');
Map.addLayer(median2014, visParamsRGB8, 'median 2014');
Map.addLayer(median2015, visParamsRGB8, 'median 2015');
Map.addLayer(median2016, visParamsRGB8, 'median 2016');
Map.addLayer(median2017, visParamsRGB8, 'median 2017');
Map.addLayer(median2018, visParamsRGB8, 'median 2018');
Map.addLayer(median2019, visParamsRGB8, 'median 2019');
Map.addLayer(median2020, visParamsRGB8, 'median 2020');*/

// Display False Color
// for landsat8, we have to specify 'B7', 'B6', and 'B4' 
// also need to provide min and max values suitable for displaying reflectance
var visParamsFalse8 = {bands: ['B7', 'B6', 'B4'], max: 0.4};
/*
Map.addLayer(median2013, visParamsFalse8, 'urban 2013');
Map.addLayer(median2014, visParamsFalse8, 'urban 2014');
Map.addLayer(median2015, visParamsFalse8, 'urban 2015');
Map.addLayer(median2016, visParamsFalse8, 'urban 2016');
Map.addLayer(median2017, visParamsFalse8, 'urban 2017');
Map.addLayer(median2018, visParamsFalse8, 'urban 2018');
Map.addLayer(median2019, visParamsFalse8, 'urban 2019');
Map.addLayer(median2020, visParamsFalse8, 'urban 2020');*/

// Display False Color vegetation
// for landsat8, we have to specify 'B5', 'B4', and 'B3' 
// also need to provide min and max values suitable for displaying reflectance
var visParamsVeg8 = {bands: ['B5', 'B4', 'B3'], max: 0.4};
/*
Map.addLayer(median2013, visParamsVeg8, 'false 2013');
Map.addLayer(median2014, visParamsVeg8, 'false 2014');
Map.addLayer(median2015, visParamsVeg8, 'false 2015');
Map.addLayer(median2016, visParamsVeg8, 'false 2016');
Map.addLayer(median2017, visParamsVeg8, 'false 2017');
Map.addLayer(median2018, visParamsVeg8, 'false 2018');
Map.addLayer(median2019, visParamsVeg8, 'false 2019');
Map.addLayer(median2020, visParamsVeg8, 'false 2020');*/

// Display False Color agriculture
// for landsat8, we have to specify 'B6', 'B5', and 'B2' 
// also need to provide min and max values suitable for displaying reflectance

var visParamsagr8 = {bands: ['B6', 'B5', 'B2'], max: 0.4};
/*
Map.addLayer(median2013, visParamsagr8, 'agri 2013');
Map.addLayer(median2014, visParamsagr8, 'agri 2014');
Map.addLayer(median2015, visParamsagr8, 'agri 2015');
Map.addLayer(median2016, visParamsagr8, 'agri 2016');
Map.addLayer(median2017, visParamsagr8, 'agri 2017');
Map.addLayer(median2018, visParamsagr8, 'agri 2018');
Map.addLayer(median2019, visParamsagr8, 'agri 2019');
Map.addLayer(median2020, visParamsagr8, 'agri 2020');*/

// Display False Color land/water
// for landsat8, we have to specify 'B5', 'B6', and 'B4' 
// also need to provide min and max values suitable for displaying reflectance
var visParamslw8 = {bands: ['B5', 'B6', 'B4'], max: 0.4};
/*
Map.addLayer(median2013, visParamslw8, 'landwater 2013');
Map.addLayer(median2014, visParamslw8, 'landwater 2014');
Map.addLayer(median2015, visParamslw8, 'landwater 2015');
Map.addLayer(median2016, visParamslw8, 'landwater 2016');
Map.addLayer(median2017, visParamslw8, 'landwater 2017');
Map.addLayer(median2018, visParamslw8, 'landwater 2018');
Map.addLayer(median2019, visParamslw8, 'landwater 2019');
Map.addLayer(median2020, visParamslw8, 'landwater 2020');*/

// Display Natural Color atmosphere removal
// for landsat8, we have to specify 'B7', 'B5', and 'B3' 
// also need to provide min and max values suitable for displaying reflectance
var visParamsnar8 = {bands: ['B7', 'B5', 'B3'], max: 0.4};
/*
Map.addLayer(median2013, visParamsnar8, 'atmrmv 2013');
Map.addLayer(median2014, visParamsnar8, 'atmrmv 2014');
Map.addLayer(median2015, visParamsnar8, 'atmrmv 2015');
Map.addLayer(median2016, visParamsnar8, 'atmrmv 2016');
Map.addLayer(median2017, visParamsnar8, 'atmrmv 2017');
Map.addLayer(median2018, visParamsnar8, 'atmrmv 2018');
Map.addLayer(median2019, visParamsnar8, 'atmrmv 2019');
Map.addLayer(median2020, visParamsnar8, 'atmrmv 2020');*/

// Display SWIR
// for landsat8, we have to specify 'B7', 'B5', and 'B4' 
// also need to provide min and max values suitable for displaying reflectance
var visParamsSwir8 = {bands: ['B7', 'B5', 'B4'], max: 0.4};
/*
Map.addLayer(median2013, visParamsSwir8, 'swir 2013');
Map.addLayer(median2014, visParamsSwir8, 'swir 2014');
Map.addLayer(median2015, visParamsSwir8, 'swir 2015');
Map.addLayer(median2016, visParamsSwir8, 'swir 2016');
Map.addLayer(median2017, visParamsSwir8, 'swir 2017');
Map.addLayer(median2018, visParamsSwir8, 'swir 2018');
Map.addLayer(median2019, visParamsSwir8, 'swir 2019');
Map.addLayer(median2020, visParamsSwir8, 'swir 2020');*/

// Display Vegetation Analysis
// for landsat8, we have to specify 'B6', 'B5', and 'B4' 
// also need to provide min and max values suitable for displaying reflectance
var visParamsveg8 = {bands: ['B6', 'B5', 'B4'], max: 0.4};
Map.addLayer(median2013, visParamsveg8, 'veg 2013');
Map.addLayer(median2014, visParamsveg8, 'veg 2014');
Map.addLayer(median2015, visParamsveg8, 'veg 2015');
Map.addLayer(median2016, visParamsveg8, 'veg 2016');
Map.addLayer(median2017, visParamsveg8, 'veg 2017');
Map.addLayer(median2018, visParamsveg8, 'veg 2018');
Map.addLayer(median2019, visParamsveg8, 'veg 2019');
Map.addLayer(median2020, visParamsveg8, 'veg 2020');
