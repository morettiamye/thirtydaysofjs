const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    // Check if shift key is down
    // Check that they are checking the box
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;   
                console.log("checking")         
            }
            
            if (inBetween) {
                checkbox.checked = true;
            };
        });
    };
    lastChecked = this;
}; 

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
