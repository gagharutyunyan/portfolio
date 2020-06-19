import { jsPageBlanks } from "../data/data";

export function fetchReactPageData() {
  let dataPromise = fetchData();
  return {
    reactPageData: wrapPromise(dataPromise)
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
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
      } else if (status === "success") {
        return result;
      }
    }
  };
}

function fetchData() {
  return new Promise(resolve => {
    resolve({
      jsPageBlanks
    });
  });
}
