<script src="jv/dist/jquery.validate.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
$(document).ready(function () {
    alert("Версия jQuery " + jQuery.fn.jquery);
});
$(".dws-form").on("click", ".tab", function() {
    // Удаляем классы active
    $(".dws-form .tab").removeClass('active');
 
    // Добавляем классы active
    $(this).addClass('active');
});
