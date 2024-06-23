
// Swal.fire({
//     title: "Welcome To Pak Wheels ",
//     text: "You clicked the button!",
//     icon: "Welcome"
//   });

swal("Welcome To Pak Wheels", "Click Ok To Continue", "info")



var vehicle = {
    cars: {
        honda: {
            city: {
                name: "Honda City",
                model: 2021,
                colors: ["black", "white"],
                fuelType: "Petrol",
                engine: "1200CC",
                price: "46 - 58 Lacs",
                transmission: "Auto & Manual",
                image: '/assests/cars/honda/CIty.jpeg'
            },
            civic: {
                name: "Honda Civic",
                model: 2022,
                colors: ["black", "white"],
                fuelType: "Petrol",
                engine: "1500CC",
                price: "86 - 90 Lacs",
                transmission: "Auto & Manual",
                image: '/assests/cars/honda/Civic.jpeg'

            },
            vezel: {
                name: "Honda Vezel",
                model: 2024,
                colors: ["black", "white", "red"],
                fuelType: "Hybrid",
                engine: "1500CC",
                price: "70 - 85 Lacs",
                transmission: "Automatic",
                image: '/assests/cars/honda/Vezel.jpeg'
            },
        },
        toyota: {
            corolla: {
                name: "Toyota Corolla Gli",
                model: "2000",
                colors: ["white", "silver", "Black"],
                fuelType: "Petrol",
                engine: "1300CC",
                price: "27 - 75 Lacs",
                transmission: "Automatic & Manual",
                image: '/assests/cars/toyota/Coralla.jpg'
            },
            yaris: {
                name: "Toyota Yaris",
                model: "2023",
                colors: ["white", "silver", "Black"],
                fuelType: "Petrol",
                engine: "1500CC",
                price: "44 - 63 Lacs",
                transmission: "Automatic & Manual",
                image: '/assests/cars/toyota/yaris.jpg'
            },
            revo: {
                name: "Toyota Revo",
                model: "2024",
                colors: ["white", "silver", "Black"],
                fuelType: "Diesel",
                engine: "2750CC",
                price: "1.2 - 2.5 Crore",
                transmission: "Automatic & Manual",
                image: '/assests/cars/toyota/Revo.jpeg'
            },
            fortuner: {
                name: "Toyota Fortuner",
                model: "2024",
                colors: ["white", "silver", "Black"],
                fuelType: "Diesel & Petrol",
                engine: "2800CC",
                price: "1.9 - 2.9 Crore",
                transmission: "Automatic",
                image: '/assests/cars/toyota/fortuner.png'
            },
            camry: {
                name: "Toyota Camry",
                model: "2024",
                colors: ["silver", "Black"],
                fuelType: "Petrol",
                engine: "1500CC",
                price: "75 Lacks",
                transmission: "Automatic",
                image: '/assests/cars/toyota/Camry.jpeg'
            },
            supra: {
                name: "Toyota Gr Supra",
                model: "2024",
                colors: ["silver", "Black"],
                fuelType: "Petrol",
                engine: "3000CC",
                price: "1 - 1.5 crore",
                transmission: "Automatic",
                image: '/assests/cars/toyota/supra.jpg'
            },

        },
        suzuki: {
            cultus: {
                name: "Suzuki Cultus",
                model: "2022",
                colors: ["white", "silver", "Black", "red"],
                fuelType: "Petrol",
                engine: "660CC",
                price: "23 - 30 Lacs",
                transmission: "Automatic & Manual",
                image: '/assests/cars/suzuki/Cultus.jpeg'
            },
            wagonR: {
                name: "Suzuki Wagon R",
                model: "2022",
                colors: ["white", "silver", "Black", "red"],
                fuelType: "Petrol",
                engine: "1000CC",
                price: "32 - 36 Lacs",
                transmission: "Automatic",
                image: '/assests/cars/suzuki/wagon-r.jpg'
            },
            Alto: {
                name: "Suzuki Alto",
                model: "2020",
                colors: ["white", "silver", "Black", "red"],
                fuelType: "Petrol",
                engine: "1000CC",
                price: "38 - 42 Lacs",
                transmission: "Automatic & Manual",
                image: '/assests/cars/suzuki/alto.jpeg'
            },
            swift: {
                name: "Suzuki Swift",
                model: "2023",
                colors: ["white", "silver", "Black",],
                fuelType: "Petrol",
                engine: "1200CC",
                price: "38 - 42 Lacs",
                transmission: "Automatic & Manual",
                image: '/assests/cars/suzuki/swift.jpg'
            },
            bolan: {
                name: "Suzuki Bolan",
                model: "2019",
                colors: ["white"],
                fuelType: "Petrol",
                engine: "600CC",
                price: "20 - 22 Lacs",
                transmission: "Manual",
                image: '/assests/cars/suzuki/bolan.jpg',

            },
            ravi: {
                name: "Suzuki Ravi",
                model: "2015",
                colors: ["white", "silver"],
                fuelType: "Petrol",
                engine: "600CC",
                price: "15 - 20 Lacs",
                transmission: "Manual",
                image: '/assests/cars/suzuki/ravi.jpg'
            },

        },
        audi: {
            etron: {
                name: "Audi Etron",
                model: "2022",
                colors: ["white", "silver"],
                fuelType: "Charge",
                engine: "800 volt",
                price: "4.5 - 5.5 Crore",
                transmission: "Manual & Auto",
                image: '/assests/cars/audi/audi-etron.png'
            },
            a5: {
                name: "Audi A 5",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Charge",
                engine: "800 volt",
                price: "3 - 4.5 Crore",
                transmission: "Manual & Auto",
                image: '/assests/cars/audi/audi-A5.jpeg'
            },
            q7: {
                name: "Audi Q 7",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Charge",
                engine: "800 volt",
                price: "5 - 6.5 Crore",
                transmission: "Manual & Auto",
                image: '/assests/cars/audi/audi-Q7.jpeg'
            },
        },
        bmw: {
            suv: {
                name: "Audi  Suv",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Charge",
                engine: "800 volt",
                price: "4.5 - 5.5 Crore",
                transmission: "Auto",
                image: '/assests/cars/bmw/BMW-suv.jpeg'
            },
            sedan: {
                name: "Audi  Sedan",
                model: "2024",
                colors: ["white", "silver", "black"],
                fuelType: "Charge",
                engine: "800 volt",
                price: "7 - 8.5 Crore",
                transmission: "Auto",
                image: "/assests/cars/bmw/bmw-sedan.jpg"
            },
        },
        hyndai: {
            sonata: {
                name: "Hyndai Sonata",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Petrol & Charge",
                engine: "1800CC",
                price: "38 - 45 Lacks",
                transmission: "Auto",
                image: '/assests/cars/hyndai/hyndai-sonata.png'
            },
            elantra: {
                name: "Hyndai Elantra",
                model: "2024",
                colors: ["white", "silver"],
                fuelType: "Petrol",
                engine: "1800CC",
                price: "50 - 55 Lacks",
                transmission: "Auto",
                image: '/assests/cars/hyndai/hyndai-elantra.webp'
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
                engine: "70CC",
                image: 'assests/bikes/super-power/super-70.jpg'
            },
            deluxe: {
                name: "Super Power SP 70 Deluxe",
                model: 2022,
                colors: ["black", "red", "silver"],
                fuelType: "Petrol",
                price: "1.1 - 1.2 lacks",
                engine: "100CC",
                image: 'assests/bikes/super-power/Delux.png'
            },
            scooty: {
                name: "Super Power SP 70 Scooty",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "1.1 - 1.5 lacks",
                engine: "100CC",
                image: 'assests/bikes/super-power/Scooty-1-1.png'
            },
            sultan: {
                name: "Super Power Sultan",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "5 - 5.5 lacks",
                engine: "250CC",
                image: 'assests/bikes/super-power/Sultan-1.png'
            },
        },
        honda: {
            cd: {
                name: "Honda CD 70",
                model: 2022,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "1 - 1.5 lacks",
                engine: "70CC",
                image: '/assests/bikes/honda/honda-70.png'
            },
            125: {
                name: "Honda cd 125",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: "2 - 2.5 lacks",
                engine: "125CC",
                image: 'assests/bikes/honda/honda-125.png'
            },
            heavyBike: {
                name: "Honda Heavy Bike",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: " 4 - 4.5 lacks",
                engine: "150CC",
                image: 'assests/bikes/honda/honda-150cc.jpg'
            },
        },
        suzuki: {
            gs: {
                name: "Suzuki GS 150",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: " 3- 3.5 lacks",
                engine: "150CC",
                image: 'assests/bikes/suzuki/suzuki-gs.png'
            },
            gsx: {
                name: "Suzuki GSX 125",
                model: 2024,
                colors: ["black", "red"],
                fuelType: "Petrol",
                price: " 5 - 5.5 lacks",
                engine: "150CC",
                image: 'assests/bikes/suzuki/suzuki-gsx.png'
            },
        }
    }
}

