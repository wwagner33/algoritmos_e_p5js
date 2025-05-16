// --- Funções de string ---
function sortStrings(arr) {
  return arr.slice().sort((a, b) => a.localeCompare(b));
}
function linearSearchStrings(arr, target) {
  return arr.indexOf(target);
}

// --- Funções de objeto ---
function sortObjectsByField(arr, field) {
  return arr.slice().sort((a, b) =>
    String(a[field]).localeCompare(String(b[field]))
  );
}
function linearSearchObjects(arr, field, value) {
  // retorna todos objetos cujo campo bate exatamente com value
  return arr.filter(obj => String(obj[field]) === value);
}

// --- Controle de UI ---
const tipoEl    = document.getElementById('tipo');
const divStr    = document.getElementById('input-string');
const divObj    = document.getElementById('input-object');
const btnSort   = document.getElementById('btnSort');
const btnSearch = document.getElementById('btnSearch');
const resultado = document.getElementById('resultado');

tipoEl.addEventListener('change', () => {
  const isString = tipoEl.value === 'string';
  divStr.style.display = isString ? '' : 'none';
  divObj.style.display = isString ? 'none' : '';
});

// dispara o change no carregamento para ajustar visibilidade
tipoEl.dispatchEvent(new Event('change'));

btnSort.addEventListener('click', () => {
  resultado.textContent = '';
  if (tipoEl.value === 'string') {
    const list = document
      .getElementById('listaStrings')
      .value.split(',')
      .map(s => s.trim());
    const sorted = sortStrings(list);
    resultado.textContent = JSON.stringify(sorted, null, 2);
  } else {
    const objs  = JSON.parse(
      document.getElementById('listaObjetos').value
    );
    const field = document.getElementById('campoObjeto').value;
    const sorted = sortObjectsByField(objs, field);
    resultado.textContent = JSON.stringify(sorted, null, 2);
  }
});

btnSearch.addEventListener('click', () => {
  resultado.textContent = '';
  const valor = document.getElementById('valorBusca').value.trim();
  if (!valor) {
    resultado.textContent = 'Informe um valor para buscar.';
    return;
  }

  if (tipoEl.value === 'string') {
    const list = document
      .getElementById('listaStrings')
      .value.split(',')
      .map(s => s.trim());
    const idx = linearSearchStrings(list, valor);
    resultado.textContent = idx >= 0
      ? `Encontrado em índice ${idx}`
      : 'Não encontrado';
  } else {
    const objs  = JSON.parse(
      document.getElementById('listaObjetos').value
    );
    const field = document.getElementById('campoObjeto').value;
    const found = linearSearchObjects(objs, field, valor);
    resultado.textContent = found.length
      ? JSON.stringify(found, null, 2)
      : 'Não encontrado';
  }
});
