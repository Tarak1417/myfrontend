import { Component } from "react";
import "./index.css";

class SearchBar extends Component {
  state = {
    selectedOrderIds: [],
    searchInput: "",
    searchResult: [],
    shopifyData: [
      {
        ID: 1077621,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077622,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077623,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077624,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077625,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077626,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077627,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077628,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077629,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
      {
        ID: 1077630,
        "Shopify#": 17713,
        Date: "January 22, 2022",
        Status: "Pending",
        Customer: "Ahmed",
        Email: "ahmed@gmail.com",
        Country: "Australia",
        Shipping: "Australia",
        "API Source": "Shopify AU",
        "Order Type": "Customer",
      },
    ],
  };

  onClickSubmit = (event) => {
    event.preventDefault();
    this.setState({searchInput:""})
  };

  handleCheckboxChange = (orderId) => {
    if (this.state.selectedOrderIds.includes(orderId)) {
      this.setState((prevState) => ({
        selectedOrderIds: prevState.selectedOrderIds.filter(
          (id) => id !== orderId
        ),
      }));
    } else {
      this.setState((prevState) => ({
        selectedOrderIds: [...prevState.selectedOrderIds, orderId],
      }));
    }
  };

  onClickDispatchSelected = () => {
    this.setState({ selectedOrderIds: [] });
  };

  onClickButton = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSearch = () => {
    const { searchInput, shopifyData } = this.state;
    const searchResult = shopifyData.filter(
      (order) => order.ID.toString() === searchInput
    );
    this.setState({ shopifyData:searchResult });
  };

  render() {
    const { searchInput, searchResult, selectedOrderIds } = this.state;

    return (
      <div className="background_container">
        <div className="Heading_Container">
          <h1>Orders</h1>
          <button type="button" className="Button">
            Create New
          </button>
        </div>
        <form onSubmit={this.handleSearch}>
          <div className="SearchBar">
            <div className="SearchBarContainer">
              <div className="serchBarItems">
                <label htmlFor="Search">What are you looking for ?</label>
                <input
                  id="Search"
                  className="searchbar"
                  placeholder="🔍Search for Category, ID, Name, etc."
                  value={searchInput}
                  onChange={this.onClickButton}
                />
              </div>
              <button type="submit" className="Button">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="ContainetContainer">
          <div className="ContainetContainer_items">
            <h1>Summary</h1>
            <div>
              <label htmlFor="show">Show</label>
              <select id="show" className="searchbar-list">
                <option>All</option>
                <option>me</option>
                <option>you</option>
              </select>
            </div>
            <button
              type="button"
              className="Button"
              onClick={this.onClickDispatchSelected}
            >
              Dispatch Selected
            </button>
          </div>
          <div className="detailsContainer">
            <table className="order-table">
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Shopify#</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Shipping</th>
                  <th>API Source</th>
                  <th>Order Type</th>
                </tr>
              </thead>
              <tbody>
                {searchResult.map((order) => (
                  <tr key={order.ID}>
                    <td>
                      <input
                        type="checkbox"
                        name="selectedOrder"
                        value={order.ID}
                        checked={selectedOrderIds.includes(order.ID)}
                        onChange={() => this.handleCheckboxChange(order.ID)}
                      />
                    </td>
                    <td>{order.ID}</td>
                    <td>{order["Shopify#"]}</td>
                    <td>{order.Date}</td>
                    <td>{order.Status}</td>
                    <td>{order.Customer}</td>
                    <td>{order.Email}</td>
                    <td>{order.Country}</td>
                    <td>{order.Shipping}</td>
                    <td>{order["API Source"]}</td>
                    <td>{order["Order Type"]}</td>
                  </tr>
                ))}
                {this.state.shopifyData
                  .filter((order) => !searchResult.includes(order))
                  .map((order) => (
                    <tr key={order.ID}>
                      <td>
                        <input
                          type="checkbox"
                          name="selectedOrder"
                          value={order.ID}
                          checked={selectedOrderIds.includes(order.ID)}
                          onChange={() => this.handleCheckboxChange(order.ID)}
                        />
                      </td>
                      <td>{order.ID}</td>
                      <td>{order["Shopify#"]}</td>
                      <td>{order.Date}</td>
                      <td>{order.Status}</td>
                      <td>{order.Customer}</td>
                      <td>{order.Email}</td>
                      <td>{order.Country}</td>
                      <td>{order.Shipping}</td>
                      <td>{order["API Source"]}</td>
                      <td>{order["Order Type"]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
