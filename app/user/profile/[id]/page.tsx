async function Test() {
  fetch("http://localhost:3000/api/login")
    .then((res) => res.json())
    .then((data) => console.log(data));
  return <h1>User</h1>;
}

export default Test;
