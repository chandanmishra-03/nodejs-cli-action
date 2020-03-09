among
--
![Travis](https://travis-ci.org/bjarneo/among.svg?branch=master)

Find the substring / element between the $start and $end argument.

Developers often need to find a string between two elements. This package will simplify that task by abstract away the regex part.

Usage
--

```bash
$ npm i --save among
```

```js
const among = require('among');

const str = 'The [quick] [brown] {{fox}} $jumps$ over the [lazy] {{dog}}';

let find = among('{{', '}}');

console.log(find(str));

find = among('[', ']', true);

console.log(find(str));

console.log(among('$', '$')(str));
```
Result:  
``` 
[ 'fox', 'dog' ]
[ '[quick]', '[brown]', '[lazy]' ]
[ 'jumps' ]
```

Api
--
```
const find = among(string $start, string $end [, boolean $preserved]);

find(string $str)
```
* $start is the first string to match
* $end is the last string to match
* $preserved is if the $start and $end strings should be preserved(optional)

* $str the input string to search for elements

Tests
--
```bash
$ npm test
```

Contribution
--
Contributions are appreciated.

License
--
MIT-licensed. See LICENSE.
