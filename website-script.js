function add_navbar_and_photo_column() {
	let navbar = `
			    <nav class="col-sm-3 px-0 mx-0 navbar navbar-default navbar-fixed-top navbar-expand-sm  bg-primary text-light">
					<div class="container">
						<h3>Jeremy Beard</h3>
					</div>
				</nav>
				<nav class="col-sm-9 px-0 mx-0 navbar navbar-default navbar-fixed-top navbar-expand-sm  bg-primary text-light">
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
				      	<li class="nav-item">
				      		<a class="nav-link text-primary" style="width: 300px;"></a>
				      	</li>
				      	<li class="nav-item">
				      		<a class="nav-link text-primary w-75" style="width: 300px;" onclick="secret_mode()">Secret</a>
				      	</li>
				   </ul>
				</nav>
		`;
	document.getElementById("navbar-row").innerHTML = navbar;

	//document.getElementById("main").style = "padding-top: 70px;";

	photo_column = `<div class="p-3"><img id="photo" src="./photo2.jpg" class="rounded-circle mx-auto d-block border border-primary w-75"></div>
		<div class="p-5">
		  	<p>Jeremy Beard</p>
		  	<p>PhD Candidate at Carnegie Mellon University</p>
		  	<p>Email: jbeard (at) andrew (dot) cmu (dot) edu</p>
		</div>
		`

	x = document.getElementById("photo-column");
	x.innerHTML = photo_column;




}

function secret_mode() {
	  		document.getElementById("photo").src = "./pig.png";
	  		document.getElementById("theme").setAttribute("data-bs-theme", "chaos");
		}