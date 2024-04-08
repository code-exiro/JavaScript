//Clase 10 - Proyecto de Social media profile

//1. User information
const userName = 'exiro'
const fullName = 'Cristiano Ronaldo'
const age = 21
const isStudent =  true

//2. Address
const address = {
    street: '1234 new york',
    city: 'smallville',
    state: 'metropolis',
    zipCode: 82631
}

//3. Hobbies 
const hobbies = ['coding', 'Reading', 'Gaming']

//4. Generating personalized bio
const personalizedBio = `
Hi, i'm ${fullName}.
i'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!.
`
//5. print the user profile and bio
console.log(personalizedBio)

console.log('-------------------------------------------------------')