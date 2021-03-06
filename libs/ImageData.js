var path = require("path");

/**
 * Image data interface
 *
 * @constructor
 * @param String key
 * @param String name
 * @param String|Buffer data
 */
function ImageData(key, name, data) {
    this.fileName   = key;
    this.bucketName = name;
    this.data       = ( Buffer.isBuffer(data) ) ? data : new Buffer(data, "binary");
}

/**
 * Bucket name getter
 *
 * @public
 * @return String
 */
ImageData.prototype.getBucketName = function ImageData_getBucketName() {
    return this.bucketName;
};

/**
 * Basename getter
 *
 * @public
 * @return String
 */
ImageData.prototype.getBaseName = function ImageData_getBaseName() {
    return path.basename(this.fileName);
};

/**
 * Dirname getter
 *
 * @public
 * @return String
 */
ImageData.prototype.getDirName = function ImageData_getDirName() {
    var dir = path.dirname(this.fileName);

    return ( dir === "." ) ? "" : dir;
};

/**
 * Filename getter
 *
 * @public
 * @return String
 */
ImageData.prototype.getFileName = function ImageData_getFileName() {
    return this.fileName;
};

/**
 * Image type getter
 *
 * @public
 * @return String
 */
ImageData.prototype.getType = function ImageData_getType() {
    return path.extname(this.fileName).slice(1);
};

/**
 * Image buffer getter
 *
 * @public
 * @return Buffer
 */
ImageData.prototype.getData = function ImageData_getData() {
    return this.data;
};

module.exports = ImageData;
