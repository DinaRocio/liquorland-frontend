async function APIFetch(...params) {
  try {
    const response = await fetch(...params);

    if (response.status === 204) return true;

    let parsed = await response.json();

    if (response.ok) return parsed;

    /** For API errors */
    throw new Error(JSON.stringify(parsed));
  } catch ({ message }) {
    /** For network errors */
    if (message.match(/^[a-z]/i))
      throw new Error(JSON.stringify({ unexpected: message }));

    /** Return all errors */
    throw new Error(message);
  }
}

export { APIFetch };
