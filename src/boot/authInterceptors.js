import { LocalStorage } from "quasar";

export const setupAuthInterceptors = (api) => {
  //An api request interceptor is set up to modify requests before they are sent.
  api.interceptors.request.use((config) => {
    // Do something before request is sent
    let token = LocalStorage.getItem("token");

    if (!token) {
      let location = window.location.hash;
      let res1 = location.split("#/");
      let res2 = location.split("/");

      let allowedPath = [
        "/terms-and-condition",
        "user/login",
        "/#/login",
        "/forget-password",
        "#/forget-password",
        "#/confirm-password-reset-code",
        "#/reset-password",
      ];

      if (allowedPath.indexOf("#/" + res2[1]) === -1) {
        if (!res1 || res1[2] == "undefined") {
          router.push({
            path: "/",
            query: { redirect: window.location.hash.substring(1) },
          });
        }
      }
    } else {
      token = JSON.parse(token);
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
    }
    return config;
  });

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (401 === error?.response?.status) {
        LocalStorage.remove("token");
        router.push({
          path: "/login",
        });
      } else {
        return Promise.reject(error);
      }
    }
  );
};
