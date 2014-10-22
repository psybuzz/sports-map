var selected = [];
$('input:checked').each(function() {
    selected.push($(this).attr('name'));
});