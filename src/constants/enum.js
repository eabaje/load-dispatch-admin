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
  { NotStarted: "Not Started" },
  { InTransit: "In Transit" },
  { Arrived: "Arrived Destination" },
  { Delivered: "Delivered Shipment" },
];
export const LOAD_CAPACITY = [
  { value: "LowCapacity", text: "Low Capacity 2000" },
  { value: "HeavyCapacity", text: "Heavy Capacity 25000" },
  { value: "HighCapacity", text: "High Capacity >24000" },
];

export const CARRIER_TYPE = [{ Air: "Air" }, { Sea: "Sea" }, { Road: "Road" }];

export const FLEET_TYPE = [
  { Vessel: "Vessel" },
  { Truck: "Truck" },
  { Plane: "Plane" },
];

export const PAYMENT_METHOD = [
  { Cash: "Cash" },
  { CreditCard: "Credit Card" },
  { DebitCard: "Debit Card" },
  { Paypal: "Paypal" },
];

export const ORDER_STATUS = [
  { OrderMade: "Order Made" },
  { Processed: "Processed" },
  { Delivered: "Delivered" },
];

export const CARGO_TYPE = [
  { RoRo: "RoRo" },
  { Container: "Container" },
  { LiquidBulk: "Liquid Bulk" },
  { BreakBulk: "Break Bulk" },
  { DryBulk: "Dry Bulk" },
];

export const ROLES = [
  { admin: "Administrator" },
  { auditor: "Auditor" },
  { carrier: "Carrier" },
  { shipper: "Shipper" },
  { driver: "Driver" },
  { broker: "Broker" },
];

export const API_URL = "http://localhost:8000/api/";
