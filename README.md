## Install

```sh
npm install alert-log
```

<br>

## Usage

```js
const alert = require('alert-log');

// Provide the type, msg and name options

alert({ type: `success`, msg: `All done!` });
alert(`success`, `All done!`);
// Prints: ✔   SUCCESS   All done!

alert({ type: `warning`, msg: `You didn't add something` });
alert(`warning`, `You didn't add something`);
// Prints:  ⚠   WARNING   You didn't add something

alert({ type: `info`, msg: `Awesome cli app` });
alert(`info`, `Awesome cli app`);
// Prints:  ℹ   INFO   Awesome cli app

alert({ type: `error`, msg: `Something went wrong` });
alert(`error`, `Something went wrong`);
// Prints: ⨯   ERROR   Something went wrong
```

</br>

## API

### alert(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string` <br>
Default: `You provided an invalid type`

#### ❯ name

Type: `string` <br>
Default: `You provided an invalid type`

### alert(type, msg, name)

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string` <br>
Default: `You provided an invalid type`

#### ❯ name

Type: `string` <br>
Default: `You provided an invalid type`
