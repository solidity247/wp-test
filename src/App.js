import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import moment from "moment";
 

const api = new WooCommerceRestApi({
  url: "https://157.245.241.86",
  consumerKey: "ck_c6131ade8b96d583ceb18104eccb45e48af427a1",
  consumerSecret: "cs_f86c62bf705fcb9782d9d960295e00d356dc5ade",
  version: "wc/v3",
  
});

function App() {
  const [orders, setOrders] = useState([]);
 
  useEffect(() => {
    fetchOrders();
  }, []);

  let fetchOrders = () => {
    api
      .get("orders", {
        per_page: 20,
      })
      .then((response) => {
        if (response.status === 200) {
          setOrders(response.data);
          console.log((response.data))
        }
      })
      .catch((error) => {});
  };

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            return (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{moment(order.date).format("DD-MM-YYYY")}</td>
                <td>{order.total}</td>
                <td>{order.billing && order.billing.first_name}</td>
                <td>{order.billing && order.billing.email}</td>
                <td>{order.billing && order.billing.address_1}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
 
export default App;