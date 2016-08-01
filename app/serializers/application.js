import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
    serialize: function(record, options) {
        options = options ? options : {}; // handle the case where options is undefined
        options.includeId = true;
        return this._super.apply(this, [record, options]); // Call the parent serializer
    }
});

