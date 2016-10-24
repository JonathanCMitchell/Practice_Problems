function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var elem = array[i]
    var j = i
    while (j > 0 && array[j-1] > elem) {
      array[j] = array[j-1]
      j--
    }
      array[j] = elem
  }
  return array
}