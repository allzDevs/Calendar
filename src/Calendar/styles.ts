export default {
    container: {
      display: "flex",
      alignItems: "center",
      border: "1px solid",
      maxWidth: "350px"
    },
    header: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    namesOfWeek: {
      display: "flex",
      alignItems: "center",
      height: "30px"
    },
    nameOfWeek: {
      display: "flex",      
      minWidth: "calc(350px / 7)",
      alignItems: "center",
      justifyContent: "center",
    },
    daysOfMonth: {
      display: "flex",
      justifyContent: "center"
    },
    dayOfMonth: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid",
      minWidth: "calc(350px / 7 )"
    }
  }