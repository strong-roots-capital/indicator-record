/**
 * indicator-record
 * Interface for Records transformed by indicators
 */

/**
 * Architectural Decision
 *
 * A `Map` was initially used to store indicators so that order of
 * insertion would be preserved. This feature has, as of 2019-10-24,
 * never been used and the complexity of `Map` as compared to ordinary
 * objects has proven to complicate the use of lenses.
 *
 * IndicatorRecords are hereby deprecated in favor of PipelineRecord
 * (internally maintained).
 */

import TimeseriesRecord from 'timeseries-record'
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
    record: TimeseriesRecord
    /**
     * Map of indicator name and associated values (objects), in a
     * shape analogous to Records.
     */
    indicators: Map<string, T>
}


export default IndicatorRecord
