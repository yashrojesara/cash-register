import * as React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    marginTop: "2em",
  },
  field: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
    marginTop: "1em",
    textAlign: "center",
  },
  message: {
    display: "flex",
    fontWeight: "bold",
    marginTop: "1em",
    justifyContent: "center",
  },
});

function CashComponent() {
  const classes = useStyles();
  const notes = [
    {
      note: 2000,
      quantity: 0,
    },
    {
      note: 500,
      quantity: 0,
    },
    {
      note: 100,
      quantity: 0,
    },
    {
      note: 50,
      quantity: 0,
    },
    {
      note: 20,
      quantity: 0,
    },
    {
      note: 10,
      quantity: 0,
    },
    {
      note: 5,
      quantity: 0,
    },
    {
      note: 2,
      quantity: 0,
    },
    {
      note: 1,
      quantity: 0,
    },
  ];

  const [bill, setBill] = React.useState(0);
  const [cash, setCash] = React.useState(0);
  const [finalChange, setFinalChange] = React.useState(notes);
  const [message, setMessage] = React.useState("");
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);

  const onClick = () => {
    setIsButtonClicked(true);
    let remainingChange = cash - bill;

    if (remainingChange === 0) {
      setMessage("No Change Required");
      return;
    } else if (remainingChange < 0) {
      setMessage("You want to wash Dishes 🍽🍽🍽");
      return;
    } else {
      setMessage();
    }

    while (remainingChange !== 0) {
      for (let i = 0; i < notes.length; i++) {
        while (remainingChange >= notes[i].note) {
          notes[i].quantity++;
          remainingChange -= notes[i].note;
        }
      }
    }
    setFinalChange(notes);
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        {" "}
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </Typography>

      <div className={classes.container}>
        <div className={classes.field}>
          <Typography style={{ marginRight: "2em" }}>Bill Amount:</Typography>
          <TextField
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            type="number"
            variant="outlined"
          />
        </div>

        <div style={{ margin: "1em 0em" }} className={classes.field}>
          <Typography style={{ marginRight: "2em" }}>Cash Given:</Typography>
          <TextField
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            type="number"
            variant="outlined"
          />
        </div>

        <Button
          onClick={onClick}
          variant="contained"
          color="primary"
          disabled={!(bill && cash)}
        >
          Check
        </Button>

        {isButtonClicked && (
          <>
            {message ? (
              <span className={classes.message}>{message}</span>
            ) : (
              <>
                <Typography style={{ marginTop: "1em", fontWeight: "bold" }}>
                  Return Change:
                </Typography>

                <TableContainer
                  component={Paper}
                  style={{ maxHeight: "250px" }}
                >
                  <Table
                    sx={{
                      maxHeight: "100px",
                      overflowX: "scroll",
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          style={{ fontWeight: "bold" }}
                        >
                          Note
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ fontWeight: "bold" }}
                        >
                          No of Notes
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {finalChange.map((row) => {
                        if (row.quantity === 0) {
                          return null;
                        }
                        return (
                          <TableRow key={row.note}>
                            <TableCell align="center">₹ {row.note}</TableCell>
                            <TableCell align="center">{row.quantity}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CashComponent;
