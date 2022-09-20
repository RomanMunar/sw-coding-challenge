let token = import.meta.env.VITE_AUTH_TOKEN;

// TODO: Add a root error boundary to show an overlay with the error message.
if (!token) {
  throw new Error("Create a clone of .env.example to a local .env file");
}

const Authorization = `Bearer ${token}`;

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(args[0], {
    ...args[1],
    headers: {
      "Content-Type": "application/json",
      Authorization,
      ...args[1]?.headers,
    },
  });
