import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

axios
  .get(`${URL}/Member`)
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
