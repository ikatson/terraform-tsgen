import * as fs from 'fs';
import * as path from 'path';

/**
* Recursively creates directories until `targetDir` is valid.
* @param targetDir target directory path to be created recursively.
* @param isRelative is the provided `targetDir` a relative path?
*/
export function mkdirRecursiveSync(targetDir: string, isRelative = false) {
    const sep = path.sep;
    const initDir = path.isAbsolute(targetDir) ? sep : '';
    const baseDir = isRelative ? __dirname : '.';

    targetDir.split(sep).reduce((prevDirPath, dirToCreate) => {
        const curDirPathToCreate = path.resolve(baseDir, prevDirPath, dirToCreate);
        try {
            fs.mkdirSync(curDirPathToCreate);
        } catch (err) {
            if (err.code !== 'EEXIST') {
                throw err;
            }
            // caught EEXIST error if curDirPathToCreate already existed (not a problem for us).
        }

        return curDirPathToCreate; // becomes prevDirPath on next call to reduce
    }, initDir);
}
