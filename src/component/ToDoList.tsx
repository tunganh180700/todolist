import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

import React, { useState } from "react"

const ToDoList = () => {
  const [status, setStatus] = useState<string>()
  const handleChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value as string)
  }
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="h-[70%] w-[70%] flex gap-x-80 justify-center items-center">
        <div className="flex flex-col gap-y-[20px] w-[30%] border-2 p-5">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Basic date picker" className="w-full" />
            </LocalizationProvider>
          </div>
          <div>
            <TextField id="outlined-basic" label="Job" variant="outlined" className="w-full" />
          </div>
          <div>
            <Button variant="contained" className="w-full">
              Add
            </Button>
          </div>
        </div>
        <div className="w-[60%]">
          <table className="w-full text-left text-gray-500 dark:text-gray-400 border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  -
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Job
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  -
                </th>
                <td className="px-6 py-4">12-12-12</td>
                <td className="px-6 py-4">Malcolm Lockyer</td>
                <td className="px-6 py-4">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" className="dark:text-white">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Status"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Done</MenuItem>
                      <MenuItem value={20}>To do</MenuItem>
                      <MenuItem value={30}>Cancel</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ToDoList
