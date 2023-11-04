import axios from "axios";
const base_url = import.meta.env.VITE_BASE_URL;

export const getData = async (resource) => {
  try {
    const res = await axios.get(base_url + resource);

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const postData = async (resource, body) => {
  try {
    const res = await axios.post(base_url + resource, body);

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const editData = async (resource, body) => {
  try {
    const res = await axios.patch(base_url + resource, body);

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getSymbols = async () => {
  const res = JSON.parse(localStorage.getItem("symbols"));

  if (res) {
    return res;
  }

  try {
    const res = await axios.get("https://api.apilayer.com/fixer/symbols", {
      headers: {
        apikey: import.meta.env.VITE_API_KEY,
      },
    });

    localStorage.setItem("symbols", JSON.stringify(res.data.symbols));
    return res.data.symbols;
  } catch (e) {
    console.log(e);
  }
};
export function convert(from, to, sum) {
  const res = JSON.parse(localStorage.getItem("success"));

  if (res) {
    return res;
  }

  try {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "I2fJ69M5YblR5dAxTQC9hPnPj7W6VGrI");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${sum}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>
        localStorage.setItem("success", JSON.stringify(JSON.parse(result)))
      )
      .catch((error) => console.log("error", error));
  } catch (e) {
    console.log(e);
  }
}