// Getting elements 
var vehicles = document.getElementById("vehicle");
var company = document.getElementById("company");
var varient = document.getElementById("varient");
var screen1 = document.getElementById("screen-1");
var screen2 = document.getElementById("screen-2");
var screenCol1 = document.getElementById("screen-col1");
var screenCol2 = document.getElementById("screen-col2")


vehicles.innerHTML = "<option value = ''>Select a Vehicle</option>";
company.innerHTML = "<option value = ''>Select a Company</option>";
varient.innerHTML = "<option value = ''>Select a Varient</option>";



for (key in vehicle) {
    vehicles.innerHTML += `<option value ='${key}'>${key.toUpperCase()}</option>`
}

// function for getting company 
function getCompany() {
    company.innerHTML = `<option value = ''>Select a Company</option>`;
    for (var key in vehicle[vehicles.value]) {
        company.innerHTML +=
            `<option value ='${key}'> ${key.toUpperCase()} </option>`

    }
}

// function for getting varients 
function getCarVarient() {
    varient.innerHTML = `<option value = ''>Select a Varient</option>`;
    for (var key in vehicle[vehicles.value][company.value]) {
        varient.innerHTML +=
            `<option value ='${key}'> ${key.toUpperCase()} </option>`
    }
};

// function for gettiing vehicle when search btn is pressed 
function getDetail() {
    screen1.style.display = 'none';
    screenCol1.innerHTML =
        `<h1 class ='ms-5 mt-5 text-danger'>${vehicle[vehicles.value][company.value][varient.value].name}</h1>
         <img width = 80% src = ${vehicle[vehicles.value][company.value][varient.value].image} alt='image'>`

    screenCol2.innerHTML =
        `
        <h1 class='text-start mt-5 text-danger'>Specifications</h1>
        <p class=' mt-3 text-dark fs-4'>Name : ${vehicle[vehicles.value][company.value][varient.value].name}</p>
        <p class=' text-dark fs-4'>Model : ${vehicle[vehicles.value][company.value][varient.value].model}</p>
         <p class=' text-dark fs-4'> Colors : ${vehicle[vehicles.value][company.value][varient.value].colors}</p>
         <p class=' text-dark fs-4'> Fuel Type : ${vehicle[vehicles.value][company.value][varient.value].fuelType}</p>
          <p class=' text-dark fs-4'> Engine :${vehicle[vehicles.value][company.value][varient.value].engine}</p>
           <p class=' text-dark fs-4'> Transmission : ${vehicle[vehicles.value][company.value][varient.value].transmission}</p>
            <p class=' text-dark fs-4'> price : ${vehicle[vehicles.value][company.value][varient.value].price}</p>
         `
}

