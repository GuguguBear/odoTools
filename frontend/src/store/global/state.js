export default function () {
  return {
    // backend: "http://127.0.0.1:12347",
    backend: "",
    database: {
      config: "config.json",
      shop: "shop.json",
    },
    loginin: false,
    user: {
      family: "",
      cash: 0,
      access_level: 0,
      avatar: [
        {
          name: "",
          level: 0,
          types: "",
          pearl: 0,
        },
      ],
    },
  };
}
