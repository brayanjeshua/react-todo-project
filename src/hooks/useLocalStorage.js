import React
  from "react";
/**
 * Custom Hook to Use Local Storage
 * @param {*} itemName name to store in local storage
 * @param {*} initialValue array of initial values
 * @returns [item, saveItem]
 */
function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const { loading, error, item } = state;

  // ACTION CREATORS
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (parsedItem) => dispatch(
    {
      type: actionTypes.success,
      payload: parsedItem
    });

  const onSave = (item) => dispatch({
    type: actionTypes.save,
    payload: item
  });

  const onSync = () => dispatch({ type: actionTypes.sync });
  
  React.useEffect(() => {
    try {

      // Synchronize the store
        window.addEventListener('storage', (event) => {
          onSync();
          setTimeout(() => {
            const newState = event.newValue;
            const parsedItem = JSON.parse(newState);
            onSuccess(parsedItem)
            return;
          }, 1000);
        });

      const localStorageItem = localStorage.getItem(itemName);

      let parsedItem;
      if (!localStorageItem) {
        localStorageItem.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
      } else {
        parsedItem = JSON.parse(localStorageItem);
        onSuccess(parsedItem)
      }

    } catch (error) {
      console.error(error);
      onError(error)
    }

  }, [] );

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      // setItem(newItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }

  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

const initialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sync: 'SYNC'
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sync]: {
    ...state,
    loading: true,
    item: []
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };