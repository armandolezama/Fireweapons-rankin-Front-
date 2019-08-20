import React, {Component} from 'react';
import WeaponCard from './WeaponCard'

class WeaponsContainer extends Component {
    constructor(){
        super()
        this.state = {
            weapons: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/api/weapons')
          .then(response => response.json())
          .then(response => {
            this.setState({
              weapons: response.weapons
            })
            console.log(response)
          })
      }

      render() {
        return(
          <section>
            <div>
              {this.state.weapons.map(weapons => {
                return (
                  <WeaponCard
                    name={weapons.name}
                    type={weapons.type}
                    model={weapons.model}
                    caliber={weapons.caliber}
                    clipsize={weapons.clipsize}
                  />
                )
              })}
            </div>
          </section>
        )
      }
}

export default WeaponsContainer