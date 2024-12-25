function init() {
    // Add an event listener to the submit button
    let submitBtn = document.getElementById('logIn');
    submitBtn.addEventListener("click", userLogIn);

    function userLogIn() {
        console.log("something great is coming soon :)")
            //שמירת הערכים
        let email = document.querySelector('#userEmail').value;
        let password = document.querySelector('#userPassword').value;
        console.log("it still working!!")
            //בדיקה אם אין תאים ריקים
        if (email === "" || password === "") {
            alert("All details must be complete");
            return;
        }
        const newUser = new User("", email, password);
        newUser.logIn();
        return;

    }
}
init();