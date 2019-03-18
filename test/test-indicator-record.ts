import test from 'ava'

/**
 * Library under test
 */

import IndicatorRecord from '../src/indicator-record'

interface Indicator {
    Close: number
}

test('IndicatorRecord is importable', t => {
    t.pass()
})

test('IndicatorRecord is of expected form', t => {
    function returnIndicatorRecord(): IndicatorRecord {
        const indicatorMap = new Map<string, Indicator>()
        indicatorMap.set('mic', {Close: 8})
        return {
            context: {tradepair: 'MYPR', timeframe: 1, exchange: 'yolo'},
            record: {
                Time: 1,
                Open: 2,
                High: 3,
                Low: 4,
                Close: 5,
                Volume: 6
            },
            indicators: indicatorMap
        }
    }
    const indicatorRecord: IndicatorRecord = returnIndicatorRecord()
    t.pass()
})
