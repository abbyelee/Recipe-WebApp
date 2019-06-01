import React from 'react';
import {Link} from "react-router-dom";
const API_KEY = "5e1f6a24745f7a035ef173d68573b199";

class Recipe extends React.Component {
    state={
        activeRecipe:[]
    }
    componentDidMount= async()=>{
        const title=this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        console.log("workingRecipe page!!!");

        const res = await req.json();
        console.log(res.recipes[0]);
        this.setState({activeRecipe: res.recipes[0]});
        console.log(this.state.activeRecipe);
    }
    render() {
        const recipe=this.state.activeRecipe;
        return (
            <div className="container">
                {
                    this.state.activeRecipe.length !==0 &&
                    <div className="App">
                        <header className="App-header">
                            <h1 className="App-title">{recipe.title}</h1>
                        </header>
                    <div className="active-recipe">
                        <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                        <h4 className="active-recipe__publisher" style={{marginTop:"2rem"}}>Publisher:<span>{recipe.publisher}</span></h4>
                            <p className="active-recipe__website">Website:<span><a href={recipe.source_url}>{recipe.source_url}</a></span></p>
                        <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
                    </div>
                    </div>
                }
            
            </div>
        );
    }
}
export default Recipe;