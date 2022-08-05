import CashComponent from "./Components/CashComponent";
import Header from "./Components/Header";
import { makeStyles } from "@mui/styles";
import Footer from "./Components/Footer";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <CashComponent />
      <Footer />
    </div>
  );
}

export default App;
