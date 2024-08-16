
import Data_link from "./data_link";
import Table from "./table";
import './Newborn.css';

function NEW_BORN() {
  return (
    <div className="nw_brn">
      <p id="hding">New born species</p>

      <Data_link></Data_link>

      <Table></Table>

      <div id="total">Total species = 203</div>
    </div>
  );
}

export default NEW_BORN;
