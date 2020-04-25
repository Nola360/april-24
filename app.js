const search_input = document.querySelector('#search_input');

search_input.addEventListener('keyup', function (e) {
  let search_item = e.target.value.toLowerCase();
  let span_items = document.querySelectorAll('.table_body .name span');

  span_items.forEach(function (item) {
    console.log(span_items)
    if (item.textContent.toLowerCase().indexOf(search_item) != -1) {
      item.closest('li').style.display = 'block';
    } else {
      item.closest('li').style.display = 'none';
    }
  })
})

