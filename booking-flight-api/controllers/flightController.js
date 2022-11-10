const {Flights} = require("../models/Flight");
const { uuid } = require("uuidv4");

// Get all flights
exports.getFlights = async (req, res) => {
	try {
		const flights = Flights;
		res.status(200).json({
			message: "All flights",
			flights: flights
		});
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

// Get single flight
exports.getFlight = async (req, res) => {
	try {
		let id = req.params.id;
		const flight = Flights.find((flight) => flight.id === id);
		res.status.json({
			message: "Flight found",
			flight
		})
	} catch (err) {
		res.status(500).json({ message: err });
	}
}

// Create flights
exports.createFlight = async (req, res) => {
	try {
		const {title, time, price, date} = await req.body;
		const newFlight = {
			id: uuid(),
			title,
			time,
			price,
			date
		}

		flight.id = uuid;
		Flights.push(newFlight);

		res.status(201).json({
			message: "Flight created",
			newFlight
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Update flight
exports.updateFlight = async (req, res) => {
	try {
		let id = req.params.id;
		const flight = Flights.find((flight) => flight.id === id);
		const {title, time, price, date} = await req.body;
		flight.title = title;
		flight.time = time;
		flight.price = price;
		flight.date = date;
		res.status(200).json({
			message: "Flight updated",
			flight
		})
	} catch (err) {
		res.status(500).json({message: err.message});
	}
}

// Delete flight
exports.deleteFlight = async (req, res) => {
	try {
		let id = req.params.id;
		const flight = Flights.find((flight) => flight.id === id);
		Flights.splice(Flights.indexOf(flight), 1);
		res.status(200).json({
			message: "Flight deleted",
			flight
		})
	} catch (err) {
		res.status(500).json({message: err.message});
	}
};

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}


