function insert(input) {
  document.form.viewInput.value = document.form.viewInput.value + input;
}

function del() {
  let inp = document.form.viewInput.value;
  document.form.viewInput.value = inp.substring(0, inp.length - 1);
}

function c() {
  document.form.viewInput.value = "";
}

function hasil() {
  document.form.viewInput.value = eval(document.form.viewInput.value);
}
