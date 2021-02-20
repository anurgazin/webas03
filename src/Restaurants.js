import React from "react";
import queryString from "query-string";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Pagination, Table, Card } from "react-bootstrap";
function Restaurants(props) {
  const query = props.query ? queryString.parse(props.query) : null;
  const perPage = 10;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurant] = useState(null);
  const [page, setPage] = useState(1);
  let url = query
    ? `https://blooming-stream-62478.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}&borough=${query.borough}`
    : `https://blooming-stream-62478.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}`;
  const loadDate = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setRestaurant(data);
    setLoading(false);
    console.log(restaurants);
  };
  function previousPage() {
    if (page > 1) {
      const p = page - 1;
      setPage(p);
    }
  }
  function nextPage() {
    const p = page + 1;
    setPage(p);
  }
  useEffect(() => {
    loadDate();
  }, [page, props.query]);
  if (loading) {
    return (
      <Card>
        <Card.Body>
          <strong>
            <Card.Title>Loading Restaurants...</Card.Title>
          </strong>
        </Card.Body>
      </Card>
    );
  } else {
    if (!restaurants) {
      return (
        <Card>
          <Card.Body>
            <strong>
              <Card.Title>No restaurants found</Card.Title>
            </strong>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <React.Fragment>
          <Card>
            <Card.Body>
                <Card.Title>Restaurant List</Card.Title>
              <Card.Text>
                Full list of restaurants. Optionally sorted by borough
              </Card.Text>
            </Card.Body>
          </Card>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Borough</th>
                <th>Cuisine</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((r, _id) => (
                <tr
                  key={_id}
                  onClick={() => {
                    history.push(`/restaurants/${r._id}`);
                  }}
                >
                  <td>{r.name}</td>
                  <td>
                    {r.address.building} {r.address.street}
                  </td>
                  <td>{r.borough}</td>
                  <td>{r.cuisine}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            <Pagination.Prev onClick={previousPage} />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={nextPage} />
          </Pagination>
        </React.Fragment>
      );
    }
  }
}
export default Restaurants;
