#nodeGauges

NodeJS API wrapper for [Guag.es](http://gaug.es).

#Development Status

<b>Implemented</b>
* Your Information
* API Clients
* Gauges
* Content
* Referrers
* Traffic
* Resolutions
* Technology
* Search Terms
* Search Engines
* Locations

<b>Not Implemented</b>

* Sharing <- I Don't have a Gauge.es account that allows sharing, if you wish to use this then either write it yourself and submit a pull request or contact me and I'll implement it for you to test.




#Installation


####Option 1 - Install From [NPM](http://npmjs.org)

1. Run `npm install nodeGauges` in Terminal.
2. Include the code in your app…

```javascript
var nodeGauges = require('node-gauges').createClient('API_KEY');
```

####Option 2 - Install From Git Repositry

1. Clone the repository `git clone git://github.com/bencevans/node-gauges.git`
2. Include the code in your app…

```javascript
var nodeGauges = require('/path/to/cloned/repo/lib/nodeGauges.js').createClient('API_KEY');
```

#Usage


####Get Your Information (GET /me)

```javascript
nodeGauges.me(callback);
```

* callback (function) - Returns API Data in the format callback(err, data, responce); 


```javascript
nodeGauges.me(function (err, data) {
	if(err)
		console.log('Error: ' + err);
	else
		console.log(data);
});
```

####Update Your Information (PUT /me)

```javascript
nodeGauges.me(parameters, callback);
```
* parameters (object) - All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/your-information/)
* callback (function) - Returns API Data in the format callback(err, data, responce); 

```javascript
nodeGauges.me({
	first_name:"Bob",
	last_name:"Marley"	
}, function (err, data) {
	if(err)
		console.log('Error: ' + err);
	else
		console.log(data);
});
```

####API Client List (GET /clients)

```javascript
nodeGauges.clients(callback);
```

* callback (function) - Returns API Data in the format callback(err, data, responce); 

```javascript
nodeGauges.clients(function (err, data) {
	if(err)
		console.log('Error: ' + err);
	else
		console.log(data);
});
```

####Create an API Client (POST /clients)


```javascript
nodeGauges.clients.create(parameters, callback);
```
* parameters (object) - All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/gauges/)
* callback (function) - Returns API Data in the format callback(err, data, responce); 


```javascript
nodeGauges.clients.create({
	description: "nodeGauges Test"
}, function (err, data) {
	if(err)
		console.log('Error: ' + err);
	else
		console.log(data);
});
```

####Delete an API Client (DELETE /clients/:id)

```javascript
nodeGauges.clients.delete(clientID, callback);
```
* clientID (string) - Client Identifier/Key
* callback (function) - Returns API Data in the format callback(err, data, responce); 

```javascript
nodeGauges.clients.delete('CLIENT_KEY', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Gauges List (GET /gauges)

```javascript
nodeGauges.gauges(callback);
```

* callback (function) - Returns API Data in the format callback(err, data, responce); 

```javascript
nodeGauges.gauges('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Create a New Gauge (POST /gauges)

```javascript
nodeGauges.gauges.create(parameters, callback);
```
* parameters (object) - All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/gauges/)
* callback (function) - Returns API Data in the format callback(err, data, responce); 

```javascript
nodeGauges.gauges.create({
	title:"Test Gauge",
	tz:"London"
}, function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Gauge Details (GET /gauges/:id)

```javascript
nodeGauges.gauges(gaugeID, callback);
```

* gaugeID (string) - Gauge Identifier
* callback (function) - Returns API Data in the format callback(err, data, responce); 

```javascript
nodeGauges.gauges('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Update a Gauge (PUT /gauges/:id)

```javascript
nodeGauges.gauges.update(gaugeID, callback);
```

* gaugeID (string) - Gauge Identifier
* callback (function) - Returns API Data in the format callback(err, data, responce); 

```javascript
nodeGauges.gauges.update('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```


####Delete a Gauge (DELETE /gauges/:id)


```javascript
nodeGauges.gauges.delete(gaugeID, callback);
```

* gaugeID (string) - Gauge Identifier
* callback (function) - Returns API Data in the format callback(err, data, responce); 

```javascript
nodeGauges.gauges.delete('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Content (GET /gauges/:id/content)

```javascript
nodeGauges.content(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/content/)
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.gauges.content('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Referrers (GET /gauges/:id/referrers)

```javascript
nodeGauges.referrers(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/referrers/)
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.gauges.referrers('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Traffic (GET /gauges/:id/traffic)

```javascript
nodeGauges.traffic(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/traffic/)
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.gauges.traffic('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Resolutions (GET /gauges/:id/resolutions)

```javascript
nodeGauges.resolutions(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/resolutions/)
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.gauges.resolutions('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Technology (GET /gauges/:id/technology)

```javascript
nodeGauges.technology(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/technology/)
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.gauges.technology('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Search Terms (GET /gauges/:id/terms)

```javascript
nodeGauges.terms(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/terms/)
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.gauges.terms('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Search Engines (GET /gauges/:id/engines)

```javascript
nodeGauges.engines(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/engines/)
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.gauges.engines('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Locations (GET /gauges/:id/locations)

```javascript
nodeGauges.locations(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/locations/)
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.gauges.locations('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```