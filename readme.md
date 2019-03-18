# indicator-record [![Build status](https://travis-ci.org/strong-roots-capital/indicator-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/indicator-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/indicator-record.svg)](https://npmjs.org/package/@strong-roots-capital/indicator-record) [![codecov](https://codecov.io/gh/strong-roots-capital/indicator-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/indicator-record)

> Interface for Records transformed by indicators

## Install

``` shell
npm install @strong-roots-capital/indicator-record
```

## Use

``` typescript
import IndicatorRecord from '@strong-roots-capital/indicator-record'
```

The `IndicatorRecord` interface is defined as

``` typescript
/**
 * Collection of one or more indicator values derived from source
 * time-series record.
 */
interface IndicatorRecord {
    /**
     * Context of record data.
     */
    context: RecordContext
    /**
     * Time-series record data.
     */
    record: Record
    /**
     * Map of indicator name and associated values (objects), in a
     * shape analogous to Records.
     */
    indicator: Map<string, any>
}
```

## Related

- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
