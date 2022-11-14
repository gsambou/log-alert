
![Capture d’écran 2022-11-14 à 09 03 23](https://user-images.githubusercontent.com/48604464/201606943-465e84be-7d24-4ede-a7c9-bf59086613f5.png)

<h4 align="center">
 CLI Alerts with colors & colored symbols for success, info, warning, error.
 </h4>

# alert-log

![image](https://user-images.githubusercontent.com/48604464/201605835-1d078828-8ec5-467f-bb4d-68c04c085c66.png)

## Install

```sh
npm install alert-log
```

<br>

![image](https://user-images.githubusercontent.com/48604464/201605954-dab2faed-a4a1-4708-a278-b6b7dfd2610d.png)


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

![image](https://user-images.githubusercontent.com/48604464/201607059-314eedc9-684f-4180-a228-440618cf5bc3.png)


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


![image](https://user-images.githubusercontent.com/48604464/201608140-5360fda9-fc29-47eb-90cd-ef2003ebcb67.png)

## License & Conduct

- MIT © [gsambou](https://twitter.com/gsambou/)
- [Code of Conduct](code-of-conduct.md)



![image](https://user-images.githubusercontent.com/48604464/201608099-375120d8-22c4-4db3-98fd-a6c96c8b2b81.png)

## Connect

<div align="left">
 <p><a href="https://twitter.com/gsamboudev/"><img alt="Twitter @gsambou.dev" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small>follow for more Open-Source projects</small></p>
</div>
