import React, { Component } from 'react';
import './App.css';

class BurgerStack extends Component {

  constructor( props ){
    super( props );

    this.state = {

      ingredients : [
        {name: 'Kaiser Bun',       color: 'saddlebrown' },
        {name: 'Sesame Bun',       color: 'sandybrown'  },
        {name: 'Gluten Free Bun',  color: 'peru'        },
        {name: 'Lettuce Wrap',     color: 'olivedrab'   },
        {name: 'Beef Patty',       color: '#3F250B'     },
        {name: 'Soy Patty',        color: '#3F250B'     },
        {name: 'Black Bean Patty', color: '#3F250B'     },
        {name: 'Chicken Patty',    color: 'burlywood'   },
        {name: 'Lettuce',          color: 'lawngreen'   },
        {name: 'Tomato',           color: 'tomato'      },
        {name: 'Bacon',            color: 'maroon'      },
        {name: 'Onion',            color: 'lightyellow' }
      ],
      stack       : []
    }

    this.addIngredient = this.addIngredient.bind( this );
    this.clearBurger = this.clearBurger.bind( this );
  }

  addIngredient = ( ingredient ) => {

    // console.log( ingredient );
    // console.log( this.state.stack );

    let newstack = this.state.stack;
    newstack.unshift( ingredient );

    this.setState({

      stack : newstack
    })
  }

  clearBurger = () => {

    this.setState({

      stack : []
    })
  }

  render() {

    return (
      <div className="App">

        <div className="ingredients-bar">

          { this.state.ingredients.map( ( ingredient, index ) => {

            return <div
              key={ index }
              className={ `ingredient-wrap ${ ingredient.color }` }
              onClick={ () => this.addIngredient( ingredient ) }
              >

              { ingredient.name }
            </div>;
          })}
        </div>

        <div className="burger-outer-wrapper">

          <div className="condiment bun"></div>
          { this.state.stack.map( function( ingredient, index ){

            return <div key={ index } style={{ backgroundColor: ingredient.color }} className={ `condiment` }>{ ingredient.name }</div>;
          })}
          <div className="condiment bun"></div>

          <button className="clear-button" onClick={ this.clearBurger }>Clear Burger</button>
        </div>

      </div>
    );
  }
}

export default BurgerStack;
