function longestConsec(strarr, k) {
    if (strarr.length < k) return ''
    let answer=  []
     for (let i = 0; i < strarr.length; i++){
       let compare = []
       for (let j = 0; j < k; j++){
         compare.push(strarr[i + j])
       }
        if (compare.join('').length > answer.join('').length) {
         answer = compare
       }
     }
    return answer.join('')
  }