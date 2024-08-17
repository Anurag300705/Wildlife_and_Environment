import "./App.css";
import Cols_hding from "./cols_hding";
import Tab_body from "./table_body";

function Exchange() {
  return (
    <div>
      <p id="hding">New Animals Arrived</p>
      <table className="data_table">
        <thead>
          <Cols_hding></Cols_hding>
        </thead>

        <Tab_body></Tab_body>
      </table>
    </div>
  );
}

export default Exchange;
