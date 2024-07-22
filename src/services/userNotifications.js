import toast from "react-hot-toast";

const toastFulfilledConfig = {
  iconTheme: {
    primary: "var(--accent-color)",
    secondary: "var(--primary-white)",
  },
};

const toastPromiseConfig = {
  success: {
    duration: 3000,
    iconTheme: {
      primary: "var(--accent-color)",
      secondary: "var(--primary-white)",
    },
  },
};

export const toastFulfilled = (notification) =>
  toast.success(notification, toastFulfilledConfig);

export const toastRejected = (notification) => toast.error(notification);

export const toastPromise = (promise, userAction) => {
  if (userAction === "register") {
    toast.promise(
      promise,
      {
        loading: "Creating account...",
        success: "You have successfully signed up !",
        error: "Something went wrong. Let's try again...",
      },
      toastPromiseConfig
    );
  } else {
    toast.promise(
      promise,
      {
        loading: "Loading...",
        success: "You have successfully signed in !",
        error: "Something went wrong. Let's try again...",
      },
      toastPromiseConfig
    );
  }
};
