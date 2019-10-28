/*
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

let house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: ()=>{alert("Beep")}
        }
    }
}


/******** Answers Section ********/
//CONSOLE.LOG() was added in all answers for my reference
// (1) Add a dining table to the living room.
house.areas.livingRoom.items.push("dining table")
console.log(house.areas.livingRoom.items)
// (2) Add a stove to the kitchen.
house.areas.kitchen.items.push("stove")
console.log(house.areas.kitchen.items)
// (3) Remove the washing machine from bedroomOne.
house.areas.bedroomOne.items.pop()
console.log(house.areas.bedroomOne.items)

// (4) Change the color of the car to blue.
house.garage.car.color = "blue"
console.log(house.garage.car.color)
// (5) Add a another car to the garage with a honk function.
house.garage.carTwo ={
color: 'silver',
wheels: 4,
honk: ()=>{alert("Beep")}
}

// (6) Make the new car honk.
house.garage.carTwo.honk=()=>{alert("PEEE")}
//console.log(house.garage.carTwo.honk); In Browser
// (7) Change the 'broken chair' in the kitchen to 'new chair'.
splitarray=house.areas.kitchen.items[1].split(" ")
newjoin = ['new',splitarray[1]].join(" ")
console.log(newjoin)
// (8) If the house has a garden, console.log the name of the flower.
console.log(house.garden[1])
// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.
numberOfAreas=Object.keys(house.areas).length
console.log('NumberofAreas = ',numberOfAreas)
// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.

array=Object.values(house.areas.bedroomOne)
array=array[0]
let bedone=0

for (i=0;i<array.length;i++)
{
    if(array[i]=='bed')
    {
        bedone++;
    }
}
array=Object.values(house.areas.bedroomTwo)
array=array[0]
let bedtwo=0

for (i=0;i<array.length;i++)
{
    if(array[i]=='bed')
    {
        bedtwo++;
    }
}
console.log("Total bed = ",bedone+bedtwo)
