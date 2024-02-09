// session storage

// session used less often than the localStorage. properties and methods are the same as localstorage but :

// 1 . session storage exits only within the current browser tab. Another tab with same page will have a different storage.
// 2 . The data survives page refresh, but not closing/opening the tab.

sessionStorage.setItem("name", "Ved")
sessionStorage.getItem("name")
sessionStorage.removeItem("name")
sessionStorage.clear()

// Storage event : When the data gets updated in localStorage or sessionStorage, storage event
// We can listen the onstorage event of window which is triggered when updates are made to the same storage from other documents.

window.onstorage = (e) => {
    alert("Chaged", localStorage.getItem(e))
    console.log(e)
}