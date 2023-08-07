import styles from './Description.module.css';
import React from 'react';
let recipeTitle = "Simple Homemade Jamaican Beef Patty Recipe";
let shortDescription = "These patties are loaded with a flavorful, well-seasoned beef filling and enveloped by a tender, flaky, and buttery pastry shell. "


const RecipeAuthor = () => {
    let authorLink="https://jamaicans.com/simple-jamaican-beef-patty-recipe/";
    let authorPhoto ="https://secure.gravatar.com/avatar/b62a74f1f467e6212c7c1b9c62abf21e?s=112&d=mm&r=g";
    let authorName ="Miss G";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Jamaicans.com</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
    render (){
        return (
            <div> 
                <div>
                    <h1>{recipeTitle}</h1>
                    <p>{shortDescription}</p>
                </div>
                <RecipeAuthor />
         </div>

        );
    }
}

export default RecipeDescription;