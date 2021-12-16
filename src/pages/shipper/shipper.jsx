import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../context/Provider";
import { LOAD_TYPE, LOAD_CAPACITY } from "../../constants/enum";
import { createShipment } from "../../context/actions/shipment/shipment.action";

function Shipper() {
  const { shipmentform, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);
  const {
    shipmentDispatch,
    shipmentState: { error, loading, data },
  } = useContext(GlobalContext);
  const SubmitForm = (e) => {
    e.preventDefault();

    shipmentDispatch(createShipment(shipmentform));
    // if (password !== confirmPassword) {
    //   alert('Password and confirm password are not match');
    // } else {
    //   shipmentDispatch(createShipment(shipmentform));
    // }
  };
  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 id="formTitle">Post a vehicle</h3>
            </div>
            <div class="card-body">
              <div class="container"></div>
              <p class="alert alert-warning">
                Enter your vehicle listing. Do not post carrier availability,
                items for sale or other information. Use{" "}
                <a href="/protected/cargo/my-vehicles" title="My Vehicles">
                  My Vehicles
                </a>{" "}
                to edit, assign and remove listings, and to track your
                dispatched vehicles.
              </p>
              <form onSubmit={handleSubmit(SubmitForm)}>
                <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <h4>Origin</h4>
                      </div>
                      <div class="panel-body">
                        <div class="dispatchOnly postStore hidden">
                          <input
                            type="hidden"
                            class="addressId"
                            id="origin_addressId"
                            name="origin_addressId"
                          />
                          <div class="form-group">
                            <div class="checkbox-inline">
                              <label for="origin_isTerminal">
                                <input
                                  type="checkbox"
                                  id="origin_isTerminal"
                                  name="origin[terminal]"
                                  value="1"
                                />
                                <b>This is a Terminal</b>
                              </label>
                            </div>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="origin_companyName">
                              Terminal, Dealer, or Auction{" "}
                              <span
                                class="glyphicon glyphicon-info-sign"
                                data-title="Start typing a name in your address book and select from the drop down."
                              ></span>
                            </label>
                            <input
                              class="form-control companyName"
                              name="origin[company]"
                              id="origin_companyName"
                              maxlength="150"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="origin_contact">Contact</label>
                            <input
                              class="form-control"
                              name="origin[contact]"
                              id="origin_contact"
                              maxlength="150"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="origin_buyerNumber">Buyer Number</label>
                            <input
                              class="form-control"
                              name="origin[buyernum]"
                              id="origin_buyerNumber"
                              maxlength="150"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="origin_phone1">Phone 1</label>
                              <input
                                class="form-control"
                                name="origin[phone1]"
                                id="origin_phone1"
                                maxlength="22"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="origin_phone2">Phone 2</label>
                              <input
                                class="form-control"
                                name="origin[phone2]"
                                id="origin_phone2"
                                maxlength="22"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="origin_phone3">Phone 3</label>
                              <input
                                class="form-control"
                                name="origin[phone3]"
                                id="origin_phone3"
                                maxlength="22"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="origin_phone4">Cell</label>
                              <input
                                class="form-control"
                                name="origin[phone4]"
                                id="origin_phone4"
                                maxlength="22"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="origin_address1">Address</label>
                            <input
                              class="form-control"
                              name="origin[address1]"
                              id="origin_address1"
                              maxlength="54"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <input
                              class="form-control"
                              name="origin[address2]"
                              id="origin_address2"
                              maxlength="54"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                        </div>
                        <div class="row">
                          <div
                            class="col-xs-12"
                            style={{ position: "relative" }}
                          >
                            <div class="form-group has-feedback">
                              <label for="originCity">City</label>
                              <div class="input-group">
                                <input
                                  class="form-control waypointCity"
                                  type="text"
                                  name="origin[city]"
                                  id="originCity"
                                  data-location="origin"
                                  required="required"
                                  data-native-error="Valid city is required."
                                />
                                <div class="input-group-btn">
                                  <span
                                    id="originResetWaypoint"
                                    type="button"
                                    class="btn btn-default editVehicleType"
                                  >
                                    &nbsp;
                                    <i
                                      class="fa fa-undo"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                              <div class="FatMetro"></div>
                              <input
                                type="hidden"
                                class="waypointValid"
                                id="originValid"
                                name="origin[valid]"
                              />
                            </div>
                          </div>
                          <div
                            class="form-group col-xs-12 hidden"
                            id="originSuggestions"
                          >
                            <label>Suggestions</label>
                            <div class="originFatSuggestions">
                              <span>No Suggestions Available</span>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group has-feedback">
                              <label for="originState">State</label>
                              <select
                                class="form-control waypointState originState"
                                name="origin[state]"
                                id="originState"
                                required="required"
                                data-native-error="Valid state is required."
                              >
                                <option></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="DC">Washington DC</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="AB">Canada-Alberta</option>
                                <option value="BC">
                                  Canada-British Columbia
                                </option>
                                <option value="MB">Canada-Manitoba</option>
                                <option value="NB">Canada-New Brunswick</option>
                                <option value="NL">Canada-Newfoundland</option>
                                <option value="NT">
                                  Canada-Northwest Territories
                                </option>
                                <option value="NS">Canada-Nova Scotia</option>
                                <option value="NU">Canada-Nunavut</option>
                                <option value="ON">Canada-Ontario</option>
                                <option value="PE">
                                  Canada-Prince Edward Island
                                </option>
                                <option value="QC">Canada-Quebec</option>
                                <option value="SK">Canada-Saskatchewan</option>
                                <option value="YT">Canada-Yukon</option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group has-feedback">
                              <label for="originZip">Postal Code</label>
                              <input
                                class="form-control waypointZip"
                                type="text"
                                name="origin[zip]"
                                id="originZip"
                                data-location="origin"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                            </div>
                          </div>

                          <div class="dispatchOnly postStore hidden text-right">
                            <button
                              type="button"
                              class="btn btn-default saveContact"
                            >
                              Save This Contact
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <h4>Destination</h4>
                      </div>
                      <div class="panel-body">
                        <div class="dispatchOnly postStore hidden">
                          <input
                            type="hidden"
                            class="addressId"
                            id="destination_addressId"
                            name="destination_addressId"
                          />
                          <div class="form-group">
                            <div class="checkbox-inline">
                              <label for="destination_isTerminal">
                                <input
                                  type="checkbox"
                                  id="destination_isTerminal"
                                  name="destination[terminal]"
                                  value="1"
                                />
                                <b>This is a Terminal</b>
                              </label>
                            </div>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="destination_companyName">
                              Terminal, Dealer, or Auction{" "}
                              <span
                                class="glyphicon glyphicon-info-sign"
                                data-title="Start typing a name in your address book and select from the drop down."
                              ></span>
                            </label>
                            <input
                              class="form-control companyName"
                              name="destination[company]"
                              id="destination_companyName"
                              maxlength="150"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="destination_contact">Contact</label>
                            <input
                              class="form-control"
                              name="destination[contact]"
                              id="destination_contact"
                              maxlength="150"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="destination_buyerNumber">
                              Buyer Number
                            </label>
                            <input
                              class="form-control"
                              name="destination[buyernum]"
                              id="destination_buyerNumber"
                              maxlength="150"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="destination_phone1">Phone 1</label>
                              <input
                                class="form-control"
                                name="destination[phone1]"
                                id="destination_phone1"
                                maxlength="22"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="destination_phone2">Phone 2</label>
                              <input
                                class="form-control"
                                name="destination[phone2]"
                                id="destination_phone2"
                                maxlength="22"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="destination_phone3">Phone 3</label>
                              <input
                                class="form-control"
                                name="destination[phone3]"
                                id="destination_phone3"
                                maxlength="22"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="destination_phone4">Cell</label>
                              <input
                                class="form-control"
                                name="destination[phone4]"
                                id="destination_phone4"
                                maxlength="22"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="destination_address1">Address</label>
                            <input
                              class="form-control"
                              name="destination[address1]"
                              id="destination_address1"
                              maxlength="54"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <input
                              class="form-control"
                              name="destination[address2]"
                              id="destination_address2"
                              maxlength="54"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                        </div>
                        <div class="row">
                          <div
                            class="col-xs-12"
                            style={{ position: "relative" }}
                          >
                            <div class="form-group has-feedback">
                              <label for="destinationCity">City</label>
                              <div class="input-group">
                                <input
                                  class="form-control waypointCity"
                                  type="text"
                                  name="destination[city]"
                                  id="destinationCity"
                                  data-location="destination"
                                  required="required"
                                  data-native-error="Valid city is required."
                                />
                                <div class="input-group-btn">
                                  <span
                                    id="destinationResetWaypoint"
                                    type="button"
                                    class="btn btn-default editVehicleType"
                                  >
                                    &nbsp;
                                    <i
                                      class="fa fa-undo"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                              <div class="FatMetro"></div>
                              <input
                                type="hidden"
                                class="waypointValid"
                                id="destinationValid"
                                name="destination[valid]"
                              />
                            </div>
                          </div>
                          <div
                            class="form-group col-xs-12 hidden"
                            id="destinationSuggestions"
                          >
                            <label>Suggestions</label>
                            <div class="destinationFatSuggestions">
                              <span>No Suggestions Available</span>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group has-feedback">
                              <label for="destinationState">State</label>
                              <select
                                class="form-control waypointState destinationState"
                                name="destination[state]"
                                id="destinationState"
                                required="required"
                                data-native-error="Valid state is required."
                              >
                                <option></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="DC">Washington DC</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="AB">Canada-Alberta</option>
                                <option value="BC">
                                  Canada-British Columbia
                                </option>
                                <option value="MB">Canada-Manitoba</option>
                                <option value="NB">Canada-New Brunswick</option>
                                <option value="NL">Canada-Newfoundland</option>
                                <option value="NT">
                                  Canada-Northwest Territories
                                </option>
                                <option value="NS">Canada-Nova Scotia</option>
                                <option value="NU">Canada-Nunavut</option>
                                <option value="ON">Canada-Ontario</option>
                                <option value="PE">
                                  Canada-Prince Edward Island
                                </option>
                                <option value="QC">Canada-Quebec</option>
                                <option value="SK">Canada-Saskatchewan</option>
                                <option value="YT">Canada-Yukon</option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group has-feedback">
                              <label for="destinationZip">Postal Code</label>
                              <input
                                class="form-control waypointZip"
                                type="text"
                                name="destination[zip]"
                                id="destinationZip"
                                data-location="destination"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                            </div>
                          </div>

                          <div class="dispatchOnly postStore hidden text-right">
                            <button
                              type="button"
                              class="btn btn-default saveContact"
                            >
                              Save This Contact
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Shipment Category</label>
                    <select id="LoadCategory" class="form-control">
                      <option selected>select</option>
                      {LOAD_TYPE.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="LoadType">Load Type</label>
                    <select id="LoadType" class="form-control">
                      <option selected>select</option>
                      <option selected="selected"></option>
                      {LOAD_CAPACITY.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                      <option selected>select</option>
                      <option>Large select</option>
                    </select>
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <button type="submit" class="btn  btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 id="formTitle">Post a vehicle</h3>
            </div>
            <div class="card-body">
              <div class="container">
                <form
                  action="/protected/listing/post-listing-submit-responsive"
                  method="POST"
                  id="postload_form"
                >
                  <div class="form-inline " style={{ "padding-top": "10px;" }}>
                    <div class="form-group">
                      <div class="radio-inline">
                        <label for="postOnly">
                          <input
                            type="radio"
                            class="btn postType"
                            id="postOnly"
                            name="postType"
                            value="postOnly"
                            checked="checked"
                          />
                          <b>Post Only</b>
                        </label>
                      </div>
                      <div class="radio-inline ">
                        <label for="dispatchOnly">
                          <input
                            type="radio"
                            class="btn postType"
                            id="dispatchOnly"
                            name="postType"
                            value="dispatchOnly"
                          />
                          <b>Dispatch Only</b>
                        </label>
                      </div>
                      <div class="radio-inline">
                        <label for="postStore">
                          <input
                            type="radio"
                            class="btn postType"
                            id="postStore"
                            name="postType"
                            value="postStore"
                          />
                          <b>Post & Store Private Data for Dispatch</b>{" "}
                          <span
                            class="glyphicon glyphicon-info-sign"
                            data-title="Make dispatching more convenient by entering details now without displaying them in search results."
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <p class="alert alert-warning">
                    Enter your vehicle listing. Do not post carrier
                    availability, items for sale or other information. Use{" "}
                    <a href="/protected/cargo/my-vehicles" title="My Vehicles">
                      My Vehicles
                    </a>{" "}
                    to edit, assign and remove listings, and to track your
                    dispatched vehicles.
                  </p>
                  <div class="row dispatchOnly hidden">
                    <div class="col-xs-12 col-sm-6">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4>Carrier Information</h4>
                        </div>
                        <div class="panel-body">
                          <div class="form-group has-feedback">
                            <label for="carrier_companyName">
                              Company Name{" "}
                              <span
                                class="glyphicon glyphicon-info-sign"
                                data-title="Start typing a name and select from the drop down."
                              ></span>
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              required="required"
                              name="carrier[companyName]"
                              id="carrier_companyName"
                            />
                            <input
                              type="hidden"
                              name="carrier[id]"
                              id="carrier_id"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="carrier_mcnum">MC#</label>
                            <input
                              class="form-control"
                              type="text"
                              name="carrier[mcnum]"
                              id="carrier_mcnum"
                              readonly="readonly"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="carrier_contact">Contact</label>
                            <input
                              class="form-control"
                              name="carrier[contact]"
                              id="carrier_contact"
                              readonly="readonly"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="carrier_address1">Address</label>
                            <input
                              class="form-control"
                              name="carrier[address1]"
                              id="carrier_address1"
                              readonly="readonly"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <input
                              class="form-control"
                              name="carrier[address2]"
                              id="carrier_address2"
                              readonly="readonly"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>

                          <div
                            class="col-xs-12"
                            style={{ position: "relative" }}
                          >
                            <div class="form-group has-feedback">
                              <label for="carrierCity">City</label>
                              <div class="input-group">
                                <input
                                  class="form-control waypointCity"
                                  type="text"
                                  name="carrier[city]"
                                  id="carrierCity"
                                  readonly="readonly"
                                  data-native-error="Valid city is required."
                                />
                              </div>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                              <div class="FatMetro"></div>
                              <input
                                type="hidden"
                                class="waypointValid"
                                id="carrierValid"
                                name="carrier[valid]"
                                value="1"
                              />
                            </div>
                          </div>
                          <div
                            class="form-group col-xs-12 hidden"
                            id="carrierSuggestions"
                          >
                            <label>Suggestions</label>
                            <div class="carrierFatSuggestions">
                              <span>No Suggestions Available</span>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-12">
                            <div class="form-group has-feedback">
                              <label for="carrierState">State</label>
                              <select
                                class="form-control waypointState carrierState"
                                disabled="disabled"
                                data-readonly="readonly"
                                id="carrierState"
                                required="required"
                                data-native-error="Valid state is required."
                              >
                                <option></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="DC">Washington DC</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="AB">Canada-Alberta</option>
                                <option value="BC">
                                  Canada-British Columbia
                                </option>
                                <option value="MB">Canada-Manitoba</option>
                                <option value="NB">Canada-New Brunswick</option>
                                <option value="NL">Canada-Newfoundland</option>
                                <option value="NT">
                                  Canada-Northwest Territories
                                </option>
                                <option value="NS">Canada-Nova Scotia</option>
                                <option value="NU">Canada-Nunavut</option>
                                <option value="ON">Canada-Ontario</option>
                                <option value="PE">
                                  Canada-Prince Edward Island
                                </option>
                                <option value="QC">Canada-Quebec</option>
                                <option value="SK">Canada-Saskatchewan</option>
                                <option value="YT">Canada-Yukon</option>
                              </select>
                              <input
                                type="hidden"
                                name="carrier[state]"
                                class="carrierState"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-12">
                            <div class="form-group has-feedback">
                              <label for="carrierZip">Postal Code</label>
                              <input
                                class="form-control waypointZip"
                                type="text"
                                name="carrier[zip]"
                                id="carrierZip"
                                readonly="readonly"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                            </div>
                          </div>
                          <script></script>

                          <div class="row">
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="carrier_phone1">Phone #1</label>
                              <input
                                class="form-control"
                                name="carrier[phone1]"
                                id="carrier_phone1"
                                readonly="readonly"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="carrier_phone2">Phone #2</label>
                              <input
                                class="form-control"
                                name="carrier[phone2]"
                                id="carrier_phone2"
                                readonly="readonly"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="carrier_cell">Cell Phone</label>
                              <input
                                class="form-control"
                                name="carrier[cell]"
                                id="carrier_cell"
                                readonly="readonly"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="carrier_fax">Fax</label>
                              <input
                                class="form-control"
                                name="carrier[fax]"
                                id="carrier_fax"
                                readonly="readonly"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="carrier_driver_first_name">
                              Driver's First Name
                            </label>
                            <input
                              class="form-control"
                              name="carrier[driverFirstName]"
                              id="carrier_driver_first_name"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="carrier_driver_last_name">
                              Driver's Last Name
                            </label>
                            <input
                              class="form-control"
                              name="carrier[driverLastName]"
                              id="carrier_driver_last_name"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="carrier_driver_cell">
                              Driver Phone
                            </label>
                            <input
                              class="form-control"
                              name="carrier[driverCell]"
                              id="carrier_driver_cell"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="pull-left">Your Company Information</h4>
                          <div class="pull-right">
                            <a
                              class="btn btn-default btn-lg"
                              href="/protected/profile"
                            >
                              Edit
                            </a>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                          <div class="form-group has-feedback">
                            <label for="dispatcher_companyName">
                              Company Name
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              name="dispatcher[companyName]"
                              id="dispatcher_companyName"
                              readonly="readonly"
                              value="Konor Autos Inc"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="dispatcher_mcnum">MC#</label>
                            <input
                              class="form-control"
                              type="text"
                              name="dispatcher[mcnum]"
                              id="dispatcher_mcnum"
                              readonly="readonly"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="dispatcher_contact">Contact</label>
                            <input
                              class="form-control"
                              name="dispatcher[contact]"
                              id="dispatcher_contact"
                              readonly="readonly"
                              value="Gabriel Ehima"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="dispatcher_address1">Address</label>
                            <input
                              class="form-control"
                              name="dispatcher[address1]"
                              id="dispatcher_address1"
                              readonly="readonly"
                              value="5380 Oak Hill Terrace"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="form-group has-feedback">
                            <input
                              class="form-control"
                              name="dispatcher[address2]"
                              id="dispatcher_address2"
                              readonly="readonly"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>

                          <div
                            class="col-xs-12"
                            style={{ position: "relative" }}
                          >
                            <div class="form-group has-feedback">
                              <label for="dispatcherCity">City</label>
                              <div class="input-group">
                                <input
                                  class="form-control waypointCity"
                                  type="text"
                                  value="Cumming"
                                  name="dispatcher[city]"
                                  id="dispatcherCity"
                                  readonly="readonly"
                                  data-native-error="Valid city is required."
                                />
                              </div>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                              <div class="FatMetro"></div>
                              <input
                                type="hidden"
                                class="waypointValid"
                                id="dispatcherValid"
                                name="dispatcher[valid]"
                                value="1"
                              />
                            </div>
                          </div>
                          <div
                            class="form-group col-xs-12 hidden"
                            id="dispatcherSuggestions"
                          >
                            <label>Suggestions</label>
                            <div class="dispatcherFatSuggestions">
                              <span>No Suggestions Available</span>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-12">
                            <div class="form-group has-feedback">
                              <label for="dispatcherState">State</label>
                              <select
                                class="form-control waypointState dispatcherState"
                                disabled="disabled"
                                data-readonly="readonly"
                                id="dispatcherState"
                                required="required"
                                data-native-error="Valid state is required."
                              >
                                <option></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA" selected="selected">
                                  Georgia
                                </option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="DC">Washington DC</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                <option value="AB">Canada-Alberta</option>
                                <option value="BC">
                                  Canada-British Columbia
                                </option>
                                <option value="MB">Canada-Manitoba</option>
                                <option value="NB">Canada-New Brunswick</option>
                                <option value="NL">Canada-Newfoundland</option>
                                <option value="NT">
                                  Canada-Northwest Territories
                                </option>
                                <option value="NS">Canada-Nova Scotia</option>
                                <option value="NU">Canada-Nunavut</option>
                                <option value="ON">Canada-Ontario</option>
                                <option value="PE">
                                  Canada-Prince Edward Island
                                </option>
                                <option value="QC">Canada-Quebec</option>
                                <option value="SK">Canada-Saskatchewan</option>
                                <option value="YT">Canada-Yukon</option>
                              </select>
                              <input
                                type="hidden"
                                name="dispatcher[state]"
                                class="dispatcherState"
                                value="GA"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-12">
                            <div class="form-group has-feedback">
                              <label for="dispatcherZip">Postal Code</label>
                              <input
                                class="form-control waypointZip"
                                type="text"
                                value="30040"
                                name="dispatcher[zip]"
                                id="dispatcherZip"
                                readonly="readonly"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <div class="help-block with-errors text-right small"></div>
                            </div>
                          </div>
                          <script></script>

                          <div class="row">
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="dispatcher_phone1">
                                Company Phone
                              </label>
                              <input
                                class="form-control"
                                name="dispatcher[phone1]"
                                id="dispatcher_phone1"
                                readonly="readonly"
                                value="404-955-2848"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="col-xs-12 col-md-6 form-group has-feedback">
                              <label for="dispatcher_phone2">
                                Dispatch Phone
                              </label>
                              <input
                                class="form-control"
                                name="dispatcher[phone2]"
                                id="dispatcher_phone2"
                                readonly="readonly"
                                value="(404) 955-2848"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="form-group has-feedback">
                            <label for="dispatcher_fax">Fax</label>
                            <input
                              class="form-control"
                              name="dispatcher[fax]"
                              id="dispatcher_fax"
                              readonly="readonly"
                            />
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="alert alert-warning dispatchOnly postStore hidden">
                    Pickup and delivery contact details and other dispatching
                    information will remain hidden from carrier until they have
                    accepted your dispatch.
                  </p>
                  <div class="hidden alert alert-danger" id="formErrors">
                    There were errors detected in your submission. Please review
                    and resubmit.
                  </div>
                  <div class="row">
                    <div class="col-xs-12 col-md-6">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4>Origin</h4>
                        </div>
                        <div class="panel-body">
                          <div class="dispatchOnly postStore hidden">
                            <input
                              type="hidden"
                              class="addressId"
                              id="origin_addressId"
                              name="origin_addressId"
                            />
                            <div class="form-group">
                              <div class="checkbox-inline">
                                <label for="origin_isTerminal">
                                  <input
                                    type="checkbox"
                                    id="origin_isTerminal"
                                    name="origin[terminal]"
                                    value="1"
                                  />
                                  <b>This is a Terminal</b>
                                </label>
                              </div>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="origin_companyName">
                                Terminal, Dealer, or Auction{" "}
                                <span
                                  class="glyphicon glyphicon-info-sign"
                                  data-title="Start typing a name in your address book and select from the drop down."
                                ></span>
                              </label>
                              <input
                                class="form-control companyName"
                                name="origin[company]"
                                id="origin_companyName"
                                maxlength="150"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="origin_contact">Contact</label>
                              <input
                                class="form-control"
                                name="origin[contact]"
                                id="origin_contact"
                                maxlength="150"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="origin_buyerNumber">
                                Buyer Number
                              </label>
                              <input
                                class="form-control"
                                name="origin[buyernum]"
                                id="origin_buyerNumber"
                                maxlength="150"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="row">
                              <div class="col-xs-12 col-md-6 form-group has-feedback">
                                <label for="origin_phone1">Phone 1</label>
                                <input
                                  class="form-control"
                                  name="origin[phone1]"
                                  id="origin_phone1"
                                  maxlength="22"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block with-errors text-right small"></span>
                              </div>
                              <div class="col-xs-12 col-md-6 form-group has-feedback">
                                <label for="origin_phone2">Phone 2</label>
                                <input
                                  class="form-control"
                                  name="origin[phone2]"
                                  id="origin_phone2"
                                  maxlength="22"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block with-errors text-right small"></span>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-xs-12 col-md-6 form-group has-feedback">
                                <label for="origin_phone3">Phone 3</label>
                                <input
                                  class="form-control"
                                  name="origin[phone3]"
                                  id="origin_phone3"
                                  maxlength="22"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block with-errors text-right small"></span>
                              </div>
                              <div class="col-xs-12 col-md-6 form-group has-feedback">
                                <label for="origin_phone4">Cell</label>
                                <input
                                  class="form-control"
                                  name="origin[phone4]"
                                  id="origin_phone4"
                                  maxlength="22"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block with-errors text-right small"></span>
                              </div>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="origin_address1">Address</label>
                              <input
                                class="form-control"
                                name="origin[address1]"
                                id="origin_address1"
                                maxlength="54"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <input
                                class="form-control"
                                name="origin[address2]"
                                id="origin_address2"
                                maxlength="54"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="row">
                            <div
                              class="col-xs-12"
                              style={{ position: "relative" }}
                            >
                              <div class="form-group has-feedback">
                                <label for="originCity">City</label>
                                <div class="input-group">
                                  <input
                                    class="form-control waypointCity"
                                    type="text"
                                    name="origin[city]"
                                    id="originCity"
                                    data-location="origin"
                                    required="required"
                                    data-native-error="Valid city is required."
                                  />
                                  <div class="input-group-btn">
                                    <span
                                      id="originResetWaypoint"
                                      type="button"
                                      class="btn btn-default editVehicleType"
                                    >
                                      &nbsp;
                                      <i
                                        class="fa fa-undo"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <div class="help-block with-errors text-right small"></div>
                                <div class="FatMetro"></div>
                                <input
                                  type="hidden"
                                  class="waypointValid"
                                  id="originValid"
                                  name="origin[valid]"
                                />
                              </div>
                            </div>
                            <div
                              class="form-group col-xs-12 hidden"
                              id="originSuggestions"
                            >
                              <label>Suggestions</label>
                              <div class="originFatSuggestions">
                                <span>No Suggestions Available</span>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="form-group has-feedback">
                                <label for="originState">State</label>
                                <select
                                  class="form-control waypointState originState"
                                  name="origin[state]"
                                  id="originState"
                                  required="required"
                                  data-native-error="Valid state is required."
                                >
                                  <option></option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="FL">Florida</option>
                                  <option value="GA">Georgia</option>
                                  <option value="HI">Hawaii</option>
                                  <option value="ID">Idaho</option>
                                  <option value="IL">Illinois</option>
                                  <option value="IN">Indiana</option>
                                  <option value="IA">Iowa</option>
                                  <option value="KS">Kansas</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="LA">Louisiana</option>
                                  <option value="ME">Maine</option>
                                  <option value="MD">Maryland</option>
                                  <option value="MA">Massachusetts</option>
                                  <option value="MI">Michigan</option>
                                  <option value="MN">Minnesota</option>
                                  <option value="MS">Mississippi</option>
                                  <option value="MO">Missouri</option>
                                  <option value="MT">Montana</option>
                                  <option value="NE">Nebraska</option>
                                  <option value="NV">Nevada</option>
                                  <option value="NH">New Hampshire</option>
                                  <option value="NJ">New Jersey</option>
                                  <option value="NM">New Mexico</option>
                                  <option value="NY">New York</option>
                                  <option value="NC">North Carolina</option>
                                  <option value="ND">North Dakota</option>
                                  <option value="OH">Ohio</option>
                                  <option value="OK">Oklahoma</option>
                                  <option value="OR">Oregon</option>
                                  <option value="PA">Pennsylvania</option>
                                  <option value="RI">Rhode Island</option>
                                  <option value="SC">South Carolina</option>
                                  <option value="SD">South Dakota</option>
                                  <option value="TN">Tennessee</option>
                                  <option value="TX">Texas</option>
                                  <option value="UT">Utah</option>
                                  <option value="VT">Vermont</option>
                                  <option value="VA">Virginia</option>
                                  <option value="WA">Washington</option>
                                  <option value="DC">Washington DC</option>
                                  <option value="WV">West Virginia</option>
                                  <option value="WI">Wisconsin</option>
                                  <option value="WY">Wyoming</option>
                                  <option value="AB">Canada-Alberta</option>
                                  <option value="BC">
                                    Canada-British Columbia
                                  </option>
                                  <option value="MB">Canada-Manitoba</option>
                                  <option value="NB">
                                    Canada-New Brunswick
                                  </option>
                                  <option value="NL">
                                    Canada-Newfoundland
                                  </option>
                                  <option value="NT">
                                    Canada-Northwest Territories
                                  </option>
                                  <option value="NS">Canada-Nova Scotia</option>
                                  <option value="NU">Canada-Nunavut</option>
                                  <option value="ON">Canada-Ontario</option>
                                  <option value="PE">
                                    Canada-Prince Edward Island
                                  </option>
                                  <option value="QC">Canada-Quebec</option>
                                  <option value="SK">
                                    Canada-Saskatchewan
                                  </option>
                                  <option value="YT">Canada-Yukon</option>
                                </select>
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <div class="help-block with-errors text-right small"></div>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="form-group has-feedback">
                                <label for="originZip">Postal Code</label>
                                <input
                                  class="form-control waypointZip"
                                  type="text"
                                  name="origin[zip]"
                                  id="originZip"
                                  data-location="origin"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <div class="help-block with-errors text-right small"></div>
                              </div>
                            </div>

                            <div class="dispatchOnly postStore hidden text-right">
                              <button
                                type="button"
                                class="btn btn-default saveContact"
                              >
                                Save This Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4>Destination</h4>
                        </div>
                        <div class="panel-body">
                          <div class="dispatchOnly postStore hidden">
                            <input
                              type="hidden"
                              class="addressId"
                              id="destination_addressId"
                              name="destination_addressId"
                            />
                            <div class="form-group">
                              <div class="checkbox-inline">
                                <label for="destination_isTerminal">
                                  <input
                                    type="checkbox"
                                    id="destination_isTerminal"
                                    name="destination[terminal]"
                                    value="1"
                                  />
                                  <b>This is a Terminal</b>
                                </label>
                              </div>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="destination_companyName">
                                Terminal, Dealer, or Auction{" "}
                                <span
                                  class="glyphicon glyphicon-info-sign"
                                  data-title="Start typing a name in your address book and select from the drop down."
                                ></span>
                              </label>
                              <input
                                class="form-control companyName"
                                name="destination[company]"
                                id="destination_companyName"
                                maxlength="150"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="destination_contact">Contact</label>
                              <input
                                class="form-control"
                                name="destination[contact]"
                                id="destination_contact"
                                maxlength="150"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="destination_buyerNumber">
                                Buyer Number
                              </label>
                              <input
                                class="form-control"
                                name="destination[buyernum]"
                                id="destination_buyerNumber"
                                maxlength="150"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="row">
                              <div class="col-xs-12 col-md-6 form-group has-feedback">
                                <label for="destination_phone1">Phone 1</label>
                                <input
                                  class="form-control"
                                  name="destination[phone1]"
                                  id="destination_phone1"
                                  maxlength="22"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block with-errors text-right small"></span>
                              </div>
                              <div class="col-xs-12 col-md-6 form-group has-feedback">
                                <label for="destination_phone2">Phone 2</label>
                                <input
                                  class="form-control"
                                  name="destination[phone2]"
                                  id="destination_phone2"
                                  maxlength="22"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block with-errors text-right small"></span>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-xs-12 col-md-6 form-group has-feedback">
                                <label for="destination_phone3">Phone 3</label>
                                <input
                                  class="form-control"
                                  name="destination[phone3]"
                                  id="destination_phone3"
                                  maxlength="22"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block with-errors text-right small"></span>
                              </div>
                              <div class="col-xs-12 col-md-6 form-group has-feedback">
                                <label for="destination_phone4">Cell</label>
                                <input
                                  class="form-control"
                                  name="destination[phone4]"
                                  id="destination_phone4"
                                  maxlength="22"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <span class="help-block with-errors text-right small"></span>
                              </div>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="destination_address1">Address</label>
                              <input
                                class="form-control"
                                name="destination[address1]"
                                id="destination_address1"
                                maxlength="54"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <input
                                class="form-control"
                                name="destination[address2]"
                                id="destination_address2"
                                maxlength="54"
                              />
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="row">
                            <div
                              class="col-xs-12"
                              style={{ position: "relative" }}
                            >
                              <div class="form-group has-feedback">
                                <label for="destinationCity">City</label>
                                <div class="input-group">
                                  <input
                                    class="form-control waypointCity"
                                    type="text"
                                    name="destination[city]"
                                    id="destinationCity"
                                    data-location="destination"
                                    required="required"
                                    data-native-error="Valid city is required."
                                  />
                                  <div class="input-group-btn">
                                    <span
                                      id="destinationResetWaypoint"
                                      type="button"
                                      class="btn btn-default editVehicleType"
                                    >
                                      &nbsp;
                                      <i
                                        class="fa fa-undo"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <div class="help-block with-errors text-right small"></div>
                                <div class="FatMetro"></div>
                                <input
                                  type="hidden"
                                  class="waypointValid"
                                  id="destinationValid"
                                  name="destination[valid]"
                                />
                              </div>
                            </div>
                            <div
                              class="form-group col-xs-12 hidden"
                              id="destinationSuggestions"
                            >
                              <label>Suggestions</label>
                              <div class="destinationFatSuggestions">
                                <span>No Suggestions Available</span>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="form-group has-feedback">
                                <label for="destinationState">State</label>
                                <select
                                  class="form-control waypointState destinationState"
                                  name="destination[state]"
                                  id="destinationState"
                                  required="required"
                                  data-native-error="Valid state is required."
                                >
                                  <option></option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="FL">Florida</option>
                                  <option value="GA">Georgia</option>
                                  <option value="HI">Hawaii</option>
                                  <option value="ID">Idaho</option>
                                  <option value="IL">Illinois</option>
                                  <option value="IN">Indiana</option>
                                  <option value="IA">Iowa</option>
                                  <option value="KS">Kansas</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="LA">Louisiana</option>
                                  <option value="ME">Maine</option>
                                  <option value="MD">Maryland</option>
                                  <option value="MA">Massachusetts</option>
                                  <option value="MI">Michigan</option>
                                  <option value="MN">Minnesota</option>
                                  <option value="MS">Mississippi</option>
                                  <option value="MO">Missouri</option>
                                  <option value="MT">Montana</option>
                                  <option value="NE">Nebraska</option>
                                  <option value="NV">Nevada</option>
                                  <option value="NH">New Hampshire</option>
                                  <option value="NJ">New Jersey</option>
                                  <option value="NM">New Mexico</option>
                                  <option value="NY">New York</option>
                                  <option value="NC">North Carolina</option>
                                  <option value="ND">North Dakota</option>
                                  <option value="OH">Ohio</option>
                                  <option value="OK">Oklahoma</option>
                                  <option value="OR">Oregon</option>
                                  <option value="PA">Pennsylvania</option>
                                  <option value="RI">Rhode Island</option>
                                  <option value="SC">South Carolina</option>
                                  <option value="SD">South Dakota</option>
                                  <option value="TN">Tennessee</option>
                                  <option value="TX">Texas</option>
                                  <option value="UT">Utah</option>
                                  <option value="VT">Vermont</option>
                                  <option value="VA">Virginia</option>
                                  <option value="WA">Washington</option>
                                  <option value="DC">Washington DC</option>
                                  <option value="WV">West Virginia</option>
                                  <option value="WI">Wisconsin</option>
                                  <option value="WY">Wyoming</option>
                                  <option value="AB">Canada-Alberta</option>
                                  <option value="BC">
                                    Canada-British Columbia
                                  </option>
                                  <option value="MB">Canada-Manitoba</option>
                                  <option value="NB">
                                    Canada-New Brunswick
                                  </option>
                                  <option value="NL">
                                    Canada-Newfoundland
                                  </option>
                                  <option value="NT">
                                    Canada-Northwest Territories
                                  </option>
                                  <option value="NS">Canada-Nova Scotia</option>
                                  <option value="NU">Canada-Nunavut</option>
                                  <option value="ON">Canada-Ontario</option>
                                  <option value="PE">
                                    Canada-Prince Edward Island
                                  </option>
                                  <option value="QC">Canada-Quebec</option>
                                  <option value="SK">
                                    Canada-Saskatchewan
                                  </option>
                                  <option value="YT">Canada-Yukon</option>
                                </select>
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <div class="help-block with-errors text-right small"></div>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                              <div class="form-group has-feedback">
                                <label for="destinationZip">Postal Code</label>
                                <input
                                  class="form-control waypointZip"
                                  type="text"
                                  name="destination[zip]"
                                  id="destinationZip"
                                  data-location="destination"
                                />
                                <span
                                  class="glyphicon form-control-feedback"
                                  aria-hidden="true"
                                ></span>
                                <div class="help-block with-errors text-right small"></div>
                              </div>
                            </div>

                            <div class="dispatchOnly postStore hidden text-right">
                              <button
                                type="button"
                                class="btn btn-default saveContact"
                              >
                                Save This Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4>Vehicle Information</h4>
                    </div>
                    <div class="panel-body">
                      <div class="form-inline pull-left">
                        <div class="radio-inline">
                          <label for="runningRadio0">
                            <input
                              type="radio"
                              class="btn runningRadio"
                              id="runningRadio0"
                              name="vehicles[running]"
                              value="1"
                              checked="checked"
                            />
                            <b>Running</b>
                          </label>
                        </div>
                        <div class="radio-inline">
                          <label for="notRunningRadio0">
                            <input
                              type="radio"
                              class="btn runningRadio"
                              id="notRunningRadio0"
                              name="vehicles[running]"
                              value="0"
                            />
                            <b>Not Running</b>
                          </label>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                      <div class="form-group has-feedback">
                        <label for="selTrailerType">Trailer Type </label>
                        <select
                          id="selTrailerType"
                          name="vehicles[trailerType]"
                          class="form-control"
                          required="required"
                        >
                          <option></option>
                          <option value="Open" selected="selected">
                            Open
                          </option>
                          <option value="Enclosed">Enclosed</option>
                          <option value="Driveaway">Driveaway</option>
                        </select>
                        <span
                          class="glyphicon form-control-feedback"
                          aria-hidden="true"
                        ></span>
                        <span class="help-block with-errors text-right small"></span>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="pull-left">Vehicles</h4>
                          <div class="pull-right">
                            <a
                              href={{ javascript: "void(0)" }}
                              class="addVehicle btn btn-default btn-lg"
                            >
                              Add Vehicle
                            </a>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="vehicles">
                          <div class="panel-body vehicle">
                            <div class="form-inline pull-left">
                              <input
                                class="vehicleId"
                                type="hidden"
                                name="vehicles[vehicleDetail][0][id]"
                                id="vehicleId0"
                              />
                              <input
                                class="vehicleRemoved"
                                type="hidden"
                                name="vehicles[vehicleDetail][0][removed]"
                                id="vehicleRemoved0"
                              />
                              <div class="form-group">
                                <div class="radio-inline">
                                  <label for="ymmRadio0">
                                    <input
                                      type="radio"
                                      class="btn vehicleRadio ymmRadio"
                                      name="vehicles[vehicleDetail][0][inputType]"
                                      id="ymmRadio0"
                                      value="ymm0"
                                      checked="checked"
                                    />
                                    Year, Make, and Model
                                  </label>
                                </div>
                                <div class="radio-inline">
                                  <label for="vinRadio0">
                                    <input
                                      type="radio"
                                      class="btn vehicleRadio vinRadio"
                                      name="vehicles[vehicleDetail][0][inputType]"
                                      id="vinRadio0"
                                      value="vin0"
                                    />
                                    Vin
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="pull-right">
                              <a
                                href={{ javascript: "void(0)" }}
                                class="deleteVehicle btn btn-default hidden"
                              >
                                Remove Vehicle
                              </a>
                              <a
                                href={{ javascript: "void(0)" }}
                                class="clearVehicle btn btn-default"
                              >
                                Clear Vehicle
                              </a>
                            </div>
                            <div class="clearfix"></div>
                            <div class="vehicleInputOption vin0 hidden">
                              <div class="row">
                                <div class="col-xs-4">
                                  <div class="form-group has-feedback">
                                    <label for="vin0">Vin</label>
                                    <input
                                      class="form-control vinInput"
                                      data-index="0"
                                      type="text"
                                      data-minlength="10"
                                      maxlength="17"
                                      name="vehicles[vehicleDetail][0][vin]"
                                      id="vin0"
                                      required="required"
                                    />
                                    <span
                                      class="glyphicon form-control-feedback"
                                      aria-hidden="true"
                                    ></span>
                                    <span class="help-block with-errors text-right small"></span>
                                  </div>
                                </div>
                                <div class="col-sm-8 vinLoader hidden">
                                  <br />
                                  <div class="alert alert-info">
                                    <i class="fa fa-circle-o-notch fa-spin"></i>{" "}
                                    Decoding Vin
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-3">
                                  <div class="form-group has-feedback">
                                    <label for="vehicle_year0">Year</label>
                                    <input
                                      class="form-control"
                                      name="vehicles[vehicleDetail][0][vehicle_year]"
                                      id="vehicle_year0"
                                      readonly="readonly"
                                      data-readonly="readonly"
                                    />
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class="form-group has-feedback">
                                    <label for="make0">Make</label>
                                    <input
                                      class="form-control"
                                      name="vehicles[vehicleDetail][0][make]"
                                      id="make0"
                                      readonly="readonly"
                                      data-readonly="readonly"
                                    />
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class="form-group has-feedback">
                                    <label for="model0">Model</label>
                                    <input
                                      class="form-control"
                                      name="vehicles[vehicleDetail][0][model]"
                                      id="model0"
                                      readonly="readonly"
                                      data-readonly="readonly"
                                    />
                                  </div>
                                </div>
                                <div class="col-sm-3 vehicleTypeInputOptions">
                                  <div class="form-group has-feedback vehicleTypeSelect ">
                                    <label for="vinVehicleType0">
                                      Vehicle Type{" "}
                                    </label>
                                    <select
                                      id="vinVehicleType0"
                                      name="vehicles[vehicleDetail][0][vehicle_type]"
                                      class="form-control vehicleType"
                                      required="required"
                                    >
                                      <option selected="selected"></option>
                                      <option value="ATV">ATV</option>
                                      <option value="Boat">Boat</option>
                                      <option value="Car">Car</option>
                                      <option value="Heavy Equipment">
                                        Heavy Equipment
                                      </option>
                                      <option value="Large Yacht">
                                        Large Yacht
                                      </option>
                                      <option value="Motorcycle">
                                        Motorcycle
                                      </option>
                                      <option value="Pickup">Pickup</option>
                                      <option value="RV">RV</option>
                                      <option value="SUV">SUV</option>
                                      <option value="Travel Trailer">
                                        Travel Trailer
                                      </option>
                                      <option value="Van">Van</option>
                                      <option value="Other">Other</option>
                                    </select>
                                    <span
                                      class="glyphicon form-control-feedback"
                                      aria-hidden="true"
                                    ></span>
                                    <span class="help-block with-errors text-right small"></span>
                                  </div>
                                  <div class="form-group has-feedback vehicleTypeInput  hidden">
                                    <label for="vehicleTypeOther0">
                                      Other{" "}
                                      <span class="hidden-sm">Vehicle</span>{" "}
                                      Type
                                    </label>
                                    <div class="input-group">
                                      <input
                                        id="vehicleTypeOther0"
                                        name="vehicles[vehicleDetail][0][vehicleTypeOther]"
                                        class="form-control vehicleType vehicleTypeOther"
                                        disabled="disabled"
                                        required="required"
                                      />
                                      <div class="input-group-btn">
                                        <button
                                          type="button"
                                          class="btn btn-default editVehicleType"
                                        >
                                          &nbsp;
                                          <i
                                            class="fa fa-undo"
                                            aria-hidden="true"
                                          ></i>
                                        </button>
                                      </div>
                                    </div>
                                    <span
                                      class="glyphicon form-control-feedback"
                                      aria-hidden="true"
                                    ></span>
                                    <span class="help-block with-errors text-right small"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form-group vehicleInputOption ymm0 ">
                              <div class="row">
                                <div class="col-sm-2">
                                  <div class="form-group has-feedback">
                                    <label for="ymmVehicleYear0">Year</label>
                                    <input
                                      class="form-control ymmVehicleYear"
                                      type="number"
                                      min="1900"
                                      max="2031"
                                      name="vehicles[vehicleDetail][0][vehicle_year]"
                                      id="ymmVehicleYear0"
                                      required="required"
                                    />
                                    <span
                                      class="glyphicon form-control-feedback"
                                      aria-hidden="true"
                                    ></span>
                                    <span class="help-block with-errors text-right small"></span>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class="form-group has-feedback">
                                    <label for="ymmMake0">Make</label>
                                    <input
                                      class="form-control ymmMake"
                                      type="text"
                                      name="vehicles[vehicleDetail][0][make]"
                                      id="ymmMake0"
                                      required="required"
                                      maxlength="24"
                                    />
                                    <span
                                      class="glyphicon form-control-feedback"
                                      aria-hidden="true"
                                    ></span>
                                    <span class="help-block with-errors text-right small"></span>
                                  </div>
                                </div>
                                <div class="col-sm-3">
                                  <div class="form-group has-feedback">
                                    <label for="ymmModel0">Model</label>
                                    <input
                                      class="form-control ymmModel"
                                      type="text"
                                      name="vehicles[vehicleDetail][0][model]"
                                      id="ymmModel0"
                                      required="required"
                                    />
                                    <span
                                      class="glyphicon form-control-feedback"
                                      aria-hidden="true"
                                    ></span>
                                    <span class="help-block with-errors text-right small"></span>
                                  </div>
                                </div>
                                <div class="col-sm-3 vehicleTypeInputOptions">
                                  <div class="form-group has-feedback vehicleTypeSelect ">
                                    <label for="ymmVehicleType0">
                                      Vehicle Type
                                    </label>
                                    <select
                                      id="ymmVehicleType0"
                                      name="vehicles[vehicleDetail][0][vehicle_type]"
                                      class="form-control ymmVehicleType vehicleType"
                                      required="required"
                                    >
                                      <option selected="selected"></option>
                                      <option value="ATV">ATV</option>
                                      <option value="Boat">Boat</option>
                                      <option value="Car">Car</option>
                                      <option value="Heavy Equipment">
                                        Heavy Equipment
                                      </option>
                                      <option value="Large Yacht">
                                        Large Yacht
                                      </option>
                                      <option value="Motorcycle">
                                        Motorcycle
                                      </option>
                                      <option value="Pickup">Pickup</option>
                                      <option value="RV">RV</option>
                                      <option value="SUV">SUV</option>
                                      <option value="Travel Trailer">
                                        Travel Trailer
                                      </option>
                                      <option value="Van">Van</option>
                                      <option value="Other">Other</option>
                                    </select>
                                    <span
                                      class="glyphicon form-control-feedback"
                                      aria-hidden="true"
                                    ></span>
                                    <span class="help-block with-errors text-right small"></span>
                                  </div>
                                  <div class="form-group has-feedback vehicleTypeInput hidden">
                                    <label for="vehicleTypeOther0">
                                      Other{" "}
                                      <span class="hidden-sm">Vehicle</span>{" "}
                                      Type
                                    </label>
                                    <div class="input-group">
                                      <input
                                        id="vehicleTypeOther0"
                                        name="vehicles[vehicleDetail][0][vehicleTypeOther]"
                                        class="form-control vehicleType vehicleTypeOther"
                                        disabled="disabled"
                                        required="required"
                                      />
                                      <div class="input-group-btn">
                                        <button
                                          type="button"
                                          class="btn btn-default editVehicleType"
                                        >
                                          &nbsp;
                                          <i
                                            class="fa fa-undo"
                                            aria-hidden="true"
                                          ></i>
                                        </button>
                                      </div>
                                    </div>
                                    <span
                                      class="glyphicon form-control-feedback"
                                      aria-hidden="true"
                                    ></span>
                                    <span class="help-block with-errors text-right small"></span>
                                  </div>
                                </div>
                                <div class="col-sm-1">
                                  <div class="form-group has-feedback">
                                    <label for="qty0">Qty</label>
                                    <input
                                      class="form-control vehicleQty"
                                      name="vehicles[vehicleDetail][0][qty]"
                                      id="qty0"
                                      type="number"
                                      min="1"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row additionalVehicleDetails">
                              <div class="col-sm-3">
                                <div class="form-group has-feedback">
                                  <label for="vehicleColor0">
                                    Vehicle Color
                                  </label>
                                  <input
                                    id="vehicleColor0"
                                    type="text"
                                    name="vehicles[vehicleDetail][0][color]"
                                    class="form-control"
                                  />
                                  <span
                                    class="glyphicon form-control-feedback"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="help-block with-errors text-right small"></span>
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <div class="form-group has-feedback">
                                  <label for="plate0">License Plate</label>
                                  <input
                                    id="plate0"
                                    type="text"
                                    name="vehicles[vehicleDetail][0][plate]"
                                    class="form-control"
                                    maxlength="25"
                                  />
                                  <span
                                    class="glyphicon form-control-feedback"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="help-block with-errors text-right small"></span>
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <div class="form-group has-feedback">
                                  <label for="vehicleLotNumber0">
                                    Lot Number
                                  </label>
                                  <input
                                    id="vehicleLotNumber0"
                                    type="text"
                                    name="vehicles[vehicleDetail][0][lotNumber]"
                                    class="form-control"
                                  />
                                  <span
                                    class="glyphicon form-control-feedback"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="help-block with-errors text-right small"></span>
                                </div>
                              </div>
                              <div class="col-sm-3">
                                <div class="form-group has-feedback">
                                  <label for="vehicleState0">
                                    State/Province
                                  </label>
                                  <select
                                    id="vehicleState0"
                                    name="vehicles[vehicleDetail][0][state]"
                                    class="form-control"
                                  >
                                    <option selected="selected"></option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="DC">Washington DC</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                    <option value="AB">Canada-Alberta</option>
                                    <option value="BC">
                                      Canada-British Columbia
                                    </option>
                                    <option value="MB">Canada-Manitoba</option>
                                    <option value="NB">
                                      Canada-New Brunswick
                                    </option>
                                    <option value="NL">
                                      Canada-Newfoundland
                                    </option>
                                    <option value="NT">
                                      Canada-Northwest Territories
                                    </option>
                                    <option value="NS">
                                      Canada-Nova Scotia
                                    </option>
                                    <option value="NU">Canada-Nunavut</option>
                                    <option value="ON">Canada-Ontario</option>
                                    <option value="PE">
                                      Canada-Prince Edward Island
                                    </option>
                                    <option value="QC">Canada-Quebec</option>
                                    <option value="SK">
                                      Canada-Saskatchewan
                                    </option>
                                    <option value="YT">Canada-Yukon</option>
                                  </select>
                                  <span
                                    class="glyphicon form-control-feedback"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="help-block with-errors text-right small"></span>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="checkbox-inline wideLoadDiv">
                                  <label for="wideLoadCheckbox0">
                                    <input
                                      type="checkbox"
                                      class="wideLoadCheckbox"
                                      id="wideLoadCheckbox0"
                                      name="vehicles[vehicleDetail][0][wideLoad]"
                                      value="1"
                                      disabled="disabled"
                                    />
                                    <span
                                      class="wideLoadSpan
                                                                                                       "
                                    >
                                      Wide Load
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-sm-12">
                                <div class="form-group has-feedback">
                                  <label for="vehicleAdditionalInfo0">
                                    Additional Vehicle Information
                                  </label>
                                  <textarea
                                    rows="4"
                                    maxlength="400"
                                    id="vehicleAdditionalInfo0"
                                    name="vehicles[vehicleDetail][0][vehicleAdditionalInfo]"
                                    class="form-control"
                                  />
                                  <span
                                    class="glyphicon form-control-feedback"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="help-block with-errors text-right small"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4>Pickup and Delivery Dates</h4>
                    </div>
                    <div class="panel-body">
                      <div class="form-group has-feedback">
                        <label for="dateAvailable">
                          Date Available to Ship
                        </label>
                        <div class="controls">
                          <div class="input-group">
                            <label
                              for="dateAvailable"
                              class="input-group-addon btn"
                            >
                              <span class="glyphicon glyphicon-calendar"></span>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              data-mintoday="true"
                              id="dateAvailable"
                              name="dates[available]"
                              readonly="readonly"
                              data-readonly="readonly"
                            />
                          </div>
                        </div>
                        <span class="help-block with-errors text-right small"></span>
                      </div>
                      <input
                        type="hidden"
                        class="form-control"
                        id="desireddeliverydate"
                        name="dates[desiredDelivery]"
                      />
                      <div class="dispatchOnly hidden">
                        <p class="alert alert-danger hidden dateWarning">
                          Estimated dates are the standard. Other conditions may
                          cost more. Be sure to talk with your carrier to make
                          sure they are aware of these conditions.
                        </p>
                        <div class="row">
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group has-feedback">
                              <label for="datePickupType">Date to Pickup</label>
                              <select
                                class="form-control dateType"
                                id="datePickupType"
                                name="dates[pickup][type]"
                                required="required"
                              >
                                <option selected="selected"></option>
                                <option value="Estimated">Estimated</option>
                                <option value="Exactly">Exactly</option>
                                <option value="No Earlier Than">
                                  No Earlier Than
                                </option>
                                <option value="No Later Than">
                                  No Later Than
                                </option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group has-feedback">
                              <label for="datePickup">Pickup Date</label>
                              <div class="input-group">
                                <label
                                  for="datePickup"
                                  class="input-group-addon btn"
                                >
                                  <span class="glyphicon glyphicon-calendar"></span>
                                  <span
                                    class="glyphicon form-control-feedback"
                                    aria-hidden="true"
                                  ></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="datePickup"
                                  name="dates[pickup][date]"
                                  readonly="readonly"
                                  data-readonly="readonly"
                                />
                              </div>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group has-feedback">
                              <label for="dateDeliveryType">
                                Date to Deliver
                              </label>
                              <select
                                class="form-control dateType"
                                id="dateDeliveryType"
                                name="dates[delivery][type]"
                                required="required"
                              >
                                <option selected="selected"></option>
                                <option value="Estimated">Estimated</option>
                                <option value="Exactly">Exactly</option>
                                <option value="No Earlier Than">
                                  No Earlier Than
                                </option>
                                <option value="No Later Than">
                                  No Later Than
                                </option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                          <div class="col-xs-12  col-sm-6">
                            <div class="form-group has-feedback">
                              <label for="dateDelivery">Delivery Date</label>
                              <div class="input-group">
                                <label
                                  for="dateDelivery"
                                  class="input-group-addon btn"
                                >
                                  <span class="glyphicon glyphicon-calendar"></span>
                                  <span
                                    class="glyphicon form-control-feedback"
                                    aria-hidden="true"
                                  ></span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="dateDelivery"
                                  name="dates[delivery][date]"
                                  readonly="readonly"
                                  data-readonly="readonly"
                                />
                              </div>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default pricing">
                    <div class="panel-heading">
                      <h4>Pricing and Payment</h4>
                    </div>
                    <div class="panel-body">
                      <div class="form-group has-feedback">
                        <label class="pull-left" for="minPayPrice">
                          Price to Pay Carrier{" "}
                          <span
                            class="glyphicon glyphicon-info-sign"
                            data-title="The total price for moving all vehicles in this listing."
                          ></span>
                        </label>
                        <span class="pull-right">
                          <a
                            href={{ javascript: "void(0)" }}
                            id="checkPrices"
                            class="btn btn-default"
                          >
                            Check Prices
                          </a>
                          <input
                            type="hidden"
                            id="b_t"
                            value="6122d479f37a0=6122d479f37db"
                          />
                        </span>
                        <div class="clearfix"></div>
                        <div class="input-group">
                          <span class="input-group-addon">$</span>
                          <input
                            type="number"
                            class="form-control"
                            id="minPayPrice"
                            name="price[total]"
                            required="required"
                            min="1"
                          />
                        </div>
                        <span
                          class="glyphicon form-control-feedback"
                          aria-hidden="true"
                        ></span>
                        <span class="help-block with-errors text-right small"></span>
                      </div>
                      <div class="hidden samplePrices"></div>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group has-feedback">
                            <label for="codAmount">COD/COP Amount</label>
                            <div class="input-group">
                              <span class="input-group-addon">$</span>
                              <input
                                type="number"
                                class="form-control"
                                id="codAmount"
                                name="price[cod][amount]"
                                required="required"
                              />
                            </div>
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="codcop hidden">
                            <div class="form-group has-feedback">
                              <label for="cod_payment_method">
                                COD/COP Payment Method
                              </label>
                              <select
                                class="form-control"
                                name="price[cod][method]"
                                id="cod_payment_method"
                                required="required"
                              >
                                <option selected="selected"></option>
                                <option value="Cash/Certified Funds">
                                  Cash/Certified Funds
                                </option>
                                <option value="Check">Check</option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="cod_where">COD/COP Location</label>
                              <select
                                class="form-control"
                                name="price[cod][where]"
                                id="cod_where"
                                required="required"
                              >
                                <option selected="selected"></option>
                                <option value="D">Delivery</option>
                                <option value="P">Pickup</option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group has-feedback">
                            <label for="balanceAmount">Balance Amount</label>
                            <div class="input-group">
                              <span class="input-group-addon">$</span>
                              <input
                                type="number"
                                class="form-control"
                                id="balanceAmount"
                                name="price[balance][amount]"
                                readonly="readonly"
                              />
                            </div>
                            <span
                              class="glyphicon form-control-feedback"
                              aria-hidden="true"
                            ></span>
                            <span class="help-block with-errors text-right small"></span>
                          </div>
                          <div class="balance hidden">
                            <div class="form-group has-feedback">
                              <label for="balancePaymentMethod">
                                Balance Payment Method
                              </label>
                              <select
                                class="form-control"
                                name="price[balance][method]"
                                id="balancePaymentMethod"
                                required="required"
                              >
                                <option selected="selected"></option>
                                <option value="Cash">Cash</option>
                                <option value="Certified Funds">
                                  Certified Funds
                                </option>
                                <option value="Company Check">
                                  Company Check
                                </option>
                                <option value="Comchek">Comchek</option>
                                <option value="TCH">TCH</option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="balanceTime">
                                Balance Payment Time
                              </label>
                              <select
                                class="form-control"
                                name="price[balance][when]"
                                id="balanceTime"
                                required="required"
                              >
                                <option selected="selected"></option>
                                <option value="immediately">Immediately</option>
                                <option value="2 business days (Quick Pay)">
                                  2 Business Days (Quick Pay)
                                </option>
                                <option value="5 business days">
                                  5 Business Days
                                </option>
                                <option value="10 business days">
                                  10 Business Days
                                </option>
                                <option value="15 business days">
                                  15 Business Days
                                </option>
                                <option value="30 business days">
                                  30 Business Days
                                </option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                            <div class="form-group has-feedback">
                              <label for="balanceWhere">
                                Balance Payment Terms Begin On
                              </label>
                              <select
                                class="form-control"
                                name="price[balance][where]"
                                id="balanceWhere"
                                required="required"
                              >
                                <option selected="selected"></option>
                                <option value="pickup">Pickup</option>
                                <option value="delivery">Delivery</option>
                                <option value="receiving a signed Bill of Lading">
                                  Receiving a Signed Bill of Lading
                                </option>
                              </select>
                              <span
                                class="glyphicon form-control-feedback"
                                aria-hidden="true"
                              ></span>
                              <span class="help-block with-errors text-right small"></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <p class="alert alert-danger codPayor hidden">
                            <span class="codPayorText"></span>
                          </p>
                          <p class="alert alert-danger balancePayor hidden">
                            <span class="balancePayorText"></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4>Additional Information</h4>
                    </div>
                    <div class="panel-body">
                      <div class="form-group has-feedback">
                        <label for="txtOrderId">
                          Order ID{" "}
                          <span
                            class="glyphicon glyphicon-info-sign"
                            data-title="This field is intended for you to identify your dispatched order. It can be anything you would like up to 50 characters."
                          ></span>
                        </label>
                        <input
                          class="form-control"
                          maxlength="50"
                          name="userDefined[orderId]"
                          id="txtOrderId"
                          placeholder="Order ID"
                          type="text"
                        />
                        <span
                          class="glyphicon form-control-feedback"
                          aria-hidden="true"
                        ></span>
                        <span class="help-block with-errors text-right small"></span>
                      </div>
                      <div class="form-group has-feedback">
                        <label for="additionalInfo">
                          Additional Terms{" "}
                          <span
                            class="glyphicon glyphicon-info-sign"
                            data-title="Payment terms, non-vehicle information. Up to 60 characters."
                          ></span>
                        </label>
                        <input
                          class="form-control"
                          id="additionalInfo"
                          name="userDefined[additionalInfo]"
                          maxlength="60"
                          type="text"
                        />
                        <span
                          class="glyphicon form-control-feedback"
                          aria-hidden="true"
                        ></span>
                        <span class="help-block with-errors text-right small"></span>
                      </div>
                      <div class="dispatchOnly postStore hidden">
                        <div class="form-group has-feedback">
                          <label for="dispatchInstructions">
                            Special Instructions{" "}
                            <span
                              class="glyphicon glyphicon-info-sign"
                              data-title="Central Dispatch will automatically add dispatch instructions for you regarding your pickup and delivery dates."
                            ></span>
                          </label>
                          <textarea
                            class="form-control"
                            id="dispatchInstructions"
                            name="userDefined[instructions]"
                            rows="10"
                          ></textarea>
                          <span
                            class="glyphicon form-control-feedback"
                            aria-hidden="true"
                          ></span>
                          <span class="help-block with-errors text-right small"></span>
                        </div>
                        <div class="form-group has-feedback">
                          <label for="dispatchCustomerNotes">
                            Notes from Customer
                          </label>
                          <textarea
                            class="form-control"
                            id="dispatchCustomerNotes"
                            name="userDefined[customerNotes]"
                            rows="10"
                          ></textarea>
                          <span
                            class="glyphicon form-control-feedback"
                            aria-hidden="true"
                          ></span>
                          <span class="help-block with-errors text-right small"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default dispatchOnly hidden">
                    <div class="panel-heading">
                      <h4 class="pull-left">
                        Your Contract{" "}
                        <span
                          class="glyphicon glyphicon-info-sign small"
                          data-title='The contract below will be displayed when the carrier accepts your dispatch sheet. If you would like to change your contract, you may do so by clicking "edit" before requesting this carrier.'
                        ></span>
                      </h4>
                      <div class="pull-right">
                        <a
                          class="btn btn-default btn-lg"
                          href="/protected/contract"
                        >
                          Edit
                        </a>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="panel-body">none</div>
                  </div>
                  <div class="panel panel-default finalize">
                    <div class="panel-heading">
                      <h4>Post Listing</h4>
                    </div>
                    <div class="panel-body">
                      <div class="form-group has-feedback alert alert-info">
                        <div class="checkbox-inline">
                          <label for="acknowledge">
                            <input
                              type="checkbox"
                              id="acknowledge"
                              name="acknowledge"
                              required="required"
                            />
                            <b>
                              I acknowledge and agree that once the carrier has
                              accepted my request, I will be entered into a
                              legal contract with the carrier for the transport
                              of my vehicle(s). I further acknowledge and agree
                              that Dealertrack Central Dispatch, Inc. is not a
                              party to such contract, and has no obligation or
                              liability whatsoever arising out of such contract.
                              I consent to Dealertrack Central Dispatch, Inc.
                              adding a provision to this effect in my dispatch
                              sheets. I also understand that any changes that I
                              make to the dispatch sheet after the carrier has
                              accepted my request, unless the carrier has
                              approved the change, may not be binding on the
                              carrier.
                            </b>
                          </label>
                        </div>
                        <span class="help-block with-errors text-right small"></span>
                      </div>

                      <div class="form-group text-right postOnly postStore hidden" />
                      <div class="checkbox-inline">
                        <label for="postAnother">
                          <input
                            type="checkbox"
                            id="postAnother"
                            name="postAnother"
                            value="1"
                          />
                          Post Another
                        </label>
                      </div>
                    </div>
                    <div class="form-group text-right">
                      <input
                        class="btn btn-primary"
                        id="submitListing"
                        type="submit"
                        value="Post Listing"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipper;
