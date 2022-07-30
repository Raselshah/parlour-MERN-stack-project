import React from "react";

const OrderList = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Pay With</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anika Ahmed </td>
              <td>anika@gmail.com</td>
              <td>Skin Care Treatment</td>
              <td>Creadit Card</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
