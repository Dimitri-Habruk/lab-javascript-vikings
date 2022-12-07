// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}
// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super (health, strength)
        this.name = name
    }

    receiveDamage(damage){

        this.health = this.health - damage
        
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
                } else if(this.health<=0) {
            return `${this.name} has died in act of combat`
        }

    }
    battleCry(){
        return `Odin Owns You All!`

    }

}

// Saxon
class Saxon extends Soldier{
    
    receiveDamage(damage){
        this.health = this.health - damage

        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
                } else if(this.health<=0) {
            return `A Saxon has died in combat`
        }

    }
}

// War
class War {
    
    constructor(){
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(Viking){
       this.vikingArmy.push(Viking) 
    }
    vikingAttack(){
        const randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        const randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())

        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]

        Saxon.receiveDamage(Viking.strength())

    
    }

    addSaxon(Saxon){
       this.saxonArmy.push(Saxon) 

    }
    // saxonAttack()
    // showStatus()


}
const war = new War()
const viking = new Viking('Thor', 100, 5)
const vikingODin = new Viking('Thor', 100, 5)
const vikingOIvar = new Viking('Thor', 100, 5)


const saxon = new Saxon('Xenos', 100, 5)
const saxon2 = new Saxon('Xenos', 100, 5)
const saxon3 = new Saxon('Xenos', 100, 5)

war.addViking(viking)
war.addViking(viking)
war.addViking(viking)

war.addViking(viking)

console.log(`vikings: ${war.vikingArmy}`)