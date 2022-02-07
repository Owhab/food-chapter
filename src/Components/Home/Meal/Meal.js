import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Meal.css";
import { Tabs } from "@mui/material";

import breakfastmeal from "../../../../src/Mealdata/breakfastmeal.json";
import SingleMeal from "../SingleMeal/SingleMeal";

const Meal = () => {
  const [value, setValue] = useState("1");
  const [breakfastmeals, setBreakfastmeals] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(breakfastmeal)
      .then((res) => res.json())
      .then((data) => setBreakfastmeals(data));
  }, []);

  return (
    <div>
      <div className="meal-section text-center">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <div className="text-center">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label=" tabs example"
                centered
              >
                <Tab label="Break fast" value="1" />
                <Tab label="Lunch" value="2" />
                <Tab label="Dinner" value="3" />
              </Tabs>
            </div>
          </Box>
          <TabPanel className="" value="1">
            <div className="grid gap-3 grid-cols-3">
              {breakfastmeal.map((bmeal) => (
                <SingleMeal key={bmeal.name} bmeal={bmeal}></SingleMeal>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Meal;
