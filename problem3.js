const taxRate = 0.07;
const shippingRate = 0.05; //placeholder

let customer = {
    "first_name": null,
    "last_name": null,
    "address": {
            "address_1": null,
            "address_2": null,
            "city": null,
            "state": null,
            "zip": null
     }
};

let cart = [
	customer
];

// Add items to cart
function addItemToCart(id, name, quantity, price) {
	let item = {
  	"id": id,
    "name": name,
    "quantity": quantity,
    "price": price
  }
	cart.push(item);
}

// Update customer data
function updateCustomer(first_name, last_name, address_1, address_2, city, state, zip) {
	customer.first_name = first_name;
  customer.last_name = last_name;
  customer.address.address_1 =address_1;
  customer.address.address_2 = address_2;
  customer.address.city = city
  customer.address.state = state;
  customer.address.zip = zip;
}

// Print out customer data
function getCustomerData() {
	let result = "";
	result += "first_name: " + customer.first_name + "\n";
  result += "last_name: " + customer.last_name + "\n";
  result += "address_1: " + customer.address.address_1 + "\n";
  result += "address_2: " + customer.address.address_2 + "\n";
  result += "city: " + customer.address.city + "\n";
  result += "state: " + customer.address.state + "\n";
  result += "zip: " + customer.address.zip + "\n";
  
  return result;
}

// Print out cart items and total/subtotal
function getCart() {
  let result = "";
  let tax = 0.0;
  let shipping = 0.0;
  let subTotal = 0.0;
  let total = 0.0;
  
  for (let each in cart) {
     //console.log(cart[each]);
     if (cart[each].first_name) {
         continue;
     }
     if (cart[each].price && cart[each].quantity) {
        subTotal += (cart[each].price * cart[each].quantity);
     }
     let item = Object.entries(cart[each]);
     result += "Product " + each + " \n";
     for (let field in item) {
       result += item[field].join(": ") + "\n";
     }
   
   result += "\n";
  }

	tax = subTotal * taxRate;
  shipping = subTotal * shippingRate;
  total = subTotal + tax + shipping;
  
  tax = tax.toFixed(2);
	shipping = shipping.toFixed(2);
  subTotal = subTotal.toFixed(2);
  total = total.toFixed(2);
  
  result += "Subtotal: $" + subTotal + "\n" + "Tax: $" + tax + "\n" + "Shipping: $" + shipping + "\n" + "Total: $" + total;
  
  return result;
}


addItemToCart(1, "Table", 2, 29.25);
addItemToCart(2, "Lamp", 3, 10.00);
addItemToCart(3, "Plate", 4, 2.00);
addItemToCart(5, "Cup", 2, 3.50);

updateCustomer("Travis", "Stark", "1234", "24", "Tampa", "FL", "11111");

console.log(getCustomerData());
console.log(getCart());

addItemToCart(28, "Monitor", 2, 85);
console.log(getCart());

