import { useState, useEffect } from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealIteam from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      const response = await fetch(
        "https://react-http-25951-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Someting went wrong");
      }

      const data = await response.json();
      const meals = [];
      for (const key in data) {
        meals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }
      setMeals(meals);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <div
          className="spinner-border"
          role="status"
          style={{ color: "#8a2b06" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <section className="text-center text-danger mt-3">{error}</section>;
  }

  const mealsList = meals.map((meal) => (
    <MealIteam
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      {!error && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
