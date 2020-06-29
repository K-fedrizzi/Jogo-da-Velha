<?php if($_GET['mensagem']) { ?>

<div id="alert" class="flex items-center bg-primary text-white text-sm font-bold px-4 py-3 -mt-2 mb-6" role="alert">
    <p><?= $_GET['mensagem'] ?></p>
</div>

<?php } ?>

<script>
setTimeout(() => { document.getElementById('alert').remove(); }, 5000);
</script>