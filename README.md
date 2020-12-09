# processor-ec2-instance-region

> **Add region tag to metrics. Its value is fetched from the Instance Identity Document.**  
> A [`telemetry`](https://github.com/telemetry-js/telemetry) plugin.

[![npm status](http://img.shields.io/npm/v/@telemetry-js/processor-ec2-instance-region.svg)](https://www.npmjs.org/package/@telemetry-js/processor-ec2-instance-region)
[![node](https://img.shields.io/node/v/@telemetry-js/processor-ec2-instance-region.svg)](https://www.npmjs.org/package/@telemetry-js/processor-ec2-instance-region)
[![Test](https://github.com/telemetry-js/processor-ec2-instance-region/workflows/Test/badge.svg?branch=main)](https://github.com/telemetry-js/processor-ec2-instance-region/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

<details><summary>Click to expand</summary>

- [Usage](#usage)
- [API](#api)
  - [Options](#options)
- [Install](#install)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

## Usage

```js
const telemetry = require('@telemetry-js/telemetry')()
const region = require('@telemetry-js/processor-ec2-instance-region')

telemetry.task()
  .process(region)
```

## API

### Options

None.

## Install

With [npm](https://npmjs.org) do:

```
npm install @telemetry-js/processor-ec2-instance-region
```

## Acknowledgements

This project is kindly sponsored by [Reason Cybersecurity Ltd](https://reasonsecurity.com).

[![reason logo](https://cdn.reasonsecurity.com/github-assets/reason_signature_logo.png)](https://reasonsecurity.com)

## License

[MIT](LICENSE) © Vincent Weevers
