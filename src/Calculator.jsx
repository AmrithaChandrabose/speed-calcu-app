import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function Calculator() {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [speed, setSpeed] = useState("");

  const calculateSpeed = (e) => {
    e.preventDefault();

    if (distance && time) {
      setSpeed((Number(distance) / Number(time)));
    }
  };

  return (
    <div>
      <div
        className="m-4 justify-content-center text-center p-4 shadow rounded bg-info" style={{ width: "400px" }} >
        <Form >
          <Form.Control type="number" placeholder="Distance" className="mb-3" value={distance} onChange={(e) => setDistance(e.target.value)} />
          <Form.Control type="number" placeholder="Time" className="mb-3" value={time} onChange={(e) => setTime(e.target.value)} />
          <Form.Control type="text"  variant="info" placeholder="Speed" className="mb-3" value={speed} readOnly/>

          <div className="d-flex gap-2 mt-3">
            <Button onClick={calculateSpeed} type="submit" variant="dark" className="w-100">Calculate Speed </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Calculator;