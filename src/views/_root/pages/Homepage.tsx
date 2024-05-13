import axios from "axios";

axios
  .get("https://localhost:7276/api/test")
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e.response.data);
  });

const Homepage = () => {
  return <div>Homepage</div>;
};

export default Homepage;
