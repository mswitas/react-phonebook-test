import { useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { setFilter } from "../../redux/filter/slice";
import { TextField } from "@mui/material";



export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <div className={css.filter}>
      <span>Find contacts by</span>
      <TextField label="name" variant="standard" type="text" id="filter" name="filter" onChange={handleFilter} />
    </div>
  );
}

