interface Records {
  id: number;
  shiftName: string;
  minStart: string;
  startTime: string;
  maxStart: string;
  minEnd: string;
  endTime: string;
  maxEnd: string;
  breakTime: string;
  status: string;
}

const records: Records[] = [
  {
    id: 1,
    shiftName: "10'o clock Shift",
    minStart: "09:00:00 am",
    startTime: "10:00:00 am",
    maxStart: "10:30:00 am",
    minEnd: "6:00:00 pm",
    endTime: "07:00:00pm",
    maxEnd: "07:00:00 pm",
    breakTime: "30 mins",
    status: "Active",
  },
  {
    id: 2,
    shiftName: "10:30 shift",
    minStart: "10:00:00 am",
    startTime: "10:30:00 am",
    maxStart: "11:00:00 am",
    minEnd: "6:30:00 pm",
    endTime: "06:30:00pm",
    maxEnd: "07:30:00 pm",
    breakTime: "45 mins",
    status: "Active",
  },
  {
    id: 3,
    shiftName: "Daily Rout",
    minStart: "06:00:00 am",
    startTime: "06:30:00 am",
    maxStart: "11:00:00 am",
    minEnd: "03:00:00 pm",
    endTime: "03:30:00pm",
    maxEnd: "04:00:00 pm",
    breakTime: "60 mins",
    status: "Active",
  },
];

export { records };
