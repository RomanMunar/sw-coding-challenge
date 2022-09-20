import { fetcher } from ".";

export const getNotifications = () => {
  return fetcher(
    "https://sw-coding-challenge.herokuapp.com/api/v1/notifications"
  ).then((res) => res.json());
};
