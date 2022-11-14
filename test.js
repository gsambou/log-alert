const alert = require('./index');

alert();

alert({ type: `success`, msg: `All done!` });
alert(`success`, `All done!`);
alert({ type: `warning`, msg: `You didn't add something` });
alert(`warning`, `You didn't add something`);
alert({ type: `info`, msg: `Awesome cli app` });
alert(`info`, `Awesome cli app`);
alert({ type: `error`, msg: `Something went wrong` });
alert(`error`, `Something went wrong`);
alert({ type: `badtype`, msg: `Provided bad type`, name: 'deleted' });
alert(`badtype`, `Provided bad type`, 'ddddd');
