
// Swal.fire({
//     title: "Welcome To Pak Wheels ",
//     text: "You clicked the button!",
//     icon: "Welcome"
//   });

// swal("Welcome To Pak Wheels", "Click Ok To Continue", "info")

var vehicle = {
    cars: {
        honda: {
            city: {
                name: "Honda City",
                model: 2021,
                colors: ["black", "white"],
                fuelType: "Petrol",
                engine: "1200CC",
                Price: "46 - 58 Lacs",
                transmission: "Auto & Manual"
            },
            civic: {
                name: "Honda Civic",
                model: 2022,
                colors: ["black", "white"],
                fuelType: "Petrol",
                engine: "1500CC",
                Price: "86 - 90 Lacs",
                transmission: "Auto & Manual"

            },
            vezel: {
                name: "Honda Vezel",
                model: 2024,
                colors: ["black", "white", "red"],
                fuelType: "Hybrid",
                engine: "1500CC",
                Price: "70 - 85 Lacs",
                transmission: "Automatic"
            },
        },
        toyota: {
            corolla: {
                name: "Toyota Corolla Gli",
                model: "2000",
                colors: ["white", "silver", "Black"],
                fuelType: "Petrol",
                engine: "1300CC",
                Price: "27 - 75 Lacs",
                transmission: "Automatic & Manual"
            },
            yaris: {
                name: "Toyota Yaris",
                model: "2023",
                colors: ["white", "silver", "Black"],
                fuelType: "Petrol",
                engine: "1500CC",
                Price: "44 - 63 Lacs",
                transmission: "Automatic & Manual"
            },
            revo: {
                name: "Toyota Revo",
                model: "2024",
                colors: ["white", "silver", "Black"],
                fuelType: "Diesel",
                engine: "2750CC",
                Price: "1.2 - 2.5 Crore",
                transmission: "Automatic & Manual"
            },
            fortuner: {
                name: "Toyota Fortuner",
                model: "2024",
                colors: ["white", "silver", "Black"],
                fuelType: "Diesel & Petrol",
                engine: "2800CC",
                Price: "1.9 - 2.9 Crore",
                transmission: "Automatic"
            },
            aqua: {
                name: "Toyota Aqua",
                model: "2022",
                colors: ["white", "silver", "Black"],
                fuelType: "Hbrid",
                engine: "1500CC",
                Price: "48 Lacks",
                transmission: "Automatic"
            },
            camry: {
                name: "Toyota Camry",
                model: "2024",
                colors: ["silver", "Black"],
                fuelType: "Petrol",
                engine: "1500CC",
                Price: "75 Lacks",
                transmission: "Automatic"
            },
            supra: {
                name: "Toyota Gr Supra",
                model: "2024",
                colors: ["silver", "Black"],
                fuelType: "Petrol",
                engine: "3000CC",
                Price: "1 - 1.5 crore",
                transmission: "Automatic"
            },

        },

        suzuki: {
            cultus: {
                name: "Suzuki Cultus",
                model: "2022",
                colors: ["white", "silver", "Black", "red"],
                fuelType: "Petrol",
                engine: "660CC",
                Price: "23 - 30 Lacs",
                transmission: "Automatic & Manual"
            },
            wagonR: {
                name: "Suzuki Wagon R",
                model: "2022",
                colors: ["white", "silver", "Black", "red"],
                fuelType: "Petrol",
                engine: "1000CC",
                Price: "32 - 36 Lacs",
                transmission: "Automatic"
            },
            Cultus: {
                name: "Suzuki Cultus",
                model: "2020",
                colors: ["white", "silver", "Black", "red"],
                fuelType: "Petrol",
                engine: "1000CC",
                Price: "38 - 42 Lacs",
                transmission: "Automatic & Manual"
            },
            swift: {
                name: "Suzuki Swift",
                model: "2023",
                colors: ["white", "silver", "Black",],
                fuelType: "Petrol",
                engine: "1200CC",
                Price: "38 - 42 Lacs",
                transmission: "Automatic & Manual"
            },
            bolan: {
                name: "Suzuki Bolan",
                model: "2019",
                colors: ["white"],
                fuelType: "Petrol",
                engine: "600CC",
                Price: "20 - 22 Lacs",
                transmission: "Manual"
            },
            ravi: {
                name: "Suzuki Ravi",
                model: "2015",
                colors: ["white", "silver"],
                fuelType: "Petrol",
                engine: "600CC",
                Price: "15 - 20 Lacs",
                transmission: "Manual"
            },

        },
        audi: {
            etron: {
                name: "Audi Etron",
                model: "2022",
                colors: ["white", "silver"],
                fuelType: "Charge",
                engine: "800 volt",
                Price: "4.5 - 5.5 Crore",
                transmission: "Manual & Auto"
            },
            a5: {
                name: "Audi A 5",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Charge",
                engine: "800 volt",
                Price: "3 - 4.5 Crore",
                transmission: "Manual & Auto"
            },
            q7: {
                name: "Audi Q 7",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Charge",
                engine: "800 volt",
                Price: "5 - 6.5 Crore",
                transmission: "Manual & Auto"
            },
        },
        bmw: {
            suv: {
                name: "Audi  Suv",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Charge",
                engine: "800 volt",
                Price: "4.5 - 5.5 Crore",
                transmission: "Auto"
            },
            sedan: {
                name: "Audi  Sedan",
                model: "2024",
                colors: ["white", "silver", "black"],
                fuelType: "Charge",
                engine: "800 volt",
                Price: "7 - 8.5 Crore",
                transmission: "Auto"
            },
        },
        hyndai: {
            sonata: {
                name: "Hyndai Sonata",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Petrol & Charge",
                engine: "1800CC",
                Price: "38 - 45 Lacks",
                transmission: "Auto"
            },
            tucson: {
                name: "Hyndai Tucson",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Petrol",
                engine: "1800CC",
                Price: "45 - 50 Lacks",
                transmission: "Auto"
            },
            elantra: {
                name: "Hyndai Elantra",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Petrol",
                engine: "1800CC",
                Price: "50 - 55 Lacks",
                transmission: "Auto"
            },
        }

    },
    Bikes: {
        superPower: {
            sp: {
                name: "Super Power SP 70",
                model: 2015,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "70-80 k",
                engine: "70CC"
            },
            deluxe: {
                name: "Super Power SP 70 Deluxe",
                model: 2022,
                colors: ["black", "red", "silver"],
                fuelType: "Petrol",
                price: "1.1 - 1.2 lacks",
                engine: "100CC"
            },
            scooty: {
                name: "Super Power SP 70 Scooty",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "1.1 - 1.5 lacks",
                engine: "100CC"
            },
            sultan: {
                name: "Super Power Sultan",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "5 - 5.5 lacks",
                engine: "250CC"
            },
        },
        honda: {
            cd: {
                name: "Honda CD 70",
                model: 2022,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "1 - 1.5 lacks",
                engine: "70CC"
            },
            125: {
                name: "Honda cd 125",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "2 - 2.5 lacks",
                engine: "125CC"
            },
            heavyBike: {
                name: "Honda Heavy Bike",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: " 4 - 4.5 lacks",
                engine: "150CC"
            },
        },
        suzuki: {
            gs: {
                name: "Suzuki GS 150",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: " 3- 3.5 lacks",
                engine: "150CC"
            },
            gsx: {
                name: "Suzuki GSX 125",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: " 5 - 5.5 lacks",
                engine: "150CC"
            },
        }
    }
}

var vehicles = document.getElementById("vehicle");
var company = document.getElementById("company");

vehicles.innerHTML = "<option value = ''>Select a Vehicle</option>";
company.innerHTML = "<option value = ''>Select a Company</option>";

for (key in vehicle) {
    // console.log(key)

    vehicles.innerHTML +=
        `<option value ='${key}'>${key}</option>`
}

// vehicles.addEventListener("change", getVehicle);

function getVehicle() {
   
        for (var key in vehicle[vehicles.value]) {
            company.innerHTML +=

                `<option value ='${key}'>${key}</option>`
               
        }
      
}
// company.innerHTML = ""

// getVehicle()



// function for click on bikes 
function getBikes() {




}

// function for click on Honda Car 
function getHondaCar() {




}


// get on click nav-icon







// console.log(vehicle.cars.bmw)