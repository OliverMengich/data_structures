const strings: string[] = ["a","b","c","d"];

strings.push('e') //O(1)
strings.pop() //O(1)
strings.unshift('i','ii') //O(n) ->loops through array to assign new indices
//unshift can't be best

strings.splice(2,1,'f') //O(n)
console.log(strings);
 