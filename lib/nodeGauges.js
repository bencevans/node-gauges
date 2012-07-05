function nodeGaugesClient (apiKey) {

	var request = require('request');
	var querystring = require('querystring');

	this.apiKey = apiKey;
	this.apiBase = 'https://secure.gaug.es';

	var nodeGauges = this;

	// GET /me - nodeGuage.me(callback)
	// callback = function(err, body) {}
	//
	// or
	//
	// PUT (UPDATING) /me - nodeGuage.me({first_name:"Bob", last_name:"Marley"},
	// 	function (err, body) {
	// 		console.log('Info Updated');
	// 	});
	//

	this.me = function (var1, var2) {
		if (typeof var2 == 'undefined') {
			// GET
			nodeGauges.apiCall('/me', 'GET', {}, var1);
		} else {
			nodeGauges.apiCall('/me', 'PUT', var1, var2);
		};
	}

	// GET /clients
	this.clients = function (callback) {
		nodeGauges.apiCall('/clients', 'GET', {}, callback);
	}


	this.clients.create = function (options, callback) {
		nodeGauges.apiCall('/clients', 'POST', options, callback);
	}

	this.clients.delete = function (clientID, callback) {

		nodeGauges.apiCall('/clients/' + clientID, 'DELETE', {}, callback);
	}

	// if gaugeID set return /gauges/:id
	// else just return /gauges
	this.gauges = function (var1, var2) {
		if(typeof var2 == 'undefined') {
			//Get List
			nodeGauges.apiCall('/gauges', 'GET', {}, var1);
		} else {
			//Get Individual
			nodeGauges.apiCall('/gauges/' + var1, 'GET', {}, var2);
		}
	}

	this.gauges.create = function (parameters, callback) {
		nodeGauges.apiCall('/gauges', 'POST', parameters, callback);
	}

	this.gauges.update = function (gaugeID, parameters, callback) {
		nodeGauges.apiCall('/gauges/' + gaugeID, 'UPDATE', parameters, callback);
	}

	this.gauges.delete = function (gaugeID, callback) {
		nodeGauges.apiCall('/gauges/' + gaugeID, 'DELETE', {}, callback);
	}

	this.referrers = function (gaugeID, var1, var2) {

		if(typeof var2 == 'undefined'){
			var parameters = {};
			var callback = var1;
		} else{
			var parameters = var1;
			var callback = var2;
		}

		nodeGauges.apiCall('/gauges/' + gaugeID + '/referrers', 'GET', parameters, callback);
	}

	this.traffic = function (gaugeID, var1, var2) {

		if(typeof var2 == 'undefined'){
			var parameters = {};
			var callback = var1;
		} else{
			var parameters = var1;
			var callback = var2;
		}

		nodeGauges.apiCall('/gauges/' + gaugeID + '/traffic', 'GET', parameters, callback);
	}

	this.apiCall = function (route, method, data, callback) {
		console.log('Creating "%s" Request to "%s"', method, route);

		if(typeof route == 'undefined')
			throw noRouteGiven;

		var requestOptions = {
			uri: nodeGauges.apiBase + route,
			headers: {
				"X-Gauges-Token":this.apiKey,
			},
		}

		if(typeof method == 'undefined')
			requestOptions.method = "GET";
		else
			requestOptions.method = method;

		if(data)
			requestOptions.form = data;


		request(requestOptions, function(err, responce, body) {
			if (err) {
				callback(err, body, responce);
			} else {
				if(typeof body.status !== 'undefined') {
					callback(body.message, body, responce);
				} else {
					callback(null, body, responce);
				}
			}
		});
	}


}

exports.createClient = function(apiKey) {
	var nodeGuages;
	nodeGuages = new nodeGaugesClient(apiKey);
	return nodeGuages;
}


