import facade from "../facade";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function AddBirthday() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Persons name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" placeholder="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-muted">Choose some gifts</Form.Text>
        <Form.Check type="checkbox" label="Personalized Tree Wood Carving" />
        <Form.Check type="checkbox" label="Photo Print" />
        <Form.Check type="checkbox" label="Flower Glass" />
        <Form.Check type="checkbox" label="Banana-Saving Hats" />
        <Form.Check type="checkbox" label="Master Theorem Book of Puzzles" />
        <Form.Check type="checkbox" label="Ultimate Birthday Gift Set" />
        <Form.Check type="checkbox" label="Creative Thinking Journal" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
