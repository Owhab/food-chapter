import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Meal.css";
import { Tabs } from "@mui/material";

import breakfastmeal from "../../../../src/Mealdata/breakfastmeal.json";

import lunchmeal from "../../../Mealdata/lunchmeal.json";
import BreakfastMeal from "../BreakfastMeal/BreakfastMeal";
import LunchMeal from "../LunchMeal/LunchMeal";

import dinnermeal from "../../../Mealdata/dinnermeal.json";
import DinnerMeal from "../DinnerMeal/DinnerMeal";

const Meal = () => {
  const [value, setValue] = useState("1");
  const [breakfastmeals, setBreakfastmeals] = useState({});
  const [lunchmeals, setLunchmeals] = useState({});
  const [dinnermeals, setDinnermeals] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   Fetch Breakfast Meal using UseEffect
  useEffect(() => {
    fetch(breakfastmeal)
      .then((res) => res.json())
      .then((data) => setBreakfastmeals(data));
  }, []);

  //   Fetch Lunch Meal using UseEffect
  useEffect(() => {
    fetch(lunchmeal)
      .then((res) => res.json())
      .then((data) => setLunchmeals(data));
  }, []);

  //   Fetch Dinner Meal using UseEffect
  useEffect(() => {
    fetch(dinnermeal)
      .then((res) => res.json())
      .then((data) => setDinnermeals(data));
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
                <BreakfastMeal key={bmeal.name} bmeal={bmeal}></BreakfastMeal>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="grid gap-3 grid-cols-3 ">
              {lunchmeal.map((lmeal) => (
                <LunchMeal key={lmeal.name} lmeal={lmeal}></LunchMeal>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="grid gap-3 grid-cols-3">
              {dinnermeal.map((dmeal) => (
                <DinnerMeal
                  className=""
                  key={dmeal.name}
                  dmeal={dmeal}
                ></DinnerMeal>
              ))}
            </div>
          </TabPanel>
        </TabContext>
        <button class="bg-gray-300 hover:bg-gray-400 text-white my-12 py-3 px-12 rounded-r">
          Checkout Your Food
        </button>
      </div>
    </div>
  );
};

export default Meal;
