var ageRadio = document.querySelectorAll('.age input')
for (var i = 0; i < ageRadio.length; i++) {
  ageRadio[i].addEventListener('change', filter)
};

var typeCheckboxes = document.querySelectorAll('.type input')
for (var ii = 0; ii < typeCheckboxes.length; ii++) {
  typeCheckboxes[ii].addEventListener('change', filter)
};

var ehcRadio = document.querySelectorAll('.ehc input')
for (var iii = 0; iii < ehcRadio.length; iii++) {
  ehcRadio[iii].addEventListener('change', filter)
};



filter()
function filter () {
console.log('dsadas')

  var i, j
  // Get the selected categories
  var ageRadio = document.querySelectorAll('.age input')
  var age = []
  var c
  for (i = 0; i < ageRadio.length; i++) {
    if (ageRadio[i].checked) {
      c = ageRadio[i].value
      age.push(c)
    }
  }

  var typeCheckboxes = document.querySelectorAll('.type input')
  var type = []
  var cc
  for (i = 0; i < typeCheckboxes.length; i++) {
    if (typeCheckboxes[i].checked) {
      cc = typeCheckboxes[i].value
      type.push(cc)
    }
  }

  var ehcRadio = document.querySelectorAll('.ehc input')
  var ehc = []
  var ccc
  for (i = 0; i < ehcRadio.length; i++) {
    if (ehcRadio[i].checked) {
      ccc = ehcRadio[i].value
      ehc.push(ccc)
    }
  }


  // Apply the filter
  var items = document.querySelectorAll('.filterDiv')
  var item, ageshow, typeshow, ehcShow

  for (i = 0; i < items.length; i++) {
    item = items[i]
    if (age.length === 0) {
      ageshow = true
    } else {
      ageshow = false
      for (j = 0; j < age.length; j++) {
        if (item.classList.contains(age[j])) {
          ageshow = true
          break
        } else {
          ageshow = false
        }
      }
    }

    if (type.length === 0) {
      typeshow = true
    } else {
      typeshow = false
      for (j = 0; j < type.length; j++) {
        if (item.classList.contains(type[j])) {
          typeshow = true
          break
        } else {
          typeshow = false
        }
      }
    }

    if (ehc.length === 0) {
      ehcShow = true
    } else {
      ehcShow = false
      for (j = 0; j < ehc.length; j++) {
        if (item.classList.contains(ehc[j])) {
          ehcShow = true
          break
        } else {
          ehcShow = false
        }
      }
    }

   

    if (ageshow && typeshow && ehcShow) {
      item.classList.add('show')
    } else {
      item.classList.remove('show')
    }
  }

  var totalSchemes = document.querySelectorAll('.show').length
  console.log(totalSchemes)
  document.getElementById('numberOfSchemes').innerHTML = totalSchemes
  var x = document.getElementById('noResults')
  // var y = document.getElementById('schemeCounter')
  if (totalSchemes !== 0) {
    x.style.display = 'none'
    // y.style.display = 'block'
  } else {
    // y.style.display = 'none'
    x.style.display = 'block'
  }
}
