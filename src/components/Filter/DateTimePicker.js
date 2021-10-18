import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import styles from "../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function BasicDateTimePicker({
  value,
  setValue,
  label,
  checked
}) {
  const classes = useStyles();
  //   const [value, setValue] = React.useState(new Date().now);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        className={classes.dateTime}
        format="yyyy-MM-dd HH:mm:ss"
        renderInput={(props) => (
          <TextField
            {...props}
            helperText={
              checked
                 ? "Ngày bắt đầu nhỏ hơn ngày kết thúc"
                 : ""
           }
            className={classes.searchDateTime}
            sx={{ width: "100%", marginTop: "1rem" }}
            type="datetime-local"
          />
        )}
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
