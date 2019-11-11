const fetchColors = () => {
  return fetch("/api/colors")
    .then(res => res.json())
    .then(res => res.results);
};

const wrapPromise = promise => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    }
  };
};

export const createResource = () => {
  return {
    colors: wrapPromise(fetchColors())
  };
};
