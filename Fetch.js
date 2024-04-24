// async function apiCall()
// {
//     await fetch("https://goweather.herokuapp.com/weather/Curitiba")
//     .then((response)=>response.json())
//     .then((data)=>console.log(`Temperature : ${data.temperature}, Wind : ${data.wind}, Description : ${data.description}`));    
// }

// apiCall();


// async function fetchData() {
//     try {
//       // Use the Fetch API to make a GET request to a URL
//       const response = await fetch('C:\Users\kumar\OneDrive\Desktop\PROJECTS\WEB_DEV\db.json');
      
//       // Check if the response status is OK (200)
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       // Parse the response JSON data
//       const data = await response.json();
      
//       // You can now work with the 'data' here
//       console.log(data);
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   }
  
//   // Call the fetchData function
//   fetchData();

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(`${json.title} || ${json.brand} || ${json.category}`))

async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data); // Use the data received from the API
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function to fetch data
  fetchData();