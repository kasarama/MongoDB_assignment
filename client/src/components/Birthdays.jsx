import facade from "../facade";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const init_birthday = {
  person: { name: "Magdalena" },
  date: "14-04-1988",
  gifts: ["Sponge", "Raspberry Pi"],
};


export default function Birthdays() {
  const [birthdays, setBirthdays] = useState(map_birthdays([init_birthday]));

  function map_birthdays(arr) {
    return arr.map((b) => {
      return (
        <tr key={"tr_" + b.id}>
          <td>{arr.indexOf(b) + 1}</td>
          <td>{b.date}</td>
          <td>{b.person.name}</td>
          <td>{b.gifts.join(", ")}</td>
        </tr>
      );
    });
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Person</th>
          <th>Gift List</th>
        </tr>
      </thead>
      <tbody>{birthdays}</tbody>
    </Table>
  );
}
