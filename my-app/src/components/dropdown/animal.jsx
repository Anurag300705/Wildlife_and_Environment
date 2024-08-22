import Dropdown from 'react-bootstrap/Dropdown';
import './animal.css';

function Animal() {
    return (
        <Dropdown autoClose="outside">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Animal
            </Dropdown.Toggle>

            <Dropdown.Menu id="list">
                <Dropdown.Item href="/exchange">Arrival</Dropdown.Item>
                <Dropdown.Item href="/new-born">Newborn</Dropdown.Item>
                <Dropdown.Item href="/rescue">Rescue</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Animal;
