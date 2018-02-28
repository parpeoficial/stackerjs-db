[![Travis](https://img.shields.io/travis/parpeoficial/stackerjs-db.svg)](https://travis-ci.org/parpeoficial/stackerjs-db)
[![Maintainability](https://api.codeclimate.com/v1/badges/65502c9d77431f4f8d31/maintainability)](https://codeclimate.com/github/parpeoficial/stackerjs-db/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65502c9d77431f4f8d31/test_coverage)](https://codeclimate.com/github/parpeoficial/stackerjs-db/test_coverage)
[![Dependencies](https://img.shields.io/david/parpeoficial/stackerjs-db.svg)](https://david-dm.org/parpeoficial/stackerjs-db)
[![npm](https://img.shields.io/npm/dt/stackerjs-db.svg)](https://www.npmjs.com/package/stackerjs-db)


[![NPM](https://nodei.co/npm/stackerjs-db.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stackerjs-db)

![StackerJS](https://s3-sa-east-1.amazonaws.com/parpe.prod/StackerJS-logo.png)

# Database
An MySQL adapter for StackerJS apps with ORM interacting with MySQL databases.

## Usage
Factory responsible for loading database adapter.

```javascript
    import { DB } from 'stackerjs-db';

    let conn = DB.Factory.getConnection(),
        queryBuilder = DB.Factory.getQueryBuilder(),
        criteria = DB.Factory.getQueryCriteria();
```