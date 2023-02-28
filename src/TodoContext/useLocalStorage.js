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
        setTimeout(() => {
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
        }, 1000)
      } catch (error) {
        console.error(error);
        setError(false);
      }
  
  
  
    });
  
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