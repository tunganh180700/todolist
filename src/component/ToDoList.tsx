import { TextField } from "@mui/material"
import React from "react"

const ToDoList = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", backgroundColor: "blue" }}>
        <div className="form" style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <div>
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
          <div>
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
          <div>
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ToDoList
