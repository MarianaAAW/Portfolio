function active_link(n) {
    if (n === 1) {

        let A1 = document.getElementById("A1")
        let A2 = document.getElementById("A2")
        let A3 = document.getElementById("A3")


        A1.className += " active"
        A2.className = "nav-link"
        A3.className = "nav-link"

    }
    if (n === 2) {
        let A1 = document.getElementById("A1")
        let A2 = document.getElementById("A2")
        let A3 = document.getElementById("A3")

        A1.className = "nav-link"
        A2.className += " active"
        A3.className = "nav-link"

    } if (n === 3) {
        let A1 = document.getElementById("A1")
        let A2 = document.getElementById("A2")
        let A3 = document.getElementById("A3")

        A1.className = "nav-link"
        A2.className = "nav-link"
        A3.className += " active"

    }
}