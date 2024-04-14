import React from 'react'

function Congsignmenttable() {
  return (
    <div className="container mt-4">
        <h2>Consignment Tracking</h2>
        <table className="table">
            <thead>
            <tr>
                <th>Consignment Number</th>
                <th>Goods Type</th>
                <th>Weight</th>
                <th>Sender Full Name</th>
                <th>Sender Contact</th>
                <th>Sender Address</th>
                <th>Receiver Full Name</th>
                <th>Receiver Contact</th>
                <th>Receiver Address</th>
                <th>Received</th>
                <th>Out for Delivery</th>
                <th>Estimated Delivery</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td id="consignment-number">123456</td>
                <td id="goods-type">Electronics</td>
                <td id="weight">5 kg</td>
                <td id="sender-full-name">John Doe</td>
                <td id="sender-contact">123-456-7890</td>
                <td id="sender-address">123 Main St, City</td>
                <td id="receiver-full-name">Jane Doe</td>
                <td id="receiver-contact">987-654-3210</td>
                <td id="receiver-address">456 Elm St, Town</td>
                <td id="received">Yes</td>
                <td id="out-for-delivery">Yes</td>
                <td id="estimated-delivery">April 15, 2024</td>
            </tr>
            </tbody>
        </table>
  </div>
  )
}

export default Congsignmenttable