function add_navbar_and_photo_column() {
	let navbar = `
	    <nav class="navbar navbar-expand-sm fixed-top bg-primary text-light">
			<div class="container pr-0" style="width: 200px;">
				<h3>Jeremy Beard</h3>
			</div>
			<div class="container">
				<ul class="navbar-nav">
			      	<li class="nav-item">
			        	<a class="nav-link text-reset" href="./home.html">Home</a>
			      	</li>
			      	<li class="nav-item">
			      		<a class="nav-link text-reset" href="./cv.html">CV</a>
			      	</li>
			      	<li class="nav-item">
			        	<a class="nav-link text-reset" href="./publications.html">Publications</a>
			      	</li>
			      	<li class="nav-item">
			        	<a class="nav-link text-reset" href="./talks.html">Talks</a>
			      	</li>
			      	<li class="nav-item">
			        	<a class="nav-link text-reset" href="./teaching.html">Teaching</a>
			      	</li>
			    </ul>
			    <div class="container pr-0 position-relative start-50 text-primary" onclick="secret_mode()">Secret</div>
			</div>
		</nav>
		`;
	document.getElementById("navbar-row").innerHTML = navbar;

	document.getElementById("main").style = "padding-top: 70px;";

	photo_column = `<div class="p-3"><img id="photo" src="./photo2.jpg" class="rounded-circle mx-auto d-block border border-primary w-75"></div>
		<div class="p-5">
		  	<p>Jeremy Beard</p>
		  	<p>PhD Candidate at Carnegie Mellon University</p>
		  	<p>Email: jbeard(at)andrew(dot)cmu(dot)edu</p>
		</div>
		`

	x = document.getElementById("photo-column");
	x.innerHTML = photo_column;
	x.style = "position: fixed;"




}

function secret_mode() {
	  		document.getElementById("photo").src = "./photo.png";
	  		document.getElementById("theme").setAttribute("data-bs-theme", "chaos");
		}