var profile = [{
    email: "petlove@gmail.com",
    phone: "(815) 281 - 8901",
    birthday: "July 25, 2000",
    region: "Ireland",
    username: "petlover49",
    password: "iLovePets"
}]

var pets = [
    {
        id: 1,
        name: 'Tuvia',
        image: 'Images/Tuvia.jpg',
        details:{
            joined: "July 25, 2022",
            birthday: "January 1, 2020",
            species: "Dog",
            breed: "Great Pyrenese",
            weight: "50",
            weightUnit: "kg",
            height: "76",
            heightUnit: "cm"
        },
        diet: {
            meals: [
                {
                    name: "Purina One",
                    quantity: "2",
                    unit: "Cups",
                    type: "Breakfast",
                    time: "09:00",
                    nutrition: 
                        {
                            calories: "270",
                            protein: "2",
                            fat: "2",
                            carbs:"5"
                        }
                    
                }
            ]
        },
        fitness: {
            real: "7000",
            number: "5000",
            unit: "steps"
        },
        health: {
            medications: [
                {
                    name: "Cephalexin",
                    dose: "1",
                    unit: "grams",
                    time: "08:00"
                },
                {
                    name: "Enrofloxacin",
                    dose: "1",
                    unit: "grams",
                    time: "17:00"
                },
                {
                    name: "Caprofen",
                    dose: "3",
                    unit: "grams",
                    time: "17:00"
                }],
            vaccinations: [
                {
                    name: "Parvovirus",
                    date: "Oct 16, 2023",
                    vet: "Bushyparks Vets",
                    address: "60 Upper Newcastle, Galway"
                },
                {
                    name: "Rabies",
                    date: "Jul 09, 2021",
                    vet: "Bushyparks Vets",
                    address: "60 Upper Newcastle, Galway"
                }
            ],
            allergies: [
                {
                    name: "Peanuts",
                    category: "Mild",
                    date: "Dec 05 2020"
                },
                {
                    name: "Pencilin",
                    category: "Severe",
                    date: "Aug 27 2021"
                }
            ],
            conditions: [
                {
                    name: "Ringworm",
                    clinical:"Active",
                    verification: "Confirmed",
                    date: "Nov 4 2024"
                },
                {
                    name: "Arthritis",
                    clinical:"Active",
                    verification: "Confirmed",
                    date: "Jun 16 2022"
                }
            ],
            vets: [
                {
                    name: "Bushypark Vet",
                    mobile: "0893518893",
                    address: "60 Upper Newcastle, Galway"
                },
                {
                    name: "Briarhill Veterinary Clinic",
                    mobile: "0892344321",
                    address: "Briarhill Business Park, Galway"
                }
            ],
            appointments: [
                {
                    title: "Tuvia's Vet Checkup",
                    date: "Feb 23 2025",
                    time: "12:00",
                    vet: "Bushypark Vet",
                    address: "60 Upper Newcastle, Galway"
                },
                {
                    title: "Tuvia's Parvovirus Visit",
                    date: "Oct 16 2023",
                    time: "9:00",
                    vet: "Bushypark Vet",
                    address: "60 Upper Newcastle, Galway"
                },
                {
                    title: "Tuvia's Rabies Visit",
                    date: "Jul 09 2023",
                    time: "12:00",
                    vet: "Bushypark Vet",
                    address: "60 Upper Newcastle, Galway"
                }
            ]
        },

        map: 'Location 1'
    },
    {
        id: 2,
        name: 'Mala',
        image: "Images/Mala.png",
        details:{
            joined: "March 18, 2023",
            birthday: "May 4, 2019",
            species: "Cat",
            breed: "Shorthair",
            weight: "5",
            weightUnit: "kg",
            height: "24",
            heightUnit: "cm"
        },
        diet: {
            meals: [
                {
                    name: "Ivan Cat Food",
                    quantity: "2",
                    unit: "Cups",
                    type: "Lunch",
                    time: "12:00",
                    nutrition: 
                        {
                            calories: "170",
                            protein: "3",
                            fat: "2",
                            carbs:"12"
                        }
                    
                }
            ]
        },
        fitness: {
            real: "2000",
            number: "2500",
            unit: "steps"
        },
        health: {
            medications: [
                {
                    name: "Ibprofen",
                    dose: "3",
                    unit: "tablets",
                    time: "17:00"
                }],
            vaccinations: [
                

            ],
            allergies: [
                {
                    name: "Milk",
                    category: "Mild",
                    date: "Aug 17 2021"
                },

            ],
            conditions: [
                {
                    name: "Fleas",
                    clinical:"Inactive",
                    verification: "Confirmed",
                    date: "Nov 16 2022"
                },
 
            ],
            vets: [
                {
                    name: "Bushypark Vet",
                    mobile: "0893518893",
                    address: "60 Upper Newcastle, Galway"
                },
                {
                    name: "Briarhill Veterinary Clinic",
                    mobile: "0892344321",
                    address: "Briarhill Business Park, Galway"
                }
            ],
            appointments: [
                {
                    title: "Mala Vet Trip",
                    date: "Jun 214 2025",
                    time: "15:00",
                    vet: "Bushypark Vet",
                    address: "60 Upper Newcastle, Galway"
                },

            ]
        },

        map: 'Location 2'

    },
    {
        id: 3,
        name: 'Cleo',
        image: 'Images/Cleo.jpg',
        details:{
            joined: "February 29, 2022",
            birthday: "January 1, 2020",
            species: "Cat",
            breed: "Shorthair",
            weight: "8",
            weightUnit: "kg",
            height: "22",
            heightUnit: "cm"
        },
        diet: {
            meals: [
                {
                    name: "Fancy Feast",
                    quantity: "2",
                    unit: "Cups",
                    type: "Lunch",
                    time: "12:00",
                    nutrition: 
                        {
                            calories: "120",
                            protein: "4",
                            fat: "2",
                            carbs:"9"
                        }
                    
                }
            ]
        },
        fitness: {
            real: "1500",
            number: "2500",
            unit: "steps"
        },
        health: {
            medications: [
                {
                    name: "",
                    dose: "",
                    unit: "",
                    time: ""
                }],
            vaccinations: [
                {
                    name: "Grinch Shot",
                    date: "Dec 25 2024",
                    vet: "Bushypark Vet",
                    address: "60 Upper Newcastle, Galway"
                },

            ],
            allergies: [
                {
                    name: "Strawberries",
                    category: "Severe",
                    date: "Aug 17 2021"
                },

            ],
            conditions: [
                {
                    name: "Fleas",
                    clinical:"Inactive",
                    verification: "Confirmed",
                    date: "Nov 24 2022"
                },
                {
                    name: "BitesAlotOtis",
                    clinical:"Active",
                    verification: "Confirmed",
                    date: "Mar 13 2021"
                },
 
            ],
            vets: [
                {
                    name: "Bushypark Vet",
                    mobile: "0893518893",
                    address: "60 Upper Newcastle, Galway"
                },
                {
                    name: "Briarhill Veterinary Clinic",
                    mobile: "0892344321",
                    address: "Briarhill Business Park, Galway"
                }
            ],
            appointments: [
                {
                    title: "Cleo's Checkup",
                    date: "Jun 21 2025",
                    time: "15:00",
                    vet: "Bushypark Vet",
                    address: "60 Upper Newcastle, Galway"
                },

            ]
        },

        map: 'Location 3'

    }
];

// Store the profiles in local storage
localStorage.setItem('pets', JSON.stringify(pets));
localStorage.setItem('profile', JSON.stringify(profile));
