import React
  from "react";
/**
 * Custom Hook to Use Local Storage
 * @param {*} itemName name to store in local storage
 * @param {*} initialValue array of initial values
 * @returns [item, saveItem]
 */
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    try {

        // If storage has been changed update the state after 2seconds...
        window.addEventListener('storage', (event) => {
          setLoading(true);
          setItem([]);
          setTimeout(() => {
            const newState = event.newValue;
            const parsedState =JSON.parse(newState);
            setItem(parsedState);
            setLoading(false);
            return;
          }, 2000);
        });

        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
        if (!localStorageItem) {
          localStorageItem.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
    } catch (error) {
      console.error(error);
      setError(false);
    }

  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      console.error(error);
      setError(false);
    }

  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };