import { Button, Form } from "react-bootstrap";
import React,{useState} from "react";
import "./styles.css";
import Rating from "./Rating";

const Filter = () => {
    const [rating, setRating] = useState(1);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out Of Stocks"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      {<span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating rating={rating} onClick={(i)=>setRating(i+1)} style={{ cursor: "pointer" }} />
  </span>}

      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filter;
