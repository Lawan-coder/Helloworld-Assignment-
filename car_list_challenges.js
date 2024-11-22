let cars = ["toyota", "honda", "mazda", "mitsubishi", "tesla", "lexus"];
alert("First item:", cars[0]);

alert("Last item:", cars[cars.length - 1]);

cars.push("mercedes-benz");
alert("Updated array with 'mercedes-benz':", cars);

alert("All items in the array:");
for (let i = 0; i < cars.length; i++) {
  alert(cars[i]);
}
