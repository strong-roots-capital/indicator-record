/**
 * indicator-record
 * Interface for Records transformed by indicators
 */

import Record from 'timeseries-record'
import RecordContext from '@strong-roots-capital/record-context'


/**
 * Collection of one or more indicator values derived from source
 * time-series record.
 */
interface IndicatorRecord<T = any> {
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
    indicators: Map<string, T>
}


export default IndicatorRecord
