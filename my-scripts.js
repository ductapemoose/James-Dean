//set count

if (localStorage.getItem("count") == null) {
	localStorage.setItem("count",0)

}

// update
function update () {
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update ()

//add one to count
function plusOne() {
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
	update()
}

//reset count

function reset() {
	if (confirm("You sure about that?")){
		localStorage.setItem("count",0)
		update()
	}
}