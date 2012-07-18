#nodeGauges

NodeJS API wrapper for [Guag.es](http://gaug.es).

<b>All API Calls Methods Supported</b>

* Your Information
* API Clients
* Gauges
* Sharing
* Content
* Referrers
* Traffic
* Resolutions
* Technology
* Search Terms
* Search Engines
* Locations


#Installation


####Option 1 - Install From [NPM](http://npmjs.org)

1. Run `npm install node-gauges` in Terminal.
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


####Get Your Information (GET /me) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/your-information/#get-me)

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

####Update Your Information (PUT /me) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/your-information/#update-me)

```javascript
nodeGauges.me(parameters, callback);
```
* parameters (object) - All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/your-information/#update-me)
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

####API Client List (GET /clients) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/clients/#get-clients)

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

####Create an API Client (POST /clients) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/clients/#create-client)


```javascript
nodeGauges.clients.create(parameters, callback);
```
* parameters (object) - All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/gauges/#create-client)
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

####Delete an API Client (DELETE /clients/:id) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/clients/#delete-client)

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

####Gauges List (GET /gauges) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/gauges/#get-gauges)

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

####Create a New Gauge (POST /gauges) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/gauges/#create-gauge)

```javascript
nodeGauges.gauges.create(parameters, callback);
```
* parameters (object) - All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/gauges/#create-gauge)
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

####Gauge Details (GET /gauges/:id) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/gauges/#get-gauge)

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

####Update a Gauge (PUT /gauges/:id) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/gauges/#update-gauges)

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


####Delete a Gauge (DELETE /gauges/:id) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/gauges/#delete-gauges)


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
####List Shares (GET /gauges/:id/shares) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/sharing/#list-shares)

```javascript
nodeGauges.sharing(gaugeID, callback);
```

* gaugeID (string) - Gauge Identifier
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.sharing('GAUGE_ID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Share Gauge (POST /gauges/:id/shares) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/sharing/#share-gauge)

```javascript
nodeGauges.sharing.share(gaugeID, email, callback);
```

* gaugeID (string) - Gauge Identifier
* email (string) - Email of the person you wish to share the gauge with
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.sharing.share('GAUGE_ID', 'bob@example.com', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####UnShare Gauge (DELETE /gauges/:id/shares/:user_id) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/sharing/#unshare-gauge)

```javascript
nodeGauges.sharing.unshare(gaugeID, userID, callback);
```

* gaugeID (string) - Gauge Identifier
* userID (string) - This can be found by using the nodeGauges.sharing method.
* callback (function) - Returns API Data in the format callback(err, data, responce);

```javascript
nodeGauges.sharing.unshare('GAUGE_ID', 'USERID', function (err, data) {
	if(err){
		console.log('Error: ' + err);
	} else{
		console.log(data);
	}
});
```

####Content (GET /gauges/:id/content) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/content/#content)

```javascript
nodeGauges.content(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/content/#content)
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

####Referrers (GET /gauges/:id/referrers) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/referrers/#referrers)

```javascript
nodeGauges.referrers(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/referrers/#referrers)
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

####Traffic (GET /gauges/:id/traffic) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/traffic/#traffic)

```javascript
nodeGauges.traffic(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/traffic/#traffic)
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

####Resolutions (GET /gauges/:id/resolutions) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/resolutions/#resolutions)

```javascript
nodeGauges.resolutions(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/resolutions/#resolutions)
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

####Technology (GET /gauges/:id/technology) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/technology/#technology)

```javascript
nodeGauges.technology(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/technology/#technology)
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

####Search Terms (GET /gauges/:id/terms) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/terms/#search-terms)

```javascript
nodeGauges.terms(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/terms/#search-terms)
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

####Search Engines (GET /gauges/:id/engines) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/search-engines/#engines)

```javascript
nodeGauges.engines(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/search-engines/#engines)
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

####Locations (GET /gauges/:id/locations) - [Gaug.es Docs](http://get.gaug.es/documentation/reference-listing/locations/#locations)

```javascript
nodeGauges.locations(gaugeID, [parameters,] callback);
```

* gaugeID (string) - Gauge Identifier
* parameters (object) - Optional -  All Paramaters can be seen on the Gauge.es [API Page](http://get.gaug.es/documentation/reference-listing/locations/#locations)
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