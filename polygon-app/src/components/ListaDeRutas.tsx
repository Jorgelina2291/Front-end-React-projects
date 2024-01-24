import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Typography, Divider } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded";

const rutas = [
  {
    id: "RD1318",
    name: " Area 1 Ruta 1",
    percentage: "68%",
  },
  {
    id: "RD3338",
    name: " Area 1 Ruta 2",
    percentage: "23%",
  },
  {
    id: "RD457",
    name: " Area 2 Ruta 3",
    percentage: "66%",
  },
  {
    id: "RD1356",
    name: " Area 2 Ruta 4",
    percentage: "11%",
  },
];

export default function CheckboxList() {
  const [checked, setChecked] = React.useState<string[]>([]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const SelectAll = () => {
    const selectedRutas: string[] = [];

    rutas.forEach((ruta) => {
      selectedRutas.push(ruta.id);
    });

    if (rutas.length == checked.length) {
      setChecked([]);
    } else {
      setChecked(selectedRutas);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12} p={2}>
          <Typography>Rutas</Typography>
        </Grid>

        <Grid paddingLeft={2} xs={8}>
          <OutlinedInput
            type={"text"}
            placeholder="Ingrese el numero de ruta"
            inputProps={{
              style: {
                paddingTop: 4,
                paddingBottom: 4,
                fontSize: 15,
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">{<SearchIcon />}</IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          xs={2}
        >
          <CalendarMonthIcon />
        </Grid>
        <Grid
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          xs={2}
        >
          <MoreVertIcon />
        </Grid>
      </Grid>

      <Grid container>
        <ListItemButton
          style={{
            paddingLeft: 4,
            paddingTop: 3,
            paddingBottom: 3,
          }}
          role={undefined}
          onClick={SelectAll}
        >
          <Grid xs={2}>
            <Checkbox />
          </Grid>
          <Grid xs={10} alignItems="center" display="flex" paddingLeft={1}>
            <Typography>Seleccionar</Typography>
          </Grid>
        </ListItemButton>

        <Grid xs={12}>
          <Divider />
        </Grid>
      </Grid>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {rutas.map((ruta) => {
          const labelId = `checkbox-list-label-${ruta.id}`;

          return (
            <ListItem
              key={ruta.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments"></IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(ruta.id)}
                style={{ paddingRight: 0 }}
              >
                <Grid container>
                  <Grid xs={2}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(ruta.id) !== -1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                  </Grid>
                  <Grid
                    justifyContent={"center"}
                    display={"flex"}
                    alignItems={"center"}
                    xs={6}
                  >
                    <Grid direction="column" spacing={0} columnSpacing={0}>
                      <Typography variant="caption">{ruta.id}</Typography>
                      <Typography
                        fontWeight={"bold"}
                        style={{ lineHeight: "0.9" }}
                      >
                        {ruta.name}
                      </Typography>
                      <Grid
                        justifyContent={"left"}
                        display={"flex"}
                        alignItems={"center"}
                      >
                        <LinearScaleRoundedIcon style={{ color: "#2EB476" }} />
                        <Typography variant="caption" pr={1}>
                          84
                        </Typography>

                        <LinearScaleRoundedIcon style={{ color: "#CE2727" }} />
                        <Typography variant="caption" pr={1}>
                          23
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="caption" pl={1}>
                          107
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    xs={4}
                    justifyContent={"center"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Divider
                      style={{
                        marginRight: 10,
                        marginTop: 20,
                        marginBottom: 20,
                      }}
                      orientation="vertical"
                      flexItem
                    />
                    <Typography fontWeight={"bold"}>
                      {ruta.percentage}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
