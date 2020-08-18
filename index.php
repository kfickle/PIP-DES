<!doctype html>
<html lang="en">

<?php
	
	// set varible meta content for use in head.php include file
	
    $pagetitle = "page title variable?";
    $metadescription = ""; 
    $metakeywords = "";
    $authorname = "PSU Student Media Tech"; 

	// call include files
	
    include_once './includes/head.php';
	include_once './includes/navigation.php';
	?>

<body>

	<!-- Masthead-->
	<main class="page-content">
		<div class="container h-100">
			<div class="row h-100 align-items-center justify-content-center text-center">
				<div class="col-lg-10 align-self-end">
					<h1 class="text-uppercase">Organization Name</h1>
					<hr class="divider my-4" />
				</div>
				<div class="col-lg-8 align-self-baseline">
					<p class="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
					<a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
				</div>
			</div>
		</div>
	</main>

	<?php include_once './includes/footer.php'; ?>
</body>

</html>
