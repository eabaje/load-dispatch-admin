export const LOAD_TYPE = [
  { value: "SemiTrailer", text: "Semi Trailer" },
  { value: "StraightTruck", text: "Straight Truck" },
  { value: "TailLiftTruck", text: "TailLift Truck" },
  { value: "JumboTrailer", text: "Jumbo Trailer" },
  { value: "TruckTrailer", text: "Truck Trailer" },
  { value: "FlatbedTruck", text: "Flatbed Truck" },
  { value: "LowboyTrailer", text: "Lowboy Trailer" },
  { value: "RefrigeratedTrailers", text: "Refrigerated Trailers" },
  { value: "MiniBus", text: "MiniBus" },
  { value: "Sedan", text: "Sedan" },
  { value: "Car", text: "Car" },
  { value: "SUV", text: "SUV" },
  { value: "Van", text: "Van" },
];

export const LOAD_UNIT = [
  { value: "Kilo", text: "Kilo" },
  { value: "Tonnes", text: "Tonnes" },
];

export const TRIP_STATUS = [
  { value: "NotStarted", text: "Not Started" },
  { value: "In Transit", text: "In Transit" },
  { value: "Arrived", text: "Arrived Destination" },
  { value: "Delivered", text: "Delivered Shipment" },
];
export const LOAD_CAPACITY = [
  { value: "LowCapacity", text: "Low Capacity 2000" },
  { value: "HeavyCapacity", text: "Heavy Capacity 25000" },
  { value: "HighCapacity", text: "High Capacity >24000" },
];

export const CARRIER_TYPE = [
  { value: "Air", text: "Air" },
  { value: "Sea", text: "Sea" },
  { value: "Road", text: "Road" },
];

export const FLEET_TYPE = [
  { value: "Vessel", text: "Vessel" },
  { value: "Truck", text: "Truck" },
  { value: "Plane", text: "Plane" },
];

export const PAYMENT_METHOD = [
  { Cash: "Cash" },
  { CreditCard: "Credit Card" },
  { DebitCard: "Debit Card" },
  { Paypal: "Paypal" },
];

export const ORDER_STATUS = [
  { value: "OrderMade", text: "Order Made" },
  { value: "Processed", text: "Processed" },
  { value: "Delivered", text: "Delivered" },
];

export const CARGO_TYPE = [
  { value: "RoRo", text: "RoRo" },
  { value: "Container", text: " Container " },
  { value: "LiquidBulk", text: "Liquid Bulk" },
  { value: "BreakBulk", text: "Break Bulk" },
  { value: "DryBulk", text: "Dry Bulk" },
];

export const ROLES = [
  { value: "admin", text: "Administrator" },
  { value: "auditor", text: "Auditor" },
  { value: "carrier", text: "Carrier" },
  { value: "shipper", text: "Shipper" },
  { value: "driver", text: "driver " },
  { value: "broker", text: "Broker" },
];

export const API_URL = "http://localhost:8000/api/";
