<!doctype html>
<html lang="en">

<?php

	// set varible meta content for use in head.php include file

    $pagetitle = "";
    $metadescription = "";
    $metakeywords = "";
    $authorname = "PSU Student Media Tech";

	// call include files

    include_once './includes/head.php';
		include_once './includes/navigation.php';
	?>

<body>

	<!-- page-specific generated content starts-->
	<main class="page-content">
		<div class="container-fluid h-100">
			<div class="row h-100 align-items-center justify-content-center text-center">
				<div class="col-lg-10 align-self-end">
					<h1>Organization Name</h1>
				</div>
				<div class="col-xl-6 col-lg-8 col-md-11 col-sm-11 col-11 align-self-baseline">
					<div class="mt-5 mb-4 card">
						<p class="m-3 m-md-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin egestas laoreet. Ut varius risus vel eros feugiat convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam aliquet lacinia sapien at interdum. Pellentesque at mi in est dictum ultricies. Sed non ante justo. Sed efficitur vulputate ligula eget elementum. Integer rhoncus elementum neque vitae euismod.</p>
					</div>
					<a class="btn connect-btn" href="#">Connect</a>
				</div>
			</div>
		</div>
	</main>
	<!-- page-specific generated content ends -->
	<?php include_once './includes/footer.php'; ?>
</body>

</html>
