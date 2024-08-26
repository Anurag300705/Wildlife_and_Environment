
import Data_link from "./data_link";
import Table from "./table";
import './Newborn.css';
import Form from "./form";

function NEW_BORN() {
  return (
    <div className="nw_brn">
      <p className="hding">New born species</p>

      <Data_link></Data_link>

      <Table></Table>
      <Form></Form>
    </div>
  );
}

export default NEW_BORN;
