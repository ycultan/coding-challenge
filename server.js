const express = require("express");

const app = express();

const physicians = [
  {
    id: 1,
    firstName: "Julius",
    lastName: "Hibbert",
    appointments: [
      {
        id: 1,
        patientName: "Sterling Archer",
        timeOfAppt: "8:00AM",
        kindOfPatient: "New Patient"
      },
      {
        id: 2,
        patientName: "Cyril Figis",
        timeOfAppt: "8:30AM",
        kindOfPatient: "Follow-up"
      },
      {
        id: 3,
        patientName: "Ray Gilette",
        timeOfAppt: "9:00AM",
        kindOfPatient: "Follow-up"
      },
      {
        id: 4,
        patientName: "Lana Kane",
        timeOfAppt: "9:30AM",
        kindOfPatient: "New Patient"
      },
      {
        id: 5,
        patientName: "Pam Poovey",
        timeOfAppt: "10:00AM",
        kindOfPatient: "New Patient"
      }
    ]
  },
  {
    id: 2,
    firstName: "Algernop",
    lastName: "Krieger",
    appointments: [
      {
        id: 1,
        patientName: "Sterling Archer",
        timeOfAppt: "8:00AM",
        kindOfPatient: "New Patient"
      },
      {
        id: 2,
        patientName: "Cyril Figis",
        timeOfAppt: "8:30AM",
        kindOfPatient: "Follow-up"
      },
      {
        id: 3,
        patientName: "Ray Gilette",
        timeOfAppt: "9:00AM",
        kindOfPatient: "Follow-up"
      }
    ]
  },
  {
    id: 3,
    firstName: "Nick",
    lastName: "Riviera",
    appointments: [
      {
        id: 1,
        patientName: "Sterling Archer",
        timeOfAppt: "8:00AM",
        kindOfPatient: "New Patient"
      },
      {
        id: 2,
        patientName: "Cyril Figis",
        timeOfAppt: "8:30AM",
        kindOfPatient: "Follow-up"
      }
    ]
  }
];

// const appointments = {
//   1: {
//     appointments: [
//       {
//         id: 1,
//         patientName: "Sterling Archer",
//         timeOfAppt: "8:00AM",
//         kindOfPatient: "New Patient"
//       },
//       {
//         id: 2,
//         patientName: "Cyril Figis",
//         timeOfAppt: "8:30AM",
//         kindOfPatient: "Follow-up"
//       },
//       {
//         id: 3,
//         patientName: "Ray Gilette",
//         timeOfAppt: "9:00AM",
//         kindOfPatient: "Follow-up"
//       },
//       {
//         id: 4,
//         patientName: "Lana Kane",
//         timeOfAppt: "9:30AM",
//         kindOfPatient: "New Patient"
//       },
//       {
//         id: 5,
//         patientName: "Pam Poovey",
//         timeOfAppt: "10:00AM",
//         kindOfPatient: "New Patient"
//       }
//     ]
//   }
// };

app.get("/physicians", (req, res) => res.json(physicians));
app.get("/appointments", (req, res) => {
  const appointments = [];
  for (let phy of physicians) {
    appointments.push(phy.appointments);
  }
  console.log("app", appointments);
  res.json(appointments);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
