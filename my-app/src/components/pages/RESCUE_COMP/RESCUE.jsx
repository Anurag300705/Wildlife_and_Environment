import Cols_hding from "./rescue_cols_hding";
import Tab_body from "./rescue_table_body";
import "./App.css";

function Rescue() {
  return (
    <div>
      <div className="hding">Rescued Animals</div>

      <table className="data_table">
        <thead>
          <Cols_hding></Cols_hding>
        </thead>

        <Tab_body></Tab_body>
      </table>
    </div>
  );
}

export default Rescue;
