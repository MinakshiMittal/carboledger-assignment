import { tableData } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => {
              return (
                <tr tabIndex={data.id} key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.age}</td>
                  <td>{data.phone}</td>
                  <td>{data.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
