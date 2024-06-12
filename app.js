
// Swal.fire({
//     title: "Welcome To Pak Wheels ",
//     text: "You clicked the button!",
//     icon: "Welcome"
//   });

swal("Welcome To Pak Wheels", "Click Ok To Continue", "info")


var cars = {

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
        freed: {
            name: "Honda Freed",
            model: 2024,
            colors: ["black", "white", "red"],
            fuelType: "Petrol",
            engine: "1500CC",
            Price: "27 - 57 Lacs",
            transmission: "Automatic"
        }
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

    },

    suzuki: {
        cultus: {
            name: "Suzuki Cultus",
            model: 1999,
            colors: ["blue", "red"]
        },
        mehran: {
            name: "Suzuki Mehran",
            model: 1998,
            colors: ["white", "black"]
        }
    }

}

console.log(cars.suzuki.mehran)