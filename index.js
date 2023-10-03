// Add your code here
function submitData(name, email) {
const formData = {
      name: name,
      email: email
};
const configObj = {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
 },
  body: JSON.stringify(formData)
};
fetch("http://localhost:3000/users", configObj)
.then(function(response) {
return response.json();
})
      .then(function(object) {
          const h2 = document.createElement('h2');
          h2.innerHTML = object.id;
          document.body.appendChild(h2);
          console.log(object);
      })
      .catch(function(error) {
          const h3 = document.createElement('h3');
          h3.innerHTML = error.message;
          document.body.appendChild(h3);
          console.log(error.message);
      });
}
