/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
function Restaurant(props) {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  let url = `https://blooming-stream-62478.herokuapp.com/api/restaurants/${props.id}`;
  const loadDate = async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.hasOwnProperty("_id")) {
      setRestaurant(data);
    } else {
      setRestaurant(null);
    }
    setLoading(false);
    console.log(restaurant);
  };
  useEffect(() => {
    loadDate();
  }, []);
  if (loading) {
    return (
      <Card>
        <Card.Body>
          <strong>
            <Card.Title>Loading Restaurant Data...</Card.Title>
          </strong>
        </Card.Body>
      </Card>
    );
  } else {
    if (restaurant) {
      return (
        <React.Fragment>
          <Card>
            <Card.Body>
              <strong>
                <Card.Title>{restaurant.name}</Card.Title>
              </strong>
              <Card.Text>
                {restaurant.address.building} {restaurant.address.street}
              </Card.Text>
            </Card.Body>
          </Card>
          <MapContainer
            style={{ height: "400px" }}
            center={[restaurant.address.coord[1], restaurant.address.coord[0]]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[
                restaurant.address.coord[1],
                restaurant.address.coord[0],
              ]}
            ></Marker>
          </MapContainer>
          <CardDeck>
            {restaurant.grades.map((r) => (
              <Card>
                <Card.Body>
                  <strong>
                    <Card.Title>Grade: {r.grade}</Card.Title>
                  </strong>
                  <Card.Text>Completed: {r.date}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </React.Fragment>
      );
    } else {
      return (
        <Card>
          <Card.Body>
            <strong>
              <Card.Text>
                Unable to find Restaurant with id: {props.id}
              </Card.Text>
            </strong>
          </Card.Body>
        </Card>
      );
    }
  }
}
export default Restaurant;
