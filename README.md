[![npm](https://nodei.co/npm/man-pager.png)](https://npmjs.com/package/man-pager)

# man-pager

[![Dependency Status][david-badge]][david]

Pipe man pages (in Troff) to the `man(1)` pager.

[david]: https://david-dm.org/eush77/man-pager
[david-badge]: https://david-dm.org/eush77/man-pager.png

## API

#### `troffSource.pipe(manPager())`

`manPager()` returns a writable stream and launches man pager to display the content.

## Install

```
npm install man-pager
```

## License

MIT
