import React from "react";
import { Card, CardDeck } from "react-bootstrap";

function About(props) {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Title>About Author</Card.Title>
          <Card.Text>
            I don't know what to write, so here's a recipe for borscht:
          </Card.Text>
        </Card.Body>
      </Card>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Ingredients</Card.Title>
            <Card.Text>
              1 (16 ounce) package pork sausage <br /> 3 medium beets, peeled
              and shredded <br /> 3 carrots, peeled and shredded <br /> 3 medium
              baking potatoes, peeled and cubed <br /> 1 tablespoon vegetable
              oil <br /> 1 medium onion, chopped
              <br /> 1 (6 ounce) can tomato paste <br /> ¾ cup water <br /> ½
              medium head cabbage, cored and shredded <br /> 1 (8 ounce) can
              diced tomatoes, drained <br /> 3 cloves garlic, minced salt and
              pepper to taste <br /> 1 teaspoon white sugar, or to taste <br />{" "}
              ½ cup sour cream, for topping <br /> 1 tablespoon chopped fresh
              parsley for garnish
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Directions</Card.Title>
            <Card.Text>
              Step 1 <br /> Crumble the sausage (if using) into a skillet over
              medium-high heat. Cook and stir until no longer pink. Remove from
              the heat and set aside. <br /> Step 2 <br /> Fill a large pot
              halfway with water(about 2 quarts), and bring to a boil. Add the
              sausage, and cover the pot. Return to a boil. Add the beets, and
              cook until they have lost their color. Add the carrots and
              potatoes, and cook until tender, about 15 minutes. Add the
              cabbage, and the can of diced tomatoes. <br /> Step 3 <br /> Heat
              the oil in a skillet over medium heat. Add the onion, and cook
              until tender. Stir in the tomato paste and water until well
              blended. Transfer to the pot. Add the raw garlic to the soup,
              cover and turn off the heat. Let stand for 5 minutes. Taste, and
              season with salt, pepper and sugar. <br /> Step 4 <br /> Ladle
              into serving bowls, and garnish with sour cream, if desired, and
              fresh parsley.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>For the recipe thanks to:</Card.Title>
          <Card.Text>
            <a href="https://www.allrecipes.com/recipe/84450/ukrainian-red-borscht-soup">
              AllRecipes
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
export default About;
